import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          AI-receptionist
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl mb-8">
          Svarar när du inte kan.
          Dygnet runt.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-12 leading-relaxed">
          En AI som hanterar samtal, bokar möten och svarar på frågor.
          På svenska. Alltid tillgänglig.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            Boka demo
          </Link>
          <Link
            href="/info"
            className="border-2 border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Så fungerar det
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "24/7", label: "Tillgänglig" },
            { value: "<1s", label: "Svarstid" },
            { value: "90%", label: "Besparing" },
            { value: "∞", label: "Kapacitet" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-8 md:p-12 text-center ${
                i < 3 ? "border-r-2 border-black" : ""
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              num: "01",
              title: "Samtal",
              desc: "Svarar professionellt och dirigerar till rätt person.",
            },
            {
              num: "02",
              title: "Bokning",
              desc: "Integrerar med din kalender och bokar automatiskt.",
            },
            {
              num: "03",
              title: "Analys",
              desc: "Full översikt över alla samtal och interaktioner.",
            },
          ].map((feature, i) => (
            <div key={i}>
              <div className="text-xs text-gray-400 mb-4">{feature.num}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Prissättning
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="border-2 border-black p-6">
              <div className="text-sm text-gray-500 mb-1">Start</div>
              <div className="text-2xl font-bold">2 495 kr</div>
              <div className="text-sm text-gray-500">100 samtal/mån</div>
            </div>
            <div className="border-2 border-black p-6 bg-black text-white">
              <div className="text-sm text-gray-400 mb-1">Pro</div>
              <div className="text-2xl font-bold">4 995 kr</div>
              <div className="text-sm text-gray-400">500 samtal/mån</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-sm text-gray-500 mb-1">Enterprise</div>
              <div className="text-2xl font-bold">9 995 kr</div>
              <div className="text-sm text-gray-500">Obegränsat</div>
            </div>
            <div className="border-2 border-black p-6">
              <div className="text-sm text-gray-500 mb-1">Livstid</div>
              <div className="text-2xl font-bold">49 995 kr</div>
              <div className="text-sm text-gray-500">Engångsköp</div>
            </div>
          </div>
          <Link
            href="/priser"
            className="inline-block border-2 border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Se alla planer
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Redo att automatisera?
          </h2>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-black px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
          >
            Kom igång
          </Link>
        </div>
      </section>
    </div>
  );
}
