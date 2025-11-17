import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/gallery', label: 'Before & After' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? 'bg-rose-100 text-rose-900'
        : 'text-slate-700 hover:text-rose-900 hover:bg-rose-50'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-200 to-amber-100 border border-white shadow-inner" />
            <span className="text-lg font-semibold tracking-tight text-slate-800">
              Lumen Aesthetics
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} end>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow-sm hover:shadow transition-all"
            >
              Book Appointment
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-rose-100 text-slate-700"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-xl text-sm font-medium transition ${
                      isActive ? 'bg-rose-100 text-rose-900' : 'bg-white text-slate-700 hover:bg-rose-50'
                    }`
                  }
                  onClick={() => setOpen(false)}
                  end
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 shadow"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
