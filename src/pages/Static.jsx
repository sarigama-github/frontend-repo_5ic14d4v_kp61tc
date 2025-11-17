import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function StaticPage({ title, children }) {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{title}</h1>
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
