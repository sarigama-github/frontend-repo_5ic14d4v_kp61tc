import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">About Lumen Aesthetics</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">A medically led clinic dedicated to subtle, natural-looking results. Our team blends clinical expertise with a refined aesthetic eye to deliver safe, evidence-based treatments in a calm, luxurious environment.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{
              title:'Our Philosophy',
              body:'We believe enhancements should be undetectable. You—refreshed, not altered. Every plan begins with education, consent, and a shared understanding of realistic outcomes.'
            },{
              title:'Clinical Excellence',
              body:'All treatments are performed by licensed clinicians with advanced training. We use CE-marked products and rigorously maintained protocols.'
            },{
              title:'Comfort & Care',
              body:'From your first consultation to aftercare, we prioritize your comfort, privacy, and long-term skin health.'
            }].map((c)=> (
              <div key={c.title} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-rose-100 bg-rose-50 p-6">
            <h3 className="font-semibold mb-2">Certifications & Safety</h3>
            <p className="text-sm text-slate-700">• Licensed medical practitioners • Infection control and hygiene audits • Informed consent and cooling-off periods • Transparent complication protocols and follow-up care</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
