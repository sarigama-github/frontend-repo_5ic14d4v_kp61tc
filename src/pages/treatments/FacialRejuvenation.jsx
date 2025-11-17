import TreatmentLayout from './TreatmentLayout'

export default function FacialRejuvenation() {
  return (
    <TreatmentLayout
      title="Facial Rejuvenation"
      subtitle="Holistic, non-surgical plans for refreshed, balanced features"
      what="A tailored combination of modalities—such as injectables, skin treatments, and skincare—to address multiple concerns with a natural, harmonious outcome."
      benefits={["Balanced, subtle rejuvenation","Tailored plan to your goals","Addresses skin quality and structure","Staged approach for safety"]}
      procedure="Following a detailed consultation, we design a phased plan using appropriate treatments. Each visit focuses on safe, incremental changes with regular reviews."
      recovery="Varies by treatment. We prioritize minimal downtime and will advise realistic expectations at each step."
      results="Progressive improvements over weeks to months, aiming for refreshed, well-rested appearance rather than drastic change."
      forWho={["Those seeking a comprehensive non-surgical plan","Clients prioritizing natural, understated results"]}
      contraindications={["Suitability depends on chosen treatments; assessed during consultation"]}
      faqs={[
        { q: 'Is everything done in one session?', a: 'We prefer phased plans to ensure safety, harmony, and adaptability to your unique response.' },
        { q: 'How do you keep it natural?', a: 'We use conservative dosing and balance across the face, avoiding over-treating any single feature.' },
      ]}
      keywords={["non surgical facial rejuvenation","subtle aesthetic clinic","holistic aesthetics plan","natural cosmetic treatments"]}
    />
  )
}
