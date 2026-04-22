import "./App.css";
import { useState } from "react";

const services = [
  {
    title: "Residential interiors",
    copy: "Warm, functional homes planned around your routines, storage, light, and finishes.",
  },
  {
    title: "Commercial spaces",
    copy: "Workplaces, studios, salons, and retail spaces shaped for flow and brand presence.",
  },
  {
    title: "Furniture and decor",
    copy: "Custom furniture, material palettes, soft furnishings, and styling details.",
  },
  {
    title: "Space planning",
    copy: "Layouts, zoning, 3D views, and detail-ready plans before work begins on site.",
  },
];

const projects = [
  {
    title: "Courtyard Residence",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Compact City Apartment",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Retail Lounge",
    location: "Vijayawada",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=80",
  },
];

const processSteps = ["Discovery", "Concept", "3D views", "Styling"];

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="site-shell">
      <header className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Orniva home">
          Orniva
        </a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">Interior design and space planning</p>
          <h1>Orniva Design Studio</h1>
          <p className="hero-copy">
            Elegant homes and workspaces with thoughtful layouts, layered materials, and a finish that feels lived-in from day one.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Get quote
            </a>
            <a className="secondary-action" href="#projects">
              View work
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="content-section services-section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Design support from first sketch to final styling.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Selected projects</p>
          <h2>Rooms with calm structure and memorable details.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={`${project.title} interior`} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="split-section">
        <div className="split-image" aria-hidden="true" />
        <div className="split-content">
          <p className="eyebrow">Why Orniva</p>
          <h2>Clear decisions before site work begins.</h2>
          <p>
            We pair 3D visualization with practical project coordination, so budget, materials, and timelines stay visible throughout the work.
          </p>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="eyebrow">Start a project</p>
          <h2>Tell us about your space.</h2>
          <p>
            Share a few details and Orniva can help shape the next move, from a single-room refresh to a complete interior plan.
          </p>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="+91 98765 43210" />
          </label>
          <label>
            Project type
            <select name="project">
              <option>Residential interiors</option>
              <option>Commercial space</option>
              <option>Furniture and decor</option>
              <option>Space planning</option>
            </select>
          </label>
          <button type="submit">Submit request</button>
          {isSubmitted && (
            <p className="form-note" role="status">
              Thanks. Orniva will review your request and get back to you.
            </p>
          )}
        </form>
      </section>

      <footer className="site-footer">
        <p>Orniva Design Studio</p>
        <span>Interiors, planning, 3D visualization, and styling.</span>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/919876543210?text=Hi%20Orniva%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Orniva on WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
          <path d="M16.01 3.2c-6.98 0-12.66 5.55-12.66 12.38 0 2.18.59 4.32 1.7 6.19l-1.81 6.77 6.98-1.78a12.9 12.9 0 0 0 5.79 1.4c6.98 0 12.66-5.55 12.66-12.38S22.99 3.2 16.01 3.2Zm0 22.86c-1.85 0-3.67-.49-5.26-1.42l-.38-.22-4.14 1.06 1.07-4-.25-.41a10.2 10.2 0 0 1-1.59-5.49c0-5.67 4.73-10.28 10.55-10.28s10.55 4.61 10.55 10.28-4.73 10.48-10.55 10.48Zm5.78-7.69c-.32-.16-1.87-.9-2.16-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.2-.18.21-.37.23-.69.08-.32-.16-1.34-.48-2.55-1.54-.94-.82-1.58-1.83-1.76-2.14-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.67-.97-2.29-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.05-1.1 2.56s1.13 2.97 1.29 3.18c.16.21 2.22 3.31 5.37 4.64.75.32 1.34.51 1.8.66.76.23 1.45.2 1.99.12.61-.09 1.87-.75 2.13-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.61-.37Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
