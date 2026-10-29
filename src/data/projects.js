import commercialInteriorReference from "../assets/images/commercial-interior-reference.webp";
import landscapeMaintenanceReference from "../assets/images/landscape-maintenance-reference.webp";
import projectHvac from "../assets/images/project-hvac.webp";
import projectKitchen from "../assets/images/project-kitchen.webp";
import projectMaintenanceTeam from "../assets/images/project-maintenance-team.webp";
import projectWaterTank from "../assets/images/project-water-tank.webp";
export const filters = ["All", "MEP Works", "Maintenance", "Interior Works", "Landscaping", "Material Supply"];

export const projects = [
  { title: "Commercial Building Maintenance", description: "Comprehensive building maintenance and technical support for commercial properties.", category: "General Maintenance", image: projectHvac, tags: ["Maintenance"] },
  { title: "MEP Installation Works", description: "Electrical, plumbing, and mechanical system installation and coordination.", category: "MEP Works", image: projectMaintenanceTeam, tags: ["MEP Works", "Maintenance"] },
  { title: "Interior Fit-Out & Renovation", description: "Interior finishing, ceiling installation, flooring, and renovation works.", category: "Civil & Interior Works", image: commercialInteriorReference, tags: ["Interior Works"] },
  { title: "Landscape & Outdoor Maintenance", description: "Garden care, irrigation systems, and outdoor facility maintenance.", category: "Landscaping", image: landscapeMaintenanceReference, tags: ["Landscaping", "Maintenance"] },
  { title: "HVAC & Chiller Maintenance", description: "Professional HVAC system inspection, equipment servicing, and maintenance to support efficient cooling and reliable building operations.", category: "HVAC Maintenance", image: projectHvac, tags: ["MEP Works", "Maintenance"] },
  { title: "Water Tank Cleaning & Treatment", description: "Water tank cleaning, disinfection, and specialized water system maintenance to support hygiene and water quality.", category: "Water & Specialized Maintenance", image: projectWaterTank, tags: ["Maintenance"] },
];

// Cards on the home page ("Our Featured Projects").
export const featuredProjects = [
  { title: "Commercial Building Maintenance", image: commercialInteriorReference },
  { title: "MEP Installation Works", image: projectMaintenanceTeam },
  { title: "Interior Fit-Out & Renovation", image: projectKitchen },
  { title: "Landscape & Outdoor Maintenance", image: landscapeMaintenanceReference },
];
