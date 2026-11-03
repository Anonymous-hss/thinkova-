import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Thinkova home"
      className={`inline-flex items-center transition hover:opacity-95 ${className || ""}`}
    >
      <Image
        src="/thinkova-logo.svg"
        alt="Thinkova"
        width={139}
        height={34}
        priority
        className="h-8 w-auto object-contain"
      />
    </Link>
  );
}
