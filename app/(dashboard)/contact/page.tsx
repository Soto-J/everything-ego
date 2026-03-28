import ContactForm from "./components/contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col lg:min-h-[calc(100vh-4rem)] lg:flex-row">
      {/* Left — info panel */}
      <div className="bg-foreground text-background flex flex-col justify-between p-10 lg:w-96 lg:shrink-0 lg:p-14">
        <div>
          <p className="text-background/70 mb-1 text-sm tracking-[0.3em] uppercase">
            Bookings & Inquiries
          </p>
          <h1 className="mb-4 text-4xl font-light tracking-wide">
            Get In Touch
          </h1>
          <div className="from-background/60 mb-8 h-px w-24 bg-linear-to-r to-transparent" />

          <p className="text-background/70 mb-10 text-base leading-relaxed">
            Whether you're looking to book a performance, collaborate on a
            project, or simply connect — reach out and let's create something
            memorable.
          </p>

          <blockquote className="border-background/20 mb-10 border-l-2 pl-5">
            <p className="text-background/60 text-base leading-relaxed font-semibold italic">
              &ldquo;Inspiration Without Perspiration is Hallucination.&rdquo;
            </p>
            <p className="text-background/70 mt-2 text-xs tracking-widest uppercase">
              — Eganam ÉGO Segbefia
            </p>
          </blockquote>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-background/90 text-xs">📍</span>
            <span className="text-background/70">New York City, NY</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-background/90 text-xs">✉</span>
            <span className="text-background/70">info@everythingego.com</span>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="flex flex-1 items-start p-10 lg:p-14">
        <ContactForm />
      </div>
    </div>
  );
}
