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
              <form className="space-y-6 max-w-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Namn
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Företag
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50"
                      placeholder="Ditt företag"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50"
                    placeholder="din@email.se"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Jag är intresserad av
                  </label>
                  <select className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50 bg-white">
                    <option>AI-reception för mitt företag</option>
                    <option>Partnerskap</option>
                    <option>Demo</option>
                    <option>Annat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50 resize-none"
                    placeholder="Berätta mer..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 text-sm hover:bg-gray-800 transition-colors w-full md:w-auto"
                >
                  Skicka
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
