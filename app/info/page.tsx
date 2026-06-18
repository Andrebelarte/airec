import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Så fungerar det",
  description:
    "Så fungerar Elexio – en AI-receptionist som tar hand om dina samtal. Enkelt att komma igång och alltid tillgänglig på svenska.",
  alternates: { canonical: "/info" },
};

export default function Info() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          Om tjänsten
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Så fungerar det
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          En AI-receptionist som tar hand om dina samtal. Enkelt att komma igång.
        </p>
      </section>

      {/* How it works */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            Tre enkla steg
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Koppla ditt nummer",
                desc: "Vi kopplar din AI-receptionist till ditt befintliga telefonnummer. Ingen ny utrustning behövs.",
              },
              {
                num: "02",
                title: "Anpassa efter dig",
                desc: "Berätta hur du vill att AI:n ska svara, vilka frågor den ska hantera och när den ska koppla vidare.",
              },
              {
                num: "03",
                title: "Klar att använda",
                desc: "Din AI-receptionist börjar svara direkt. Du får notiser och kan följa alla samtal i realtid.",
              },
            ].map((step, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-gray-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            Fördelar
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Aldrig upptaget",
                desc: "AI:n kan hantera obegränsat antal samtal samtidigt. Dina kunder kommer alltid fram.",
              },
              {
                title: "Alltid tillgänglig",
                desc: "Dygnet runt, året om. Helger, kvällar och röda dagar. Ingen semester eller sjukdagar.",
              },
              {
                title: "Professionell röst",
                desc: "Naturlig svensk röst som representerar ditt företag på bästa sätt.",
              },
              {
                title: "Lär sig ditt företag",
                desc: "AI:n anpassas efter din verksamhet och kan svara på vanliga frågor om dina tjänster.",
              },
              {
                title: "Automatisk bokning",
                desc: "Integrerar med din kalender och bokar möten direkt under samtalet.",
              },
              {
                title: "Full kontroll",
                desc: "Lyssna på samtal, läs transkriptioner och se statistik i realtid.",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-sm text-gray-400 mt-1">+</div>
                <div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What AI handles */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            AI:n hanterar
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Inkommande samtal",
              "Tidsbokning",
              "Vanliga frågor",
              "Vidarekoppling",
              "Meddelanden",
              "Öppettider",
              "Prisförfrågningar",
              "Återuppringning",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black"></div>
                <span>{item}</span>
              </div>
            ))}
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
            {[
              {
                q: "Hur lång tid tar det att komma igång?",
                a: "De flesta är igång inom 24 timmar. Vi hjälper dig med hela uppsättningen.",
              },
              {
                q: "Behöver jag byta telefonnummer?",
                a: "Nej, vi kopplar AI:n till ditt befintliga nummer. Dina kunder märker ingen skillnad.",
              },
              {
                q: "Kan AI:n hantera svenska dialekter?",
                a: "Ja, vår AI är tränad på svenska och förstår olika dialekter och accenter.",
              },
              {
                q: "Vad händer om AI:n inte kan svara?",
                a: "Samtalet kopplas vidare till dig eller en kollega enligt dina inställningar.",
              },
              {
                q: "Finns det bindningstid?",
                a: "Nej, du kan avsluta när du vill. Månadsvis betalning utan bindning.",
              },
              {
                q: "Kan jag lyssna på samtalen?",
                a: "Ja, du har full tillgång till inspelningar och transkriptioner av alla samtal.",
              },
            ].map((faq, i) => (
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
          <h2 className="text-2xl font-bold mb-6">Redo att testa?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/priser"
              className="inline-block bg-white text-black px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
            >
              Se priser
            </Link>
            <Link
              href="/kontakt"
              className="inline-block border-2 border-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
