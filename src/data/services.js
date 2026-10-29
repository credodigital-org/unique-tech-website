import projectHvac from "../assets/images/project-hvac.webp";
import projectKitchen from "../assets/images/project-kitchen.webp";
import projectMaintenanceTeam from "../assets/images/project-maintenance-team.webp";
import projectWaterTank from "../assets/images/project-water-tank.webp";

// Service cards shown on the home page. `icon` is a key from components/Icons.jsx.
export const homeServices = [
  {
    title: "MEP (Mechanical, Electrical & Plumbing)",
    icon: "wrench",
    image: projectHvac,
    items: ["Electrical installation, maintenance, and troubleshooting", "Plumbing installation, repair, and maintenance"],
  },
  {
    title: "AMC (Annual Maintenance Contract)",
    icon: "brush",
    image: projectMaintenanceTeam,
    items: ["Annual MEP maintenance contracts", "HVAC and air conditioning maintenance contracts"],
  },
  {
    title: "Water & Specialized Maintenance",
    icon: "wrench",
    image: projectWaterTank,
    items: ["Water tank cleaning and disinfection", "Water sampling and water quality testing coordination"],
  },
  {
    title: "General Maintenance Services",
    icon: "gear",
    image: projectKitchen,
    items: ["General building maintenance and repair", "Air conditioning and ventilation maintenance"],
  },
];
