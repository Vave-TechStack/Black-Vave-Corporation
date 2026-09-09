import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group", className)}
      aria-label="BLACK VAVE CORPORATION home"
    >
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <Image
          src="/BVC Logo.png"
          alt="BLACK VAVE CORPORATION logo"
          width={44}
          height={44}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading text-lg md:text-xl font-bold text-text tracking-tight">
            BLACK VAVE
          </span>
          <span className="text-[10px] md:text-[11px] text-text-muted font-medium tracking-[0.2em] uppercase">
            Corporation
          </span>
        </div>
      )}
    </Link>
  );
}
