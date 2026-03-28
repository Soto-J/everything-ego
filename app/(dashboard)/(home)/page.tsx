import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        priority
        src="/images/Eganam Segbefia Boglioli hero.jpg"
        alt="Eganam ÉGO Segbefia"
        fill
        className="object-cover object-center"
      />

      {/* Gradient overlay — dark at bottom, transparent at top */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {/* Text content — pinned to bottom left */}
      <div className="text-primary-foreground absolute bottom-0 left-0 p-10 md:p-14">
        <p className="text-primary-foreground mb-1 text-lg font-semibold tracking-[0.35em] uppercase">
          Eganam Segbefia
        </p>

        <h1 className="mb-4 text-8xl leading-none font-light tracking-widest md:text-9xl">
          ÉGO
        </h1>

        <div className="from-primary-foreground/80 mb-5 h-px w-24 bg-linear-to-r to-transparent" />

        <p className="text-primary-foreground/70 mb-8 text-base font-semibold tracking-[0.2em] uppercase md:text-lg">
          Trumpet Soloist&ensp;·&ensp;Cultural Artist&ensp;·&ensp;New York City
        </p>

        <div className="flex gap-4 text-sm tracking-widest uppercase">
          <Link
            href="/biography"
            className="border-primary-foreground/40 border px-6 py-2.5 transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Biography
          </Link>
          <Link
            href="/contact"
            className="bg-primary-foreground/90 hover:bg-primary-foreground/80 px-6 py-2.5 text-black transition-colors duration-300"
          >
            Book a Performance
          </Link>
        </div>
      </div>
    </div>
  );
}
