import TreatmentLayout from './TreatmentLayout'

export default function Botox() {
  return (
    <TreatmentLayout
      title="Botox"
      subtitle="Soften expression lines while maintaining natural movement"
      what="A purified neurotoxin used in small, controlled doses to relax specific facial muscles that cause dynamic wrinkles (e.g., frown lines, forehead lines, crow’s feet)."
      benefits={["Softens expression lines","Prevents deeper wrinkle formation","Quick treatment with minimal downtime","Customizable, natural-looking results"]}
      procedure="After a consultation and facial assessment, small amounts are injected into targeted muscles using a fine needle. Numbing options are available for comfort. The process typically takes 15–20 minutes."
      recovery="Minimal downtime. You can return to most daily activities immediately. Avoid strenuous exercise, facial massages, and lying flat for 4 hours. Minor redness or bumps usually settle within 30–60 minutes."
      results="Onset in 3–5 days with full effect at 10–14 days. Results last around 3–4 months depending on individual metabolism and treatment area."
      forWho={["Adults seeking to soften lines caused by facial expressions","Those wanting subtle, refreshed results without surgery","Men and women aged 25–60"]}
      contraindications={["Pregnancy or breastfeeding","Active infection in the treatment area","Certain neuromuscular disorders","Allergy to botulinum toxin components"]}
      faqs={[
        { q: 'Will I look frozen?', a: 'Our approach prioritizes natural movement. We use conservative dosing tailored to your facial anatomy.' },
        { q: 'When can I wear makeup?', a: 'Light makeup can be applied after 4 hours, avoiding pressure on treated areas.' },
      ]}
      keywords={["botox clinic","anti-wrinkle injections","frown lines","forehead lines","crows feet treatment","natural botox results"]}
    />
  )
}
