import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative text-white overflow-hidden min-h-[620px] flex items-end">
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Dolphin Clean Solutions team"
        fill
        className="object-cover object-[center_30%]"
        priority
      />

      {/* Gradient overlay — transparent at top, dark at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f33]/90 via-[#0d1f33]/30 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="relative z-10 w-full px-6 pb-14 pt-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Deep Clean,{" "}
            <span className="text-[#4ecdc4]">Fresh Results</span>
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed drop-shadow">
            Professional cleaning services for your home or business. Experience the luxury of a pristine space
            with our aqueous precision techniques.
          </p>
          <a
            href="#booking"
            className="inline-block bg-[#5c6b2e] hover:bg-[#4a5524] text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors shadow-lg"
          >
            Book Your Cleaning
          </a>
        </div>
      </div>
    </section>
  );
}
