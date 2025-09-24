import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="container py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Precision Pipeline for SaaS — Right Offer, Right Person, Right Situation.
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Outbound that contributes to pipeline, not vanity metrics. Built for VPs of Sales who care about ACV, CAC payback, and pipeline coverage.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
          <Link to="/ppf" className="btn">Learn the PPF →</Link>
        </div>
      </div>
    </section>
  )
}
