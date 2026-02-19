import React from "react"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Legal operator of Hookon.ai | Hookon, s. r. o.",
  description:
    "Official company identification details of Hookon, s. r. o. including registered office, company ID, commercial register entry and direct contact to the managing director.",
}

export default function ProvozovatelEnPage() {
  return (
    <>
      <Navigation variant="imprint" />

      <main className="max-w-3xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-semibold mb-8">
          Legal operator of Hookon.ai
        </h1>

        <section className="space-y-2 mb-8">
          <h2 className="text-xl font-semibold">Company information</h2>
          <p>
            <strong>Company Name:</strong> Hookon, s. r. o.
          </p>
          <p>
            <strong>Registered Office:</strong> Baarova 552, 333 01 Stod,
            Czech Republic
          </p>
          <p>
            <strong>Company ID (IČO):</strong> 24506087
          </p>
          <p>
            <strong>Commercial Register:</strong> Registered in the Commercial
            Register maintained by the Regional Court in Plzeň, Section C,
            Entry 48080 (registered on 13 February 2026).
          </p>
          <p>
            <strong>Managing Director:</strong> Ondřej Pech
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:info@hookon.ai">info@hookon.ai</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+420731873842">+420 731 873 842</a>
          </p>
        </section>
      </main>
    </>
  )
}
