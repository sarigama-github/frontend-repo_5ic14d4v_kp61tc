import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function TreatmentLayout({
  title,
  subtitle,
  what,
  benefits,
  procedure,
  recovery,
  results,
  forWho,
  contraindications,
  faqs,
  keywords
}) {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
          <p className="mt-2 text-slate-600">{subtitle}</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Section title="What it is" body={what} />
              <List title="Benefits" items={benefits} />
              <Section title="Procedure" body={procedure} />
              <Section title="Recovery time" body={recovery} />
              <Section title="Results" body={results} />
              <List title="Who it’s for" items={forWho} />
              <List title="Contraindications" items={contraindications} />

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 text-sm text-slate-700">
                Results vary. A consultation is required to assess suitability. We follow EU advertising guidelines and avoid exaggerated claims.
              </div>

              <div>
                <h3 className="font-semibold mb-2">FAQ</h3>
                <div className="divide-y divide-rose-100 border border-rose-100 rounded-xl">
                  {faqs?.map((f) => (
                    <details key={f.q} className="p-4">
                      <summary className="cursor-pointer font-medium text-slate-800">{f.q}</summary>
                      <p className="mt-2 text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h4 className="font-semibold">Ready to take the next step?</h4>
                <p className="text-sm text-slate-600 mt-1">Book a medical consultation to discuss suitable options for your goals.</p>
                <Link to="/book" className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm">Book Appointment</Link>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h4 className="font-semibold">Related treatments</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><Link to="/treatments/fillers" className="text-rose-700 hover:text-rose-900">Dermal Fillers</Link></li>
                  <li><Link to="/treatments/skinboosters" className="text-rose-700 hover:text-rose-900">Skinboosters</Link></li>
                  <li><Link to="/treatments/facial-rejuvenation" className="text-rose-700 hover:text-rose-900">Facial Rejuvenation</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h4 className="font-semibold">SEO Keywords</h4>
                <p className="mt-1 text-xs text-slate-500">{keywords?.join(', ')}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

function Section({ title, body }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
    </div>
  )
}

function List({ title, items }) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-slate-600 leading-relaxed text-sm space-y-1">
        {items?.map((i) => (<li key={i}>{i}</li>))}
      </ul>
    </div>
  )
}
