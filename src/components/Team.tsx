import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#1a3a5c] text-center mb-4">Meet Our Team</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
          Dedicated professionals committed to delivering spotless results every time.
        </p>

        {/* Full team photo */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-14">
          <Image
            src="/VanandSkyline-picture.png"
            alt="Dolphin Clean Solutions team"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Leadership */}
        <h3 className="text-2xl font-bold text-[#1a3a5c] text-center mb-8">Leadership</h3>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/leadership.png"
            alt="Dolphin Clean Solutions leadership team"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
