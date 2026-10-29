import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ServiceGlyph } from "../components/Icons";

import { serviceCatalog } from "../data/serviceCatalog";

import "./ServicesPage.css";


function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | Unique Tech General Maintenance LLC</title>
        <meta
          name="description"
          content="MEP works, AMC contracts, water and specialized maintenance, civil and interior works, flooring, landscaping, material supply and appliance repair in Abu Dhabi."
        />
      </Helmet>

      <Navbar />

      <main className="page-main">
        <section className="page-hero services-page-hero">
          <div className="wrap"><h1>Our Services</h1></div>
        </section>

        <section className="services-overview">
          <div className="wrap">
            <header className="services-intro">
              <h2>Complete Maintenance Solutions<br />Under One Roof</h2>
              <p>At Unique Tech General Maintenance Co. L.L.C., we provide comprehensive maintenance, repair, installation, and material supply solutions for residential, commercial, and industrial properties. Our experienced team is committed to delivering reliable service, quality workmanship, and customer satisfaction.</p>
            </header>

            <div className="service-catalog-grid">
              {serviceCatalog.map((service, index) => (
                <article className="service-catalog-card" key={service.title} tabIndex={0}>
                  <div className="service-catalog-photo">
                    <div className="service-catalog-frame">
                      <img src={service.image} alt={service.title} loading={index > 2 ? "lazy" : "eager"} />
                    </div>
                    <span className="catalog-service-icon"><ServiceGlyph name="wrench" /></span>
                  </div>
                  <div className="service-catalog-copy">
                    <h3>{service.title}</h3>
                    {service.description && <p>{service.description}</p>}
                    <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
