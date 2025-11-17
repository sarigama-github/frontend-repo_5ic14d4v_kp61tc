import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-rose-200 to-amber-100 border border-white shadow-inner mb-4" />
            <p className="text-sm text-slate-600">
              Lumen Aesthetics is a medical aesthetics clinic focused on subtle, natural enhancements and exceptional patient care.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-600 hover:text-rose-700">About</Link></li>
              <li><Link to="/treatments" className="text-slate-600 hover:text-rose-700">Treatments</Link></li>
              <li><Link to="/pricing" className="text-slate-600 hover:text-rose-700">Pricing</Link></li>
              <li><Link to="/blog" className="text-slate-600 hover:text-rose-700">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-slate-600 hover:text-rose-700">FAQ</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-rose-700">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-600 hover:text-rose-700">Privacy & Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Book</h4>
            <p className="text-sm text-slate-600 mb-3">Reserve your consultation online in minutes.</p>
            <Link to="/book" className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm">Book Appointment</Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Lumen Aesthetics. All rights reserved.</p>
          <p className="text-xs text-slate-400">This website does not provide medical advice and is for information only. Always consult with a qualified healthcare professional.</p>
        </div>
      </div>
    </footer>
  )
}
