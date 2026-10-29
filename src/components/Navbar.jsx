import "./Navbar.css";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { company } from "../data/company";
import { navigation } from "../data/navigation";

import vector2 from "../assets/images/Vector (2).png";
import boxiconsLocationFilled from "../assets/images/boxicons_location-filled.png";
import gardenEmailFill20 from "../assets/images/garden_email-fill-20.png";
import uniqueTechLogoMark from "../assets/images/unique-tech-logo-mark.png";
import uniqueTechWordmark from "../assets/images/unique-tech-wordmark.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="topline">
        <div className="wrap topinner">
          <span className="top-location">
            <img src={boxiconsLocationFilled} alt="" />
            <a href={company.mapUrl} target="_blank" rel="noreferrer">{company.name}</a>
          </span>
          <span>
            <img src={gardenEmailFill20} alt="" />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
          <span>
            <img src={vector2} alt="" />
            <a href={company.phones[0].href}>{company.phones[0].label}</a>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="wrap navrow">
          <Link to="/" className="brand" onClick={close}>
            <img src={uniqueTechLogoMark} alt="" />
            <img className="wordmark" src={uniqueTechWordmark} alt={company.name} />
          </Link>

          <button
            className="menubtn"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>

          <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Main navigation">
            {navigation.map(({ to, label }) => (
              <NavLink end={to === "/"} to={to} key={to} onClick={close}>{label}</NavLink>
            ))}
            <Link className="navcta" to="/contact" onClick={close}>Get a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
