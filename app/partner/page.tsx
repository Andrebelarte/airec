import Link from "next/link";

export default function Partner() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          Partnerprogram
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Sälj AI. Tjäna pengar.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-12">
          30% provision på alla kunder. Varje månad. Så länge de är aktiva.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
        >
          Ansök som partner
        </Link>
      </section>

      {/* Benefits */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "30%", label: "Provision" },
            { value: "Recurring", label: "Varje månad" },
            { value: "24h", label: "Support" },
            { value: "0 kr", label: "Startavgift" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-8 text-center ${
                i < 3 ? "border-r-2 border-black" : ""
              }`}
            >
              <div className="text-2xl font-bold mb-1">{item.value}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Commission per plan */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Din provision per plan
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8">
              <div className="text-sm text-gray-500 mb-1">Start — 2 495 kr/mån</div>
              <div className="text-3xl font-bold mb-1">749 kr</div>
              <div className="text-sm text-gray-500">per kund/månad</div>
            </div>
            <div className="border-2 border-black p-8">
              <div className="text-sm text-gray-500 mb-1">Pro — 4 995 kr/mån</div>
              <div className="text-3xl font-bold mb-1">1 499 kr</div>
              <div className="text-sm text-gray-500">per kund/månad</div>
            </div>
            <div className="border-2 border-black p-8 bg-black text-white">
              <div className="text-sm text-gray-400 mb-1">Enterprise — 9 995 kr/mån</div>
              <div className="text-3xl font-bold mb-1">2 999 kr</div>
              <div className="text-sm text-gray-400">per kund/månad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Räkneexempel — månadsintäkter
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8 bg-white">
              <div className="text-sm text-gray-500 mb-4">5 Pro-kunder</div>
              <div className="text-3xl font-bold">7 495 kr</div>
              <div className="text-sm text-gray-500">per månad</div>
            </div>
            <div className="border-2 border-black p-8 bg-white">
              <div className="text-sm text-gray-500 mb-4">10 Pro-kunder</div>
              <div className="text-3xl font-bold">14 990 kr</div>
              <div className="text-sm text-gray-500">per månad</div>
            </div>
            <div className="border-2 border-black p-8 bg-black text-white">
              <div className="text-sm text-gray-400 mb-4">5 Enterprise-kunder</div>
              <div className="text-3xl font-bold">14 995 kr</div>
              <div className="text-sm text-gray-400">per månad</div>
            </div>
          </div>
        </div>
      </section>

      {/* One-time commission */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Livstid-försäljning (49 995 kr)
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8">
              <div className="text-sm text-gray-500 mb-2">1 kund</div>
              <div className="text-3xl font-bold">14 999 kr</div>
              <div className="text-sm text-gray-500">engångsbetalning</div>
            </div>
            <div className="border-2 border-black p-8">
              <div className="text-sm text-gray-500 mb-2">3 kunder</div>
              <div className="text-3xl font-bold">44 996 kr</div>
              <div className="text-sm text-gray-500">engångsbetalning</div>
            </div>
            <div className="border-2 border-black p-8 bg-black text-white">
              <div className="text-sm text-gray-400 mb-2">5 kunder</div>
              <div className="text-3xl font-bold">74 993 kr</div>
              <div className="text-sm text-gray-400">engångsbetalning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Så fungerar det
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Ansök", desc: "Fyll i formuläret. Vi hör av oss inom 24h." },
              { num: "02", title: "Sälj", desc: "Presentera Elexio för ditt nätverk. Vi ger dig material." },
              { num: "03", title: "Tjäna", desc: "30% provision utbetalas varje månad automatiskt." },
            ].map((step, i) => (
              <div key={i}>
                <div className="text-xs text-gray-400 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Perfekt för
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "IT-konsulter", desc: "Erbjud AI-reception till dina befintliga kunder" },
              { title: "Företagsrådgivare", desc: "Hjälp företag effektivisera med modern teknik" },
              { title: "Telefonileverantörer", desc: "Komplettera era tjänster med AI" },
              { title: "Marknadsförare", desc: "Ny intäktskälla med hög provision" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Redo att börja tjäna?</h2>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-black px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
          >
            Ansök som partner
          </Link>
        </div>
      </section>
    </div>
  );
}
