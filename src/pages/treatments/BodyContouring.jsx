import TreatmentLayout from './TreatmentLayout'

export default function BodyContouring() {
  return (
    <TreatmentLayout
      title="Body Contouring"
      subtitle="Support body goals with non-surgical technologies"
      what="Non-invasive or minimally invasive technologies designed to target stubborn areas, improve skin firmness or reduce circumference when appropriate."
      benefits={["Targets stubborn areas","No surgery","Minimal downtime","Pairs with lifestyle changes"]}
      procedure="Suitability is assessed during consultation. Depending on technology, applicators are placed on the area for a set cycle. Sessions vary 30–60 minutes."
      recovery="Usually minimal. Temporary redness, tingling, or tenderness may occur and settle within hours to days."
      results="Gradual changes over weeks as the body responds. A course of sessions is typical; results vary and cannot be guaranteed."
      forWho={["Individuals close to their healthy weight seeking refinement","Areas resistant to diet and exercise"]}
      contraindications={["Pregnancy","Metal implants or certain medical devices (tech-dependent)","Hernias or skin lesions in area"]}
      faqs={[
        { q: 'Is it a weight-loss treatment?', a: 'No. It is not a substitute for a healthy lifestyle. It may refine contours when suitable.' },
        { q: 'When will I see results?', a: 'Changes are gradual over several weeks. Your clinician will discuss realistic expectations.' },
      ]}
      keywords={["non-surgical body contouring","fat reduction treatment","skin tightening clinic","stubborn areas"]}
    />
  )
}
