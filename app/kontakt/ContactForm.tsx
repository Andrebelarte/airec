"use client";

import { useState } from "react";

// Web3Forms access key. This is a public key (safe to expose in client code).
// Manage submissions/destination at https://web3forms.com. Can be overridden
// with the NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment variable if needed.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "9cc5622f-0f88-4caa-8303-5722facd54ce";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "Nytt meddelande från elexio.se");
    formData.append("from_name", "Elexio kontaktformulär");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Något gick fel. Försök igen.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Kunde inte skicka meddelandet. Kontrollera din anslutning.");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-lg border-2 border-black p-8">
        <h2 className="text-xl font-bold mb-2">Tack!</h2>
        <p className="text-gray-600">
          Ditt meddelande har skickats. Vi hör av oss inom 24 timmar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      {/* Honeypot field to reduce spam – bots fill it, humans don't see it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
            Namn
          </label>
          <input
            type="text"
            name="namn"
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
            name="företag"
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
          name="email"
          required
          className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50"
          placeholder="din@email.se"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
          Jag är intresserad av
        </label>
        <select
          name="intresse"
          defaultValue="AI-reception för mitt företag"
          className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50 bg-white"
        >
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
          name="meddelande"
          required
          rows={4}
          className="w-full border-2 border-black px-4 py-3 focus:outline-none focus:bg-gray-50 resize-none"
          placeholder="Berätta mer..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-black text-white px-8 py-4 text-sm hover:bg-gray-800 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Skickar..." : "Skicka"}
      </button>
    </form>
  );
}
