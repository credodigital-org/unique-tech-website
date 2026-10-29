import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { filters, projects } from "../data/projects";

import "./ProjectsPage.css";

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hasFiltered, setHasFiltered] = useState(false);

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Our Projects | Unique Tech General Maintenance LLC</title>
        <meta
          name="description"
          content="Explore Unique Tech's portfolio of MEP, maintenance, interior, landscaping and water system projects across residential, commercial and industrial properties."
        />
      </Helmet>

      <Navbar />

      <main className="page-main">
        <section className="page-hero projects-page-hero">
          <div className="wrap"><h1>Our Projects</h1></div>
        </section>

        <section className="projects-overview">
          <div className="wrap">
            <header className="projects-intro">
              <h2>Delivering Quality. Building Trust.</h2>
              <p>Explore our project portfolio showcasing our commitment to quality, technical excellence, and reliable maintenance solutions across residential, commercial, and industrial properties.</p>
            </header>

            <div className="project-filters" role="group" aria-label="Filter projects">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={activeFilter === filter ? "filter-button active" : "filter-button"}
                  aria-pressed={activeFilter === filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setHasFiltered(true);
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div
              key={activeFilter}
              className={hasFiltered ? "project-gallery filtered" : "project-gallery"}
              aria-live="polite"
            >
              {visibleProjects.map((project, index) => (
                <article
                  className="portfolio-card"
                  key={project.title}
                  style={{ "--i": index }}
                  tabIndex={0}
                >
                  <div className="portfolio-photo">
                    <img src={project.image} alt={project.title} loading={index > 2 ? "lazy" : "eager"} />
                  </div>
                  <div className="portfolio-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <strong>{project.category}</strong>
                  </div>
                </article>
              ))}
              {visibleProjects.length === 0 && (
                <p className="no-projects">More projects in this category will be added soon.</p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;
