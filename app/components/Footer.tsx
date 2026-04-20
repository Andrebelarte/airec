import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-lg font-bold mb-4">Reception.ai</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI-receptionist för svenska företag.
              Alltid tillgänglig. Alltid professionell.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Sidor</div>
            <div className="space-y-2 text-sm">
              <div><Link href="/info" className="hover:underline">Så fungerar det</Link></div>
              <div><Link href="/priser" className="hover:underline">Priser</Link></div>
              <div><Link href="/foretag" className="hover:underline">För företag</Link></div>
              <div><Link href="/partner" className="hover:underline">Partner</Link></div>
              <div><Link href="/kontakt" className="hover:underline">Kontakt</Link></div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Kontakt</div>
            <div className="space-y-2 text-sm">
              <div>hej@reception.ai</div>
              <div>+46 8 123 45 67</div>
              <div>Stockholm</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-xs text-gray-400">
          2024 Reception.ai
        </div>
      </div>
    </footer>
  );
}
