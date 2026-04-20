"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Hem" },
    { href: "/info", label: "Så fungerar det" },
    { href: "/priser", label: "Priser" },
    { href: "/foretag", label: "Företag" },
    { href: "/partner", label: "Partner" },
  ];

  return (
    <header className="border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Reception.ai
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline underline-offset-4 ${
                pathname === link.href ? "underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </header>
  );
}
