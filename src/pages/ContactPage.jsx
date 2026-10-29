import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Icon from "../components/Icons";

import { company } from "../data/company";

import "./ContactPage.css";


const contactCards = [
  {
    title: "Our Location",
    icon: "pin",
    lines: [
      { text: "Unique Tech General Maintenance LLC - S.P.C", href: company.mapUrl },
      { text: "P.O. Box: 107275", href: company.mapUrl },
      { text: "Ras al Qit'ah Al Bateen, 28 Abu Dhabi", href: company.mapUrl },
    ],
  },
  {
    title: "Email Address",
    icon: "mail",
    lines: [{ text: company.email, href: `mailto:${company.email}` }],
  },
  {
    title: "Phone Number",
    icon: "phone",
    lines: [
      { text: "+971- 507639356", href: "tel:+971507639356" },
      { text: "+971- 563362209", href: "tel:+971563362209" },
      { text: company.fax.label, href: company.fax.href },
    ],
  },
];

const locations = ["Abu Dhabi", "Dubai", "Sharjah", "Other UAE location"];
const services = ["MEP Works", "Maintenance", "Interior Works", "Landscaping", "Material Supply"];

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry: ${fields.get("service")}`);
    const body = [
      `Name: ${fields.get("name")}`,
      `Location: ${fields.get("location")}`,
      `Phone: ${fields.get("phone")}`,
      `Email: ${fields.get("email")}`,
      "",
      `Service: ${fields.get("service")}`,
      `Message: ${fields.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Unique Tech General Maintenance LLC</title>
        <meta
          name="description"
          content="Contact Unique Tech General Maintenance LLC in Abu Dhabi for MEP works, AMC contracts, maintenance and a free quote."
        />
      </Helmet>

      <Navbar />

      <main className="page-main">
        <section className="page-hero contact-page-hero">
          <div className="wrap"><h1>Contact Us</h1></div>
        </section>

        <section className="contact-details-section">
          <div className="wrap">
            <header className="contact-details-intro">
              <span className="eyebrow">CONTACT US</span>
              <h2>Need more Information?<br />Get in Touch</h2>
            </header>
            <div className="contact-details-grid">
              {contactCards.map((card) => (
                <article
                  className="contact-detail-card"
                  key={card.title}
                  tabIndex={0}
                  aria-label={card.title}
                >
                  <span className="contact-icon"><Icon name={card.icon} /></span>
                  <h3>{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line.text}>
                      <a
                        href={line.href}
                        {...(line.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                      >
                        {line.text}
                      </a>
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-enquiry-section">
          <div className="wrap contact-enquiry-grid">
            <form className="reference-contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  <span className="sr-only">Name</span>
                  <input required name="name" placeholder="Name" autoComplete="name" />
                </label>
                <label>
                  <span className="sr-only">Choose your location</span>
                  <select defaultValue="" name="location" required>
                    <option value="" disabled>Choose your Location</option>
                    {locations.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
              </div>
              <div className="contact-form-row">
                <label>
                  <span className="sr-only">Phone</span>
                  <input required type="tel" name="phone" placeholder="Phone" autoComplete="tel" />
                </label>
                <label>
                  <span className="sr-only">Email</span>
                  <input required type="email" name="email" placeholder="Email" autoComplete="email" />
                </label>
              </div>
              <label>
                <span className="sr-only">Service</span>
                <select defaultValue="" name="service" required>
                  <option value="" disabled>Service</option>
                  {services.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Your message</span>
                <textarea required name="message" rows="5" placeholder="Typing your message here..." />
              </label>
              <button type="submit" className="button">Get a Quote</button>
            </form>

            <div className="contact-enquiry-copy">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Send Us a Message</h2>
              <p>Looking for reliable maintenance solutions? Unique Tech General Maintenance LLC is here to help. Contact our team for professional support, service enquiries, and customized maintenance solutions. We look forward to understanding your needs and providing the right solutions.</p>
              <SocialLinks className="social contact-social" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
