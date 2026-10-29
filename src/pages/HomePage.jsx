import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ServiceGlyph } from "../components/Icons";

import { homeServices } from "../data/services";
import { benefits } from "../data/home";
import { featuredProjects } from "../data/projects";
import aboutTeamReference from "../assets/images/about-team-reference.webp";
import projectHvac from "../assets/images/project-hvac.webp";

import "./HomePage.css";


function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Unique Tech General Maintenance LLC</title>
        <meta
          name="description"
          content="Unique Tech General Maintenance LLC provides MEP works, professional cleaning, general maintenance and AMC services in Abu Dhabi."
        />
      </Helmet>

      <Navbar />

      <main className="page-main">
        <section className="homehero">
          <div className="wrap homeherocopy">
            <h1>Your Trusted Partner for <br />Complete Maintenance <br />Solutions</h1>
            <p>From MEP works and professional to general maintenance and AMC services, we deliver reliable solutions to keep your residential and commercial properties running smoothly.</p>
            <div className="homeactions">
              <Link className="button homebutton" to="/contact">Get a Free Quote</Link>
              <Link className="button outlinebutton" to="/services">Explore Our Services</Link>
            </div>
          </div>
          {/* Phone-only crop of the hero photo (worker, logo and skyline) */}
          <div className="homeheroart" aria-hidden="true" />
        </section>

        <section className="homeabout">
          <div className="dotwash" />
          <div className="wrap homeaboutgrid">
            <img src={aboutTeamReference} alt="Unique Tech maintenance team working on site" />
            <div>
              <span className="eyebrow">ABOUT US</span>
              <h2>Reliable Maintenance.<br />Exceptional Service.</h2>
              <p>At Unique Tech General Maintenance LLC, we are committed to providing dependable maintenance solutions tailored to your needs. Our focus on quality workmanship, timely service, and customer satisfaction helps keep your spaces safe, clean, and well-maintained.</p>
            </div>
          </div>
        </section>

        <section className="homeservices">
          <div className="wrap">
            <div className="centerheading">
              <span className="eyebrow">OUR SERVICES</span>
              <h2>Complete Maintenance Solutions<br />Under One Roof</h2>
              <p>We offer a comprehensive range of maintenance services designed to meet the needs of residential, commercial,<br className="desktopbreak" /> and industrial properties.</p>
            </div>
            <div className="homecards">
              {homeServices.map((service, i) => (
                <Link to="/services" className={`homecard card-${i + 1}`} key={service.title}>
                  <div className="cardphoto"><img src={service.image} alt="" /></div>
                  <span className="serviceicon"><ServiceGlyph name={service.icon} /></span>
                  <div className="cardcopy">
                    <h3>{service.title}</h3>
                    <ul>
                      {service.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
            <Link className="button centerbutton" to="/services">View All Services</Link>
          </div>
        </section>

        <section className="homebenefits">
          <div className="dotwash" />
          <div className="wrap benefitgrid">
            <div className="benefitintro">
              <h2>Looking for a Reliable Maintenance Partner?</h2>
              <p>Whether you need technical maintenance, professional cleaning, general repairs, or an annual maintenance plan, Unique Tech General Maintenance LLC is ready to discuss your requirements.</p>
              <div className="miniphotos">
                <img src={aboutTeamReference} alt="Maintenance work in progress" />
                <img src={projectHvac} alt="HVAC maintenance" />
              </div>
            </div>
            <div className="benefitcards">
              {benefits.map((benefit) => (
                <article className={benefit.dark ? "benefit darkbenefit" : "benefit"} key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="homeprojects">
          <div className="wrap">
            <div className="centerheading">
              <span className="eyebrow">PROJECTS</span>
              <h2>Our Featured Projects</h2>
              <p>We take pride in delivering high-quality maintenance and facility solutions for residential, commercial, and<br className="desktopbreak" /> industrial properties. Explore some of our featured projects that reflect our commitment to quality, reliability, and<br className="desktopbreak" /> customer satisfaction.</p>
            </div>
            <div className="projectcards">
              {featuredProjects.map((project) => (
                <Link to="/projects" className="projectcard" key={project.title}>
                  <img src={project.image} alt="" />
                  <h3>{project.title}</h3>
                </Link>
              ))}
            </div>
            <Link className="button centerbutton" to="/projects">View All Projects</Link>
          </div>
        </section>

        <section className="homecall">
          <div className="wrap homecallinner">
            <div>
              <h2>Quality Service. Lasting Solutions.</h2>
              <p>We provide reliable maintenance, cleaning, repair, and specialized technical services to keep your residential, commercial, and industrial properties running smoothly and efficiently.</p>
            </div>
            <div className="homeactions">
              <Link to="/contact" className="button homebutton">Contact Us</Link>
              <Link to="/contact" className="button outlinebutton">Request a Free Quote</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
