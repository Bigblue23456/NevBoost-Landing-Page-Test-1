export default function Pricing() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Pricing & Risk Reversal</h1>
      <p className="mt-4">Transparent, testable, and focused on pipeline contribution. We’ll co-design the offer — not just send emails.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Pilot</h2>
          <p className="mt-2 text-sm text-gray-600">4–6 weeks to validate ICP, offer, and messaging.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Playbook</h2>
          <p className="mt-2 text-sm text-gray-600">Messaging trees, offer hierarchy, buyer mapping.</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Scale</h2>
          <p className="mt-2 text-sm text-gray-600">Operationalize lanes proven to generate pipeline.</p>
        </div>
      </div>
    </section>
  )
}
