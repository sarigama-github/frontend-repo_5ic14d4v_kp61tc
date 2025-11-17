import StaticPage from './Static'

export function Gallery() {
  return (
    <StaticPage title="Before & After Gallery">
      <p>Please note: Images are illustrative and results vary from person to person. A consultation is required to assess suitability and discuss expected outcomes.</p>
    </StaticPage>
  )
}

export function Testimonials() {
  return (
    <StaticPage title="Testimonials">
      <p>We are grateful for the trust our clients place in us. Reviews reflect personal experiences and individual results will vary.</p>
    </StaticPage>
  )
}

export function Pricing() {
  return (
    <StaticPage title="Pricing">
      <p>We believe in transparent, upfront pricing. Your clinician will confirm a tailored treatment plan and exact fees during consultation.</p>
      <ul>
        <li>Consultation: €50 (credited toward treatment if suitable)</li>
        <li>Anti-wrinkle injections: from €180/area</li>
        <li>Dermal fillers: from €280/ml</li>
        <li>Skinboosters: from €240/session</li>
        <li>Chemical peels: from €120</li>
        <li>Microneedling: from €160</li>
        <li>Laser hair removal: packages available</li>
      </ul>
      <p>All prices include aftercare and follow-up where appropriate.</p>
    </StaticPage>
  )
}

export function Book() {
  return (
    <StaticPage title="Book Appointment">
      <p>Use our online booking to schedule a consultation. If you’re new, please select “Initial Consultation”. Our team will confirm your appointment and send pre-visit guidance.</p>
      <p><a href="#" className="text-rose-700">Start Online Booking</a></p>
    </StaticPage>
  )
}

export function Blog() {
  return (
    <StaticPage title="Blog">
      <p>Clinical insights, skincare education, and treatment guidance authored by our medical team.</p>
    </StaticPage>
  )
}

export function Contact() {
  return (
    <StaticPage title="Contact">
      <p>We’d love to help. Reach our patient care team Monday–Saturday, 9:00–18:00.</p>
      <ul>
        <li>Phone: +353 123 4567</li>
        <li>Email: hello@lumenaesthetics.eu</li>
        <li>Address: 12 Rose Lane, Dublin</li>
      </ul>
    </StaticPage>
  )
}

export function FAQ() {
  return (
    <StaticPage title="Frequently Asked Questions">
      <h3>Do you offer a consultation?</h3>
      <p>Yes. We always begin with a medical consultation to ensure safety and suitability.</p>
      <h3>Do you guarantee results?</h3>
      <p>No. Outcomes vary and no result can be guaranteed. We provide evidence-based care and realistic guidance.</p>
      <h3>Is there downtime?</h3>
      <p>Downtime varies depending on treatment and individual response. We’ll discuss this beforehand and provide aftercare.</p>
    </StaticPage>
  )
}

export function Privacy() {
  return (
    <StaticPage title="Privacy & Cookie Policy">
      <p>This is placeholder text for your Privacy & Cookie Policy. It should include details on data collection, lawful basis, cookies used, third-party processors, retention, user rights (including GDPR), and contact details for the data controller.</p>
    </StaticPage>
  )
}
