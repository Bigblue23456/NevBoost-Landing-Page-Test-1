export default function Contact() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold">Book a Discovery Call</h1>
      <div className="mt-6">
        {/* Replace with your scheduler embed (Cal.com/Calendly) */}
        <iframe
          src="https://cal.com/your-handle?embed=1"
          className="w-full h-[900px] border-0 rounded-xl"
          title="Scheduler"
        />
      </div>
    </section>
  )
}
