import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-receptionist för företag",
  description:
    "Missa aldrig ett samtal igen. Oavsett bransch eller storlek – en svensktalande AI-receptionist som svarar, bokar och hjälper dina kunder dygnet runt.",
  alternates: { canonical: "/foretag" },
};

export default function Foretag() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          För företag
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Missa aldrig ett samtal igen
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-12">
          Oavsett bransch. Oavsett storlek. En AI-receptionist som jobbar för dig.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
          >
            Boka demo
          </Link>
          <Link
            href="/priser"
            className="border-2 border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Se priser
          </Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="p-8 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-6">Problemet</div>
            <ul className="space-y-4">
              {[
                "Missade samtal = missade affärer",
                "Kunder ringer utanför kontorstid",
                "Telefonen stör arbetet",
                "Dyrt att anställa receptionist",
                "Svårt att vara tillgänglig alltid",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-gray-400">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 md:p-16 bg-black text-white">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-6">Lösningen</div>
            <ul className="space-y-4">
              {[
                "Varje samtal besvaras direkt",
                "Tillgänglig 24/7/365",
                "Du fokuserar på ditt jobb",
                "Från 2 495 kr/mån",
                "AI som aldrig tar paus",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gray-500">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI vs Human comparison */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            AI-receptionist vs mänsklig receptionist
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 font-bold"></th>
                  <th className="text-left py-4 font-bold">AI-receptionist</th>
                  <th className="text-left py-4 font-bold text-gray-400">Mänsklig receptionist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Tillgänglighet", ai: "24 timmar, 7 dagar, 365 dagar", human: "8 timmar, 5 dagar, ~220 dagar" },
                  { feature: "Svarstid", ai: "Under 1 sekund", human: "Varierar, kan missa samtal" },
                  { feature: "Samtidiga samtal", ai: "Obegränsat", human: "1 åt gången" },
                  { feature: "Kostnad per månad", ai: "2 495 - 9 995 kr", human: "30 000 - 45 000 kr" },
                  { feature: "Semester & sjukdagar", ai: "Aldrig borta", human: "~30 dagar per år" },
                  { feature: "Upplärning", ai: "Direkt klar", human: "Veckor till månader" },
                  { feature: "Konsekvent kvalitet", ai: "Alltid samma nivå", human: "Varierar med dagsform" },
                  { feature: "Skalbarhet", ai: "Omedelbar", human: "Kräver nyanställning" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-200">
                    <td className="py-4 font-medium">{row.feature}</td>
                    <td className="py-4">{row.ai}</td>
                    <td className="py-4 text-gray-400">{row.human}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Årlig kostnadsjämförelse
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8 bg-white">
              <div className="text-sm text-gray-500 mb-2">AI-receptionist (Pro)</div>
              <div className="text-4xl font-bold mb-4">59 940 kr/år</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>+ Tillgänglig dygnet runt</li>
                <li>+ Inga arbetsgivaravgifter</li>
                <li>+ Ingen semester eller VAB</li>
                <li>+ Skalar utan extra kostnad</li>
              </ul>
            </div>
            <div className="border-2 border-gray-300 p-8 text-gray-400">
              <div className="text-sm mb-2">Mänsklig receptionist</div>
              <div className="text-4xl font-bold mb-4">~450 000 kr/år</div>
              <ul className="space-y-2 text-sm">
                <li>Lön: ~28 000 kr/mån</li>
                <li>Arbetsgivaravgifter: ~31%</li>
                <li>Semester: 25 dagar</li>
                <li>Sjukdagar, VAB, etc.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 border-2 border-black bg-black text-white text-center">
            <span className="text-2xl font-bold">Spara ~390 000 kr per år</span>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-12">
            Vad AI:n gör
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Svarar på samtal",
                desc: "AI:n svarar professionellt i ditt företags namn och hanterar frågor direkt.",
              },
              {
                title: "Bokar möten",
                desc: "Kunder kan boka tider direkt via telefon. Synkas med din kalender automatiskt.",
              },
              {
                title: "Besvarar frågor",
                desc: "Öppettider, priser, lediga tider, vägbeskrivning. AI:n har svaren.",
              },
              {
                title: "Tar meddelanden",
                desc: "När du inte kan svara tar AI:n emot meddelanden och skickar till dig.",
              },
              {
                title: "Kopplar vidare",
                desc: "Viktiga samtal kopplas direkt till rätt person baserat på dina regler.",
              },
              {
                title: "Filtrerar samtal",
                desc: "AI:n känner igen och hanterar säljsamtal och spam så du slipper.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-xs text-gray-400 mt-1">0{i + 1}</div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Fungerar för alla branscher
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Konsultbolag",
              "Tandläkare",
              "Frisörer",
              "Advokater",
              "Vårdcentraler",
              "Fastighetsbolag",
              "Restauranger",
              "Hotell",
              "Gym",
              "Verkstäder",
              "E-handel",
              "Redovisning",
              "Arkitekter",
              "Fotografer",
              "Terapeuter",
              "Veterinärer",
            ].map((industry, i) => (
              <span
                key={i}
                className="border-2 border-black px-4 py-2 text-sm bg-white"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "62%", label: "Av samtal sker utanför kontorstid" },
            { value: "85%", label: "Ringer inte tillbaka om ingen svarar" },
            { value: "8 sek", label: "Max väntetid innan kunder lägger på" },
            { value: "24/7", label: "Tillgänglighet med AI" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-6 md:p-10 text-center ${
                i < 3 ? "border-r-2 border-black" : ""
              }`}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple steps */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs uppercase tracking-wider text-gray-400 mb-8">
            Kom igång på en dag
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Boka demo", desc: "Vi visar hur det fungerar" },
              { step: "2", title: "Anpassa", desc: "Vi ställer in efter dina behov" },
              { step: "3", title: "Koppla", desc: "Vi kopplar ditt nummer" },
              { step: "4", title: "Klart", desc: "AI:n börjar svara direkt" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-3xl font-bold text-gray-200">{item.step}</div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Redo att sluta missa samtal?
              </h2>
              <p className="text-gray-400">
                Boka en demo så visar vi hur Elexio kan hjälpa ditt företag.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/kontakt"
                className="inline-block bg-white text-black px-8 py-4 text-sm hover:bg-gray-100 transition-colors"
              >
                Boka demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
