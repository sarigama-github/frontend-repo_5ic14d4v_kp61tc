import { ShieldCheck, Award, Stethoscope, Leaf } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Medical-grade protocols, consent, and follow-up care with every treatment.'
  },
  {
    icon: Award,
    title: 'Certified Experts',
    desc: 'Treatments performed by licensed clinicians with advanced training.'
  },
  {
    icon: Stethoscope,
    title: 'Evidence-Based',
    desc: 'We only use clinically validated products and technologies.'
  },
  {
    icon: Leaf,
    title: 'Natural Results',
    desc: 'Subtle, refined outcomes that enhance your unique features.'
  }
]

export default function Trust() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-rose-200 to-amber-100 flex items-center justify-center text-rose-800 mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
