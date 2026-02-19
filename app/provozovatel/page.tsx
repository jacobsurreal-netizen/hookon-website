import React from "react";

export const metadata = {
  title: "Provozovatel a kontaktní údaje | Hookon, s. r. o.",
  description:
    "Oficiální identifikační údaje společnosti Hookon, s. r. o. se sídlem ve Stodu. Najdete zde IČO, zápis v obchodním rejstříku a přímé kontakty na jednatele.",
};

export default function ProvozovatelPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold mb-8">
        Provozovatel webu Hookon.ai
      </h1>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Informace o provozovateli</h2>
        <p><strong>Název společnosti:</strong> Hookon, s. r. o.</p>
        <p><strong>Sídlo:</strong> Baarova 552, 333 01 Stod, Česká republika</p>
        <p><strong>IČO:</strong> 24506087</p>
        <p>
          <strong>Zápis v evidenci:</strong> Společnost zapsaná v obchodním
          rejstříku vedeném u Krajského soudu v Plzni, oddíl C, vložka 48080
          (zapsáno dne 13. února 2026).
        </p>
        <p><strong>Statutární orgán (jednatel):</strong> Ondřej Pech</p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:info@hookon.ai">info@hookon.ai</a>
        </p>
        <p>
          <strong>Telefon:</strong>{" "}
          <a href="tel:+420731873842">+420 731 873 842</a>
        </p>
      </section>
    </main>
  );
}
