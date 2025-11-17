import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Treatments from './pages/Treatments'
import { Gallery, Testimonials, Pricing, Book, Blog, Contact, FAQ, Privacy } from './pages/OtherPages'
import Botox from './pages/treatments/Botox'
import Fillers from './pages/treatments/Fillers'
import Skinboosters from './pages/treatments/Skinboosters'
import LaserHairRemoval from './pages/treatments/LaserHairRemoval'
import ChemicalPeels from './pages/treatments/ChemicalPeels'
import Microneedling from './pages/treatments/Microneedling'
import FacialRejuvenation from './pages/treatments/FacialRejuvenation'
import BodyContouring from './pages/treatments/BodyContouring'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/treatments/botox" element={<Botox />} />
      <Route path="/treatments/fillers" element={<Fillers />} />
      <Route path="/treatments/skinboosters" element={<Skinboosters />} />
      <Route path="/treatments/laser-hair-removal" element={<LaserHairRemoval />} />
      <Route path="/treatments/chemical-peels" element={<ChemicalPeels />} />
      <Route path="/treatments/microneedling" element={<Microneedling />} />
      <Route path="/treatments/facial-rejuvenation" element={<FacialRejuvenation />} />
      <Route path="/treatments/body-contouring" element={<BodyContouring />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/book" element={<Book />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}
