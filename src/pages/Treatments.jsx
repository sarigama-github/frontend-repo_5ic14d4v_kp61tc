import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'

const categories = [
  { name: 'Injectables', items: ['Botox', 'Fillers', 'Skinboosters'] },
  { name: 'Skin', items: ['Chemical Peels', 'Microneedling', 'Facial Rejuvenation'] },
  { name: 'Body', items: ['Laser Hair Removal', 'Body Contouring'] },
]

export default function Treatments() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">Treatments</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Explore our evidence-based treatments. Suitability and results vary. A consultation is required to ensure safety and appropriateness for your needs.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6">
                <h3 className="font-semibold mb-4">{cat.name}</h3>
                <div className="grid gap-2">
                  {cat.items.map((item) => (
                    <Link key={item} to={`/treatments/${item.toLowerCase().replaceAll(' ','-')}`} className="text-rose-700 hover:text-rose-900 text-sm">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
