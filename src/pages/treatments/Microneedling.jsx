import TreatmentLayout from './TreatmentLayout'

export default function Microneedling() {
  return (
    <TreatmentLayout
      title="Microneedling"
      subtitle="Boost collagen and refine skin texture"
      what="Controlled micro-injuries stimulate collagen and elastin production, helping improve texture, fine lines, and the look of scars."
      benefits={["Improves texture and fine lines","Supports acne scar appearance","Enhances product absorption","Minimal downtime"]}
      procedure="After numbing, a sterile needling device creates micro-channels at a precise depth. Soothing serums are applied. Session 30–45 minutes."
      recovery="Mild redness similar to a sunburn for 24–48 hours. Avoid active skincare and heat for 48 hours. SPF daily."
      results="Gradual improvement over 4–12 weeks as collagen remodels. A series of 3–6 sessions may be recommended."
      forWho={["Texture, fine lines, or mild scarring","All skin types with suitable assessment"]}
      contraindications={["Active acne or infection","Pregnancy (device-dependent)","Keloid history (assessed individually)"]}
      faqs={[
        { q: 'Does it hurt?', a: 'Topical numbing enhances comfort. Most describe a light prickling sensation.' },
        { q: 'How many sessions?', a: 'Usually 3–6 sessions spaced 4–6 weeks apart, personalized at consultation.' },
      ]}
      keywords={["microneedling clinic","collagen induction","acne scar treatment","skin needling"]}
    />
  )
}
