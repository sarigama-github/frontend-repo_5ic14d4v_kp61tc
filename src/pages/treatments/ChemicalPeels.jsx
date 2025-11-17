import TreatmentLayout from './TreatmentLayout'

export default function ChemicalPeels() {
  return (
    <TreatmentLayout
      title="Chemical Peels"
      subtitle="Refine texture, clarity, and tone with controlled exfoliation"
      what="Professional-grade acids are applied to gently dissolve dead skin cells, improve congestion, and support a brighter, more even complexion. Strengths are tailored to your skin."
      benefits={["Smoother skin texture","Brighter, more even tone","Helps congestion and pigmentation","Customizable from superficial to medium-depth"]}
      procedure="After cleansing and assessment, a tailored peel solution is applied and timed, then neutralized or removed. Post-procedure products are applied. Session 20–30 minutes."
      recovery="Downtime varies by peel depth—from no visible peeling to light flaking for 2–5 days. Use gentle skincare and daily SPF."
      results="Skin looks fresher within days. Courses of 3–6 sessions may be recommended depending on concern."
      forWho={["Dullness, texture, or mild pigmentation","Congestion-prone skin","Preparation for other treatments"]}
      contraindications={["Pregnancy for certain acids","Active cold sores or infection","Recent retinoid use (as advised)","Sunburn or compromised barrier"]}
      faqs={[
        { q: 'Will I peel?', a: 'Some may experience light flaking depending on peel type. Your clinician will discuss expected downtime.' },
        { q: 'How often?', a: 'Typically every 4–6 weeks, adjusted to your skin’s response.' },
      ]}
      keywords={["chemical peel","skin peel clinic","glow peel","acne peel","pigmentation peel"]}
    />
  )
}
