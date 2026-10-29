import "./SocialLinks.css";

import { company } from "../data/company";

import group101 from "../assets/images/Group 10 (1).png";
import group121 from "../assets/images/Group 12 (1).png";
import group131 from "../assets/images/Group 13 (1).png";
import thesvgColorInstagram from "../assets/images/thesvg-color_instagram.png";

function SocialLinks({ className = "social" }) {
  return (
    <div className={className}>
      <a href={company.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <img src={group101} alt="" />
      </a>
      <a href={company.social.instagram} aria-label="Instagram">
        <img src={thesvgColorInstagram} alt="" />
      </a>
      <a href={company.social.facebook} aria-label="Facebook">
        <img src={group121} alt="" />
      </a>
      <a href={company.social.tiktok} aria-label="TikTok">
        <img src={group131} alt="" />
      </a>
    </div>
  );
}

export default SocialLinks;
