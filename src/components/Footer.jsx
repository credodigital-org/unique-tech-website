import "./Footer.css";

import { Link } from "react-router-dom";

import SocialLinks from "./SocialLinks";
import { company } from "../data/company";
import { footerServices } from "../data/navigation";

import vector2 from "../assets/images/Vector (2).png";
import boxiconsLocationFilled from "../assets/images/boxicons_location-filled.png";
import gardenEmailFill20 from "../assets/images/garden_email-fill-20.png";
import uniqueTechLogoMark from "../assets/images/unique-tech-logo-mark.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footergrid">
        <div>
          <Link to="/" className="footbrand">
            <img src={uniqueTechLogoMark} alt="" />
            <span><b>Unique Tech</b><small>GENERAL MAINTENANCE LLC</small></span>
          </Link>
          <p>Your trusted partner for MEP works, services, general maintenance, and AMC solutions.</p>
          <SocialLinks />
        </div>

        <div>
          <h3>Contact Info</h3>
          <p>
            <img className="footicon" src={boxiconsLocationFilled} alt="" />{" "}
            <a href={company.mapUrl} target="_blank" rel="noreferrer">
              {company.address.map((line, i) => (
                <span key={line}>{line}{i < company.address.length - 1 && <br />}</span>
              ))}
            </a>
          </p>
          <p>
            <img className="footicon" src={gardenEmailFill20} alt="" />{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          {company.phones.map((phone) => (
            <p key={phone.href}>
              <img className="footicon" src={vector2} alt="" />{" "}
              <a href={phone.href}>{phone.label}</a>
            </p>
          ))}
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Our Services</h3>
          {footerServices.map((service) => (
            <Link key={service} to="/services">{service}</Link>
          ))}
        </div>
      </div>

      <div className="wrap copyright">
        <span>© {new Date().getFullYear()} {company.name}. All Rights Reserved.</span>
        <span className="credit">
          Designed &amp; Developed by{" "}
          <a href="https://credodesigns.ae/" target="_blank" rel="noopener noreferrer">
            Credo Digital Designs LLC
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
