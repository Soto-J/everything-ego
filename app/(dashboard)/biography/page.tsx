import Image from "next/image";
import Link from "next/link";

const PARAGRAPHS = [
  "Eganam ÉGO Segbefia got his start busking at the Grand Central Shuttle train station in 2015 as a member of MTA's Music Under New York program, and since then, has performed at notable venues across New York City such as The Madison Square Garden, Cathedral of St. John The Divine, and the much-revered Carnegie Hall. He is the winner of the inaugural New York Knicks' That's NY Talent halftime entertainment competition.",
  "Eganam was born in Lagos, Nigeria to Ghanaian parents, Moses and Dzineli, an Electrical Engineer and a Chef. His name comes from the Ewe language of Ghana, Africa and means, He [God] has given again, as God gave them their fourth child. His family migrated from Lagos to the United States in February 1999 after being chosen in the Diversity Immigrant green card lottery.",
  "Arriving to New York City at the age of ten, assimilating to new customs was not an easy feat for young Eganam. As a teenager growing up in the Bronx, he participated in after-school music programs and the Drum and Bugle Corps during the summer to safeguard himself from his rough neighborhood. Introduced to a wide array of instruments, he was drawn to the trumpet.",
  "Eganam achieved his Classical Trumpet Masters Degree from Manhattan School of Music and earned a Music Education Degree during his undergraduate years at South Carolina State University. Throughout the duration of his studies, his diligence rewarded him with winning multiple awards and scholarships.",
  'By constantly persisting through struggles in his education and life experiences, Eganam developed his motto, "Inspiration Without Perspiration is Hallucination". Devoted to this mantra, Eganam is currently a member of the United Nations Orchestra and is pursuing his dream of becoming one of the world\'s premier soloists while using his growing platform to provide clinics and workshops to high school and college students.',
];

const PULL_QUOTE =
  "Initially, playing the trumpet was largely to hide my broken English vernacular from my peers so as not to be teased; but over the years, it has grown to be an extension of myself.";

const AWARDS = [
  "Manhattan School of Music — Eisenberg-Fried Concerto Competition Winner",
  "New York Knicks' That's NY Talent — Halftime Entertainment Competition Winner",
  "Manhattan School of Music Educational Assistance Program Scholarship",
  "South Carolina State University Marching Band Scholarship",
  "SCSU Marching 101 Outstanding Musicianship Award",
  "Celia Cruz Bronx High School of Music — Most Improved Award",
];

export default function BiographyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-10">
        <p className="text-muted-foreground mb-1 text-sm tracking-[0.3em] uppercase">
          Trumpet Soloist · Cultural Artist
        </p>
        <h1 className="mb-4 text-5xl font-light tracking-wide">
          Eganam ÉGO Segbefia
        </h1>
        <div className="from-primary via-primary/50 h-px w-32 bg-linear-to-r to-transparent" />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Left — sticky portrait */}
        <div className="lg:w-85 lg:shrink-0">
          <div className="lg:sticky lg:top-8">
            <div className="relative aspect-2/3 w-full overflow-hidden">
              <Image
                priority
                src="/images/Eganam Segbefia Headshot.jpg"
                alt="Eganam ÉGO Segbefia"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-muted-foreground mt-3 text-xs tracking-widest uppercase">
              Photo · New York City
            </p>
          </div>
        </div>

        {/* Right — bio text */}
        <div className="flex-1 space-y-6 text-base leading-relaxed">
          <p className="text-justify first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-light">
            {PARAGRAPHS[0]}
          </p>

          {PARAGRAPHS[1]}

          <blockquote className="border-primary my-8 border-l-2 py-2 pl-6">
            <p className="text-foreground/80 text-xl leading-relaxed font-light italic">
              &ldquo;{PULL_QUOTE}&rdquo;
            </p>
          </blockquote>

          {PARAGRAPHS[2]}
          {PARAGRAPHS[3]}
          {PARAGRAPHS[4]}

          {/* Awards */}
          <div className="pt-4">
            <div className="from-primary via-primary/50 mb-4 h-px w-32 bg-linear-to-r to-transparent" />
            <p className="text-muted-foreground mb-4 text-sm tracking-[0.25em] uppercase">
              Awards & Recognition
            </p>
            <ul className="space-y-2">
              {AWARDS.map((award, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1 shrink-0">—</span>
                  {award}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 pt-6 text-sm tracking-widest uppercase">
            <Link
              href="/gallery"
              className="border-foreground/30 hover:bg-foreground hover:text-background border px-6 py-2.5 transition-colors duration-300"
            >
              View Gallery
            </Link>
            <Link
              href="/contact"
              className="bg-foreground text-background hover:bg-foreground/80 px-6 py-2.5 transition-colors duration-300"
            >
              Book a Performance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
