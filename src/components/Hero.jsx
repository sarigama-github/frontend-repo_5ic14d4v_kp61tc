import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-rose-700/80 font-semibold mb-3">
              Medical Aesthetics Clinic
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-slate-900">
              Subtle. Natural. You — refined.
            </h1>
            <p className="mt-6 text-lg text-slate-700/90">
              Evidence-based treatments performed by certified medical experts in a calm, luxurious setting. We focus on enhancing — not changing — your natural features.
            </p>
            <div className="mt-8 flex gap-3 pointer-events-auto">
              <Link to="/book" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm">
                Book Appointment
              </Link>
              <Link to="/treatments" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-rose-700 bg-white/70 backdrop-blur border border-rose-200 hover:bg-white">
                Explore Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
