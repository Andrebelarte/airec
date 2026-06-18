import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Hör av dig till Elexio. Vi svarar inom 24 timmar – boka en demo eller ställ dina frågor om vår AI-receptionist.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-6">
          Kontakt
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Hör av dig
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Vi svarar inom 24 timmar.
        </p>
      </section>

      {/* Content */}
      <section className="border-t-2 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3">
            {/* Info */}
            <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black">
              <div className="space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">Email</div>
                  <div>hej@elexio.ai</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">Telefon</div>
                  <div>+46 8 123 45 67</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">Adress</div>
                  <div>Stockholm, Sverige</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2 p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
