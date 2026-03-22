import Image from "next/image";

const strips = [
  {
    src: "/strip-backstage.png",
    alt: "Backstage at a fashion show — clothing racks, look sheets, and a model being fitted",
    label: "The work // Logged",
    objectPosition: "50% 40%",
  },
  {
    src: "/strip-runway.png",
    alt: "Models walking the runway in couture gowns",
    label: "The money // Watched",
    objectPosition: "50% 30%",
  },
  {
    src: "/strip-models.png",
    alt: "Models getting ready backstage before a show",
    label: "The contracts // Guarded",
    objectPosition: "50% 30%",
  },
];

export default function ImageStrip() {
  return (
    <section
      className="relative z-10 bg-text py-[var(--border-thick)]"
      aria-label="Visual showcase"
    >
      <div className="flex flex-col gap-[var(--border-thick)]">
        {strips.map((strip) => (
          <div key={strip.label} className="strip-container">
            <Image
              src={strip.src}
              alt={strip.alt}
              fill
              className="strip-img"
              style={{ objectPosition: strip.objectPosition }}
              sizes="100vw"
            />
            <div className="strip-overlay-data">{strip.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
