import { ServiceIcon } from "@/components/ui/icon-map";
import type { Industry } from "@/data/industries";

interface IndustryArtworkProps {
  industry: Industry;
  className?: string;
}

/**
 * Decorative, industry-specific vector artwork. Rendered as inline SVG using
 * the industry's own accent colour, so every sector reads as visually distinct
 * without shipping binary image assets or depending on external image hosts.
 * Always paints, scales responsively, and is hidden from assistive tech.
 */
export function IndustryArtwork({ industry, className }: IndustryArtworkProps) {
  const { accent, accentLight, tint } = industry.theme;
  const uid = `art-${industry.slug}`;

  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <defs>
        <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accentLight} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern
          id={`${uid}-grid`}
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M28 0H0v28"
            fill="none"
            stroke={accent}
            strokeOpacity="0.10"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="400" height="320" fill={`url(#${uid}-glow)`} />
      <rect width="400" height="320" fill={`url(#${uid}-grid)`} />

      <g
        fill="none"
        stroke={`url(#${uid}-stroke)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Motif slug={industry.slug} uid={uid} accent={accent} tint={tint} />
      </g>

      <g transform="translate(200 160)">
        <circle r="46" fill={accent} fillOpacity="0.10" />
        <circle r="46" fill="none" stroke={accent} strokeOpacity="0.35" />
        <foreignObject x="-26" y="-26" width="52" height="52">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              color: accentLight,
            }}
          >
            <ServiceIcon name={industry.icon} className="w-full h-full" />
          </div>
        </foreignObject>
      </g>
    </svg>
  );
}

function Motif({
  slug,
  uid,
  accent,
  tint,
}: {
  slug: string;
  uid: string;
  accent: string;
  tint: string;
}) {
  switch (slug) {
    // ECG waveform across a rounded vitals panel, with baseline and bar chart
    case "healthcare":
      return (
        <>
          <path d="M92 71h22M103 60v22" strokeWidth="2.5" />
          <rect x="40" y="96" width="320" height="128" rx="18" fill={tint} stroke="none" />
          <rect x="40" y="96" width="320" height="128" rx="18" />
          <path d="M64 160h44l14-34 18 66 16-44 12 12h44" />
          <circle cx="120" cy="126" r="4" fill={accent} stroke="none" />
          <path d="M300 122h40M300 138h28" strokeOpacity="0.5" />
          <path d="M48 280h304" strokeOpacity="0.6" />
          <path d="M70 258h14v22H70zM96 246h14v34H96zM122 264h14v16h-14z" />
          <path d="M300 252h-14" strokeOpacity="0.5" />
          <circle cx="312" cy="252" r="8" />
        </>
      );

    // Stacked learning layers with rising bars
    case "education":
      return (
        <>
          <path d="M200 84l72 30-72 30-72-30z" fill={tint} stroke="none" />
          <path d="M200 84l72 30-72 30-72-30z" />
          <path d="M158 126v22c0 10 19 20 42 20s42-10 42-20v-22" strokeOpacity="0.6" />
          <path d="M242 124v34" strokeOpacity="0.5" />
          <path d="M96 234h48M96 212h72M96 190h96" strokeOpacity="0.55" />
          <circle cx="304" cy="120" r="16" />
        </>
      );

    // Ascending market bars with trend line and coin
    case "financial-services":
      return (
        <>
          <rect x="76" y="196" width="34" height="70" rx="5" fill={tint} stroke="none" />
          <rect x="126" y="166" width="34" height="100" rx="5" fill={tint} stroke="none" />
          <rect x="176" y="186" width="34" height="80" rx="5" fill={tint} stroke="none" />
          <rect x="226" y="136" width="34" height="130" rx="5" fill={tint} stroke="none" />
          <path d="M76 196h34v70H76zM126 166h34v100h-34zM176 186h34v80h-34zM226 136h34v130h-34z" />
          <path d="M88 150l58-38 52 18 56-52" strokeWidth="2.5" />
          <circle cx="254" cy="78" r="7" fill={accent} stroke="none" />
        </>
      );

    // Commerce: cart grid and product tiles
    case "retail-ecommerce":
      return (
        <>
          <rect x="88" y="108" width="104" height="104" rx="12" fill={tint} stroke="none" />
          <rect x="88" y="108" width="104" height="104" rx="12" />
          <path d="M88 146h104" strokeOpacity="0.6" />
          <circle cx="140" cy="182" r="14" />
          <path d="M222 128h92M222 160h92M222 192h92" strokeOpacity="0.55" />
          <rect x="222" y="118" width="18" height="18" rx="4" />
          <rect x="252" y="150" width="18" height="18" rx="4" />
          <rect x="282" y="182" width="18" height="18" rx="4" />
        </>
      );

    // Publishing: stacked text lines and column rules
    case "publishing":
      return (
        <>
          <rect x="96" y="80" width="150" height="180" rx="10" fill={tint} stroke="none" />
          <rect x="96" y="80" width="150" height="180" rx="10" />
          <rect x="130" y="62" width="150" height="180" rx="10" />
          <path d="M152 106h106M152 132h106M152 158h84M152 184h106" strokeOpacity="0.6" />
          <path d="M152 210h60" strokeWidth="2.5" />
          <circle cx="304" cy="234" r="18" />
        </>
      );

    // Manufacturing: conveyor, gears and output bars
    case "manufacturing":
      return (
        <>
          <path d="M64 236h272" strokeOpacity="0.7" />
          <circle cx="104" cy="236" r="9" />
          <circle cx="152" cy="236" r="9" />
          <circle cx="200" cy="236" r="9" />
          <circle cx="248" cy="236" r="9" />
          <rect x="92" y="120" width="96" height="70" rx="8" fill={tint} stroke="none" />
          <path d="M92 120h96v70H92z" />
          <path d="M112 190v-34l28-22 28 22v34" />
          <circle cx="272" cy="150" r="30" />
          <circle cx="272" cy="150" r="11" />
          <path d="M272 112v14M272 174v14M234 150h14M296 150h14" strokeOpacity="0.6" />
        </>
      );

    // Real estate: skyline over a plot grid
    case "real-estate":
      return (
        <>
          <path d="M56 268h288" strokeOpacity="0.6" />
          <rect x="80" y="168" width="62" height="100" fill={tint} stroke="none" />
          <path d="M80 268v-100h62v100" />
          <rect x="158" y="112" width="72" height="156" fill={tint} stroke="none" />
          <path d="M158 268V112h72v156" />
          <rect x="246" y="196" width="52" height="72" fill={tint} stroke="none" />
          <path d="M246 268v-72h52v72" />
          <path d="M96 190h14M96 214h14M96 238h14M176 136h16M176 166h16M176 196h16M176 226h16" strokeOpacity="0.55" />
          <path d="M56 84l18 18 34-40" strokeWidth="2.5" />
        </>
      );

    // Professional services: document with signature and briefcase
    case "professional-services":
      return (
        <>
          <rect x="96" y="76" width="150" height="186" rx="10" fill={tint} stroke="none" />
          <path d="M96 262V76h150v186" />
          <path d="M120 112h102M120 140h102M120 168h66" strokeOpacity="0.55" />
          <path d="M120 210c22-16 40 14 62-4 14-11 26 6 40-6" strokeWidth="2.5" />
          <rect x="246" y="150" width="90" height="66" rx="8" />
          <path d="M272 150v-16a19 19 0 0138 0v16" />
          <circle cx="291" cy="182" r="7" />
        </>
      );

    // Agriculture: rolling field rows, sun and crop stems
    case "agriculture":
      return (
        <>
          <circle cx="308" cy="88" r="26" />
          <path d="M308 50v-14M308 140v-14M270 88h-14M360 88h-14" strokeOpacity="0.5" />
          <path d="M48 236c40-34 78 18 118-14s80 16 118-16" />
          <path d="M48 268c40-34 78 18 118-14s80 16 118-16" strokeOpacity="0.55" />
          <path d="M132 200c0-34 18-56 44-64-2 30-16 52-44 64z" fill={tint} />
          <path d="M132 200c0-34 18-56 44-64-2 30-16 52-44 64z" />
          <path d="M132 200V150" strokeOpacity="0.6" />
        </>
      );

    // Startups: launch trajectory and ascending steps
    case "startups-smes":
      return (
        <>
          <path d="M64 268h272" strokeOpacity="0.6" />
          <path d="M96 268v-52h52v52" />
          <path d="M156 268v-92h52v92" />
          <path d="M216 268v-132h52v132" />
          <path d="M96 216l60-52 60-40 52-58" strokeWidth="2.5" />
          <path d="M262 66h16v16" />
          <circle cx="96" cy="216" r="6" fill={accent} stroke="none" />
          <circle cx="156" cy="164" r="6" fill={accent} stroke="none" />
        </>
      );

    // Enterprise: connected node network over globe arcs
    default:
      return (
        <>
          <circle cx="200" cy="150" r="86" />
          <ellipse cx="200" cy="150" rx="34" ry="86" />
          <path d="M114 150h172M126 114h148M126 186h148" strokeOpacity="0.5" />
          <circle cx="200" cy="64" r="9" fill={accent} stroke="none" />
          <circle cx="286" cy="150" r="9" fill={accent} stroke="none" />
          <circle cx="200" cy="236" r="9" fill={accent} stroke="none" />
          <circle cx="114" cy="150" r="9" fill={accent} stroke="none" />
          <path d="M200 64L286 150M286 150l-86 86M200 236l-86-86M114 150l86-86" strokeOpacity="0.45" />
        </>
      );
  }
}