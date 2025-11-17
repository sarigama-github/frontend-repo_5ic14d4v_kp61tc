import TreatmentLayout from './TreatmentLayout'

export default function Fillers() {
  return (
    <TreatmentLayout
      title="Dermal Fillers"
      subtitle="Restore volume, contour, and hydration with precision"
      what="Hyaluronic acid-based gels used to softly restore facial volume, enhance lips, contour cheeks/jawline, and improve fine lines."
      benefits={["Restore youthful volume","Define features (lips, cheeks, jaw)","Improve skin hydration","Immediate results"]}
      procedure="Following consultation, filler is placed precisely using needle or microcannula techniques. Topical numbing and integrated lidocaine improve comfort. Session typically 30–45 minutes."
      recovery="Possible mild swelling or bruising for 2–7 days depending on area. Most clients resume normal activities the same day."
      results="Immediate with refinement over 1–2 weeks as the product integrates. Longevity varies 6–18 months depending on product and area."
      forWho={["Adults seeking subtle enhancement or correction","Those wanting definition without surgery","Men and women aged 25–65"]}
      contraindications={["Pregnancy/breastfeeding","Active skin infection","Recent dental procedures (disclose at consult)","Known allergy to product components"]}
      faqs={[
        { q: 'Will it look natural?', a: 'Our conservative, anatomy-led approach focuses on balance and harmony. We avoid overfilling.' },
        { q: 'Can it be reversed?', a: 'Hyaluronic acid fillers can be dissolved with hyaluronidase if clinically indicated.' },
      ]}
      keywords={["dermal fillers","lip fillers","cheek filler","jawline contour","natural fillers clinic"]}
    />
  )
}
