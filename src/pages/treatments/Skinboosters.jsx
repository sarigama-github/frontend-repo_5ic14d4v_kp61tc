import TreatmentLayout from './TreatmentLayout'

export default function Skinboosters() {
  return (
    <TreatmentLayout
      title="Skinboosters"
      subtitle="Deep hydration for smoother, more radiant skin"
      what="Microinjections of lightweight hyaluronic acid to improve skin hydration, elasticity, and fine lines without adding volume."
      benefits={["Improved glow and smoothness","Enhanced skin elasticity","Refines fine lines","Skin-quality maintenance"]}
      procedure="After cleansing and numbing, a series of tiny injections are placed across the treatment area (face, neck, or hands). Session 20–30 minutes."
      recovery="Small bumps or redness may last 12–48 hours. Most people return to work the next day."
      results="Subtle glow appears within 1–2 weeks. A course of 2–3 sessions, 4 weeks apart, is often recommended, followed by maintenance."
      forWho={["Dull or dehydrated skin","Fine lines and crepey texture","All skin types seeking subtle refresh"]}
      contraindications={["Pregnancy/breastfeeding","Active acne or infection in the area","Allergy to product components"]}
      faqs={[
        { q: 'Is it the same as filler?', a: 'Skinboosters are designed for hydration and skin quality, not structural volume or shaping.' },
        { q: 'How many sessions do I need?', a: 'Typically 2–3 sessions initially, assessed individually during consultation.' },
      ]}
      keywords={["skin boosters","profhilo alternative","skin hydration treatment","glowing skin clinic"]}
    />
  )
}
