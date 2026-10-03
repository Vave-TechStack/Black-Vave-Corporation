import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Contact enquiry API.
 *
 * Security measures:
 * - Same-origin enforcement (Origin vs Host check)
 * - JSON content-type and body-size limits
 * - Server-side Zod validation (never trust the client)
 * - Honeypot field for spam bots
 * - Per-IP in-memory rate limiting (5 submissions / 10 minutes)
 * - Safe error responses (no stack traces, no env data, no submission echo)
 *
 * Email delivery uses a Resend-compatible HTTP API when
 * CONTACT_EMAIL_API_KEY is configured. When no provider is configured the
 * submission is accepted and logged server-side, and the response reports
 * delivered: false so the UI can be transparent about delivery status.
 */

const MAX_BODY_BYTES = 10 * 1024;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254),
  company: z.string().trim().max(200).optional().default(""),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .default("")
    .refine((v) => !v || /^[+\d][\d\s-]{6,}$/.test(v), {
      message: "Please enter a valid phone number",
    }),
  service: z.string().trim().min(1, "Please select a service").max(100),
  budget: z.string().trim().max(100).optional().default(""),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your project")
    .max(5000),
  honeypot: z.string().optional().default(""),
});

type ContactSubmission = z.infer<typeof contactSchema>;
type ContactEmailPayload = Omit<ContactSubmission, "honeypot">;

const RATE_LIMIT_WINDOW_MS = Number(
  process.env.CONTACT_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000
);
const RATE_LIMIT_MAX = Number(
  process.env.CONTACT_RATE_LIMIT_MAX || 5
);
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function buildEmailText(submission: ContactEmailPayload): string {
  return [
    "New contact enquiry via blackvave.com",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.company ? `Company: ${submission.company}` : null,
    submission.phone ? `Phone: ${submission.phone}` : null,
    `Service of interest: ${submission.service}`,
    submission.budget ? `Budget: ${submission.budget}` : null,
    "",
    "Project description:",
    submission.message,
  ]
    .filter(Boolean)
    .join("\n");
}

async function sendContactEmail(
  submission: ContactEmailPayload
): Promise<boolean> {
  const apiKey = process.env.CONTACT_EMAIL_API_KEY;
  const to =
    process.env.CONTACT_RECIPIENT_EMAIL || "contact@blackvave.com";
  const from =
    process.env.CONTACT_EMAIL_FROM || "Black Vave Website <noreply@blackvave.com>";
  const apiUrl =
    process.env.CONTACT_EMAIL_API_URL || "https://api.resend.com/emails";

  if (!apiKey) return false;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: submission.email,
        subject: `New enquiry: ${submission.service} — ${
          submission.company || submission.name
        }`,
        text: buildEmailText(submission),
      }),
    });

    if (!response.ok) {
      console.error(
        `[contact] Email delivery failed with status ${response.status}`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("[contact] Email delivery error:", error instanceof Error ? error.message : "Unknown error");
    return false;
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json(
          { success: false, message: "Request rejected." },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { success: false, message: "Request rejected." },
        { status: 403 }
      );
    }
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { success: false, message: "Unsupported request." },
      { status: 415 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, message: "Submission is too large." },
      { status: 413 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const firstMessage =
      Object.values(fieldErrors).flat()[0] ||
      "Please review the form and try again.";
    return NextResponse.json(
      { success: false, message: firstMessage, fields: fieldErrors },
      { status: 400 }
    );
  }

  const submission = parsed.data;

  if (submission.honeypot) {
    return NextResponse.json({ success: true, delivered: false });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many submissions. Please try again later.",
      },
      { status: 429 }
    );
  }

  const { honeypot: _honeypot, ...safeSubmission } = submission;
  console.log("[contact] New enquiry received:", safeSubmission);

  const delivered = await sendContactEmail(safeSubmission);

  return NextResponse.json({ success: true, delivered });
}
