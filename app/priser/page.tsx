import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Priser och planer",
  description:
    "Se Elexios priser – från 2 495 kr/mån för småföretag till obegränsade planer. Svensktalande AI-receptionist utan startavgift.",
  alternates: { canonical: "/priser" },
};

export default function Priser() {
  const plans = [
    {
      name: "Start",
      price: "2 495",
      period: "kr/mån",
      desc: "För småföretag som vill komma igång",
      features: [
        "100 samtal/månad",
        "Svensk AI-röst",
        "Öppettider & info",
        "Email-notiser",
        "Grundläggande statistik",
        "Support via email",
      ],
      cta: "Kom igång",
      featured: false,
    },
    {
      name: "Pro",
      price: "4 995",
      period: "kr/mån",
      desc: "För växande företag med fler samtal",
      features: [
        "500 samtal/månad",
        "Allt i Start",
        "Kalenderintegration",
        "Automatisk bokning",
        "Samtalsinspelning",
        "SMS-notiser",
        "Vidarekoppling",
        "Prioriterad support",
      ],
      cta: "Välj Pro",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "9 995",
      period: "kr/mån",
      desc: "För företag som behöver allt",
      features: [
        "Obegränsade samtal",
        "Allt i Pro",
        "Flera telefonnummer",
        "Anpassad AI-röst",
        "API-tillgång",
        "CRM-integration",
        "Dedikerad kontaktperson",
        "SLA-garanti",
      ],
      cta: "Kontakta oss",
      featured: false,
    },
  ];

  const faqs = [
    {
      q: "Vad händer om jag överskrider antal samtal?",
      a: "Du får en notis och kan enkelt uppgradera. Inga dolda avgifter.",
    },
    {
      q: "Kan jag byta plan?",
      a: "Ja, uppgradera eller nedgradera när som helst. Ändringen gäller direkt.",
    },
    {
      q: "Finns det bindningstid?",
      a: "Nej, alla planer är utan bindning. Avsluta när du vill.",
    },
    {
      q: "Vad ingår i 'Anpassad röst'?",
      a: "Vi skapar en unik AI-röst för ditt varumärke med din ton och stil.",
    },
  ];

  const siteUrl = "https://www.elexio.se";

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Elexio AI-receptionist",
    description:
      "Svensktalande AI-receptionist som svarar i telefon dygnet runt, bokar möten och svarar på frågor.",
    brand: { "@type": "Brand", name: "Elexio" },
    url: `${siteUrl}/priser`,
    image: `${siteUrl}/opengraph-image`,
    offers: [
      ...plans.map((plan) => ({
        "@type": "Offer",
        name: `Elexio ${plan.name}`,
        priceCurrency: "SEK",
        price: plan.price.replace(/\s/g, ""),
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/priser`,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "SEK",
          price: plan.price.replace(/\s/g, ""),
          unitCode: "MON",
          unitText: "månad",
        },
      })),
      {
        "@type": "Offer",
        name: "Elexio Livstid",
        priceCurrency: "SEK",
        price: "49995",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/priser`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          Priser
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Välj din plan
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Börja litet och skala upp när du växer. Ingen bindningstid.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 border-b-2 md:border-b-0 ${
                  i < 2 ? "md:border-r-2" : ""
                } border-black ${plan.featured ? "bg-black text-white" : ""}`}
              >
                <div className={`text-xs uppercase tracking-wider mb-2 ${plan.featured ? "text-gray-400" : "text-gray-400"}`}>
                  {plan.featured ? "Populärast" : ""}
                </div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className={`text-sm mb-6 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`ml-2 ${plan.featured ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-sm mt-0.5">+</span>
                      <span className={`text-sm ${plan.featured ? "" : ""}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`block text-center px-6 py-3 text-sm transition-colors ${
                    plan.featured
                      ? "bg-white text-black hover:bg-gray-100"
                      : "border-2 border-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                Engångsköp
              </div>
              <h2 className="text-3xl font-bold mb-4">Livstid</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Betala en gång, använd för alltid. Baserat på Enterprise-planen
                med alla funktioner och obegränsade samtal.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Alla Enterprise-funktioner",
                  "Obegränsade samtal för alltid",
                  "Livstids uppdateringar",
                  "Prioriterad support för alltid",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span>+</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
            <div className="border-2 border-black p-8 md:p-12 text-center">
              <div className="text-sm text-gray-500 mb-2">Engångspris</div>
              <div className="text-5xl font-bold mb-2">49 995 kr</div>
              <div className="text-sm text-gray-500">Spara över 50% på 5 år</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Jämför planer
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 font-bold">Funktion</th>
                  <th className="text-center py-4 font-bold">Start</th>
                  <th className="text-center py-4 font-bold">Pro</th>
                  <th className="text-center py-4 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Samtal per månad", start: "100", pro: "500", enterprise: "Obegränsat" },
                  { feature: "Svensk AI-röst", start: "✓", pro: "✓", enterprise: "✓" },
                  { feature: "Kalenderintegration", start: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Automatisk bokning", start: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Samtalsinspelning", start: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Vidarekoppling", start: "—", pro: "✓", enterprise: "✓" },
                  { feature: "Flera nummer", start: "—", pro: "—", enterprise: "✓" },
                  { feature: "Anpassad röst", start: "—", pro: "—", enterprise: "✓" },
                  { feature: "API-tillgång", start: "—", pro: "—", enterprise: "✓" },
                  { feature: "CRM-integration", start: "—", pro: "—", enterprise: "✓" },
                  { feature: "Support", start: "Email", pro: "Prioriterad", enterprise: "Dedikerad" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4">{row.feature}</td>
                    <td className="text-center py-4 text-gray-500">{row.start}</td>
                    <td className="text-center py-4">{row.pro}</td>
                    <td className="text-center py-4">{row.enterprise}</td>
                  </tr>
                ))}
                <tr className="border-b-2 border-black font-bold">
                  <td className="py-4">Pris</td>
                  <td className="text-center py-4">2 495 kr</td>
                  <td className="text-center py-4">4 995 kr</td>
                  <td className="text-center py-4">9 995 kr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* vs Traditional */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Jämfört med traditionell reception
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border-2 border-black p-6 bg-white">
              <div className="text-sm text-gray-500 mb-2">Start</div>
              <div className="text-2xl font-bold">2 495 kr</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="text-sm text-gray-500 mb-2">Pro</div>
              <div className="text-2xl font-bold">4 995 kr</div>
            </div>
            <div className="border-2 border-black p-6 bg-white">
              <div className="text-sm text-gray-500 mb-2">Enterprise</div>
              <div className="text-2xl font-bold">9 995 kr</div>
            </div>
            <div className="border-2 border-gray-300 p-6 text-gray-400">
              <div className="text-sm mb-2">Anställd</div>
              <div className="text-2xl font-bold">~35 000 kr</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            Vanliga frågor
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Osäker på vilken plan?</h2>
          <p className="text-gray-400 mb-8">Boka en demo så hjälper vi dig välja rätt.</p>
          <Link
            href="/kontakt"
            className="inline-block bg-white text-black px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
          >
            Boka demo
          </Link>
        </div>
      </section>
    </div>
  );
}
