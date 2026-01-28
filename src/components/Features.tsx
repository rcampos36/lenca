import Image from "next/image";

const FEATURES = [
  {
    image: "/images/Bistecca.webp",
    text: ["AUTHENTIC", "CUISINE"],
  },
  {
    image: "/images/Calamari.webp",
    text: ["FRESH & LOCAL", "INGREDIENTS"],
  },
  {
    image: "/images/Bolognese.webp",
    text: ["INVITING", "ATMOSPHERE"],
  },
  {
    image: "/images/Lasagna.webp",
    text: ["WELCOMING", "SERVICE"],
  },
];

export function Features() {
  return (
    <section className="bg-[#111] py-24 px-6 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 sm:flex-row sm:gap-6 lg:gap-8 xl:gap-12">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center lg:gap-6"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg">
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-barlow-c text-[18px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white">
                  {feature.text[0]}
                </p>
                <p className="font-barlow-c text-[18px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white">
                  {feature.text[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
