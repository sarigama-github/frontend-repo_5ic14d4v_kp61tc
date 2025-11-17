import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Clinically-led aesthetics for natural confidence</h2>
              <p className="mt-4 text-slate-600">Our philosophy is simple: subtle, harmonious results that respect your unique features. We combine medical expertise with an eye for aesthetics to deliver outcomes that look like you—on your best day.</p>
              <div className="mt-6 flex gap-3">
                <Link to="/treatments" className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm">View Treatments</Link>
                <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100">Meet the Team</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {['Botox','Fillers','Skinboosters','Laser Hair Removal'].map((t) => (
                <Link key={t} to={`/treatments/${t.toLowerCase().replaceAll(' ','-')}`} className="rounded-2xl border border-rose-100 p-5 hover:shadow-sm transition bg-white/70 backdrop-blur">
                  <h3 className="font-semibold mb-1">{t}</h3>
                  <p className="text-sm text-slate-600">Subtle, refreshed results</p>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Trust />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Consultation-first',
              desc: 'We take time to understand your goals, medical history, and ensure suitability.'
            },{
              title: 'Transparent pricing',
              desc: 'Clear, upfront fees with no surprises. Treatment plans tailored to your needs.'
            },{
              title: 'Ongoing care',
              desc: 'Post-treatment check-ins and aftercare guidance included.'
            }].map((c) => (
              <div key={c.title} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Ready to feel like yourself—refreshed?</h2>
          <p className="mt-3 text-slate-600">Book a consultation to discuss safe, suitable options for your goals.</p>
          <div className="mt-6">
            <Link to="/book" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm">Book Appointment</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
