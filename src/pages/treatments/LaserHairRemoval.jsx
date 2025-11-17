import TreatmentLayout from './TreatmentLayout'

export default function LaserHairRemoval() {
  return (
    <TreatmentLayout
      title="Laser Hair Removal"
      subtitle="Long-term hair reduction with medical-grade technology"
      what="Targeted laser energy disables hair follicles in active growth phase to reduce hair growth over time. Suitable for many skin types using appropriate settings."
      benefits={["Reduces unwanted hair","Smoother skin","Saves time and reduces ingrown hairs","Customizable settings for skin type"]}
      procedure="After a patch test and assessment, the area is cleansed and treated with a handheld laser device. Protective eyewear is worn. Duration varies by area (10–60 minutes)."
      recovery="Mild redness or warmth may last a few hours. Avoid heat, sunbeds, and active skincare for 24–48 hours. Use SPF daily."
      results="Hair reduction is gradual across a course of sessions (typically 6–8+). Maintenance may be needed."
      forWho={["People seeking long-term reduction of facial or body hair","Those prone to ingrowns or irritation from shaving/waxing"]}
      contraindications={["Recent sun exposure or fake tan","Photosensitizing medications","Pregnancy","Active skin conditions in the area"]}
      faqs={[
        { q: 'Is it painful?', a: 'Most describe it as a quick snap with warmth. Comfort settings and cooling are used.' },
        { q: 'How many sessions?', a: 'Typically 6–8+ spaced 4–8 weeks apart depending on area and hair growth cycle.' },
      ]}
      keywords={["laser hair removal clinic","permanent hair reduction","medical laser","ingrown hair treatment"]}
    />
  )
}
