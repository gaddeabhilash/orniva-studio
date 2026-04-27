import "./App.css";
import { useState, useEffect } from "react";

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

const designConcepts = [
  {
    title: "Courtyard Residence",
    category: "Living",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Urban Minimalist Lounge",
    category: "Living",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Compact City Apartment",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Serene Master Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Modern Modular Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Scandinavian Cookspace",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80",
  },
];

const whyChooseUs = [
  {
    title: "Personalized Service",
    copy: "As a boutique studio, you work directly with the founder. No account managers, no layers—just focused attention on your space.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    copy: "Startup rates without startup quality. We keep overheads low and pass the savings to you—transparent quotes, no hidden costs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Direct Communication",
    copy: "Daily updates via WhatsApp. Quick decisions, faster iterations, and a design process that moves at your pace.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Flexible Design Approach",
    copy: "Need just a layout? Or end-to-end execution? We adapt to your needs—modular packages that fit your timeline and budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const processSteps = [
  { title: "Consultation", desc: "Understand your lifestyle, needs, and budget over a free discovery call." },
  { title: "Design", desc: "Mood boards, layout options, and material palettes tailored to your taste." },
  { title: "3D Views", desc: "Realistic renders so you can experience the space before a single brick moves." },
  { title: "Execution", desc: "Vendor coordination, site visits, and quality checks handled end-to-end." },
  { title: "Delivery", desc: "Final styling, snag list completion, and a space ready to live in." },
];

const beliefs = [
  {
    title: "Craftsmanship",
    copy: "Every detail reflects quality, precision, and creativity, shaping interiors built to last.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    copy: "We design through dialogue, turning ideas into meaningful spatial experiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    copy: "We design with care, using materials and methods that inspire longevity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9-9-9-9s-4.5 9-9 9c0 4.97 4.03 9 9 9z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "What types of projects does Orniva handle?",
    answer:
      "We work on residential interiors, commercial spaces, furniture and decor, space planning, 3D visualization, and styling support.",
  },
  {
    question: "Can you help with only one room?",
    answer:
      "Yes. We can support a single-room refresh, a compact apartment, or a complete interior plan depending on your needs.",
  },
  {
    question: "Do you provide 3D views before execution?",
    answer:
      "Yes. We use layouts and 3D visualization to help you review proportions, finishes, storage, and flow before work begins.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Share your project type, location, rough requirements, and contact details through the form or WhatsApp. We will review it and suggest the next step.",
  },
];

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredConcepts =
    activeFilter === "All"
      ? designConcepts
      : designConcepts.filter((c) => c.category === activeFilter);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const projectType = formData.get("project");
    const message = `Hi Orniva, I'd like to discuss a project.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProject Type: ${encodeURIComponent(projectType)}`;
    window.open(`https://wa.me/919398801834?text=${message}`, "_blank");
    setIsSubmitted(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const filters = ["All", "Living", "Kitchen", "Bedroom"];

  return (
    <main className="site-shell">
      {/* Navbar */}
      <header className="navbar" aria-label="Primary navigation">
        <nav className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#concepts" onClick={closeMenu}>Concepts</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Interior Design Studio</p>
          <h1>We design spaces that reflect your lifestyle</h1>
          <p className="hero-copy">
            A new interior design studio focused on thoughtful layouts, honest pricing, and spaces that feel like home from day one. No corporate overhead. Just great design.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Get Free Consultation
            </a>
            <a className="secondary-action" href="#concepts">
              View Design Concepts
            </a>
          </div>
        </div>
      </section>

      {/* Launch Offer */}
      <section className="launch-offer fade-in">
        <div className="launch-offer-inner">
          <div className="launch-badge">Limited Offer</div>
          <p>
            <strong>Free 3D Design Consultation</strong> for the first 10 clients. Book now and see your space before you spend a rupee.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="content-section services-section fade-in">
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

      {/* Design Concepts */}
      <section id="concepts" className="content-section concepts-section fade-in">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Our Design Concepts</h2>
          <p className="section-subtext">
            Visual explorations that showcase our design direction. These are concept designs.
          </p>
        </div>
        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? "is-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="concept-grid">
          {filteredConcepts.map((concept) => (
            <article className="concept-card" key={concept.title}>
              <div className="concept-image-wrap">
                <img src={concept.image} alt={`${concept.title} interior concept`} loading="lazy" />
                <div className="concept-badge">Concept Design</div>
              </div>
              <div className="concept-meta">
                <h3>{concept.title}</h3>
                <span className="concept-category">{concept.category}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="content-section why-section fade-in">
        <div className="section-heading">
          <p className="eyebrow">Why Orniva</p>
          <h2>Built for clients who value clarity and craft.</h2>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="content-section process-section fade-in">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>A simple five-step journey to your new space.</h2>
        </div>
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <div className="process-number">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beliefs */}
      <section id="beliefs" className="content-section beliefs-section fade-in">
        <div className="section-heading">
          <p className="eyebrow">Philosophy</p>
          <h2>What we believe in</h2>
        </div>
        <div className="belief-grid">
          {beliefs.map((belief) => (
            <article className="belief-card" key={belief.title}>
              <div className="belief-icon">{belief.icon}</div>
              <div>
                <h3>{belief.title}</h3>
                <p>{belief.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="content-section faq-section fade-in">
        <div className="section-heading">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Answers before we begin.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="content-section contact-section fade-in">
        <div className="contact-copy">
          <p className="eyebrow">Start a project</p>
          <h2>Ready to transform your space?</h2>
          <p>
            Tell us what you are dreaming of. We will reply within 24 hours with next steps and a rough estimate—no pressure, no spam.
          </p>
          <div className="contact-highlights">
            <div className="contact-highlight">
              <span className="highlight-number">24h</span>
              <span className="highlight-label">Average response time</span>
            </div>
        </div>
        </div>
        <form className="quote-form" onSubmit={handleSubmit}>
          <label>
            <span className="label-text">Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            <span className="label-text">Phone</span>
            <input type="tel" name="phone" placeholder="+91 98765 43210" required />
          </label>
          <label>
            <span className="label-text">Project type</span>
            <select name="project">
              <option>Residential interiors</option>
              <option>Commercial space</option>
              <option>Furniture and decor</option>
              <option>Space planning</option>
            </select>
          </label>
          <button type="submit">Get Free Consultation</button>
          {isSubmitted && (
            <p className="form-note" role="status">
              Redirecting you to WhatsApp to confirm your request…
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-brand">
          <p>Orniva Design Studio</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#concepts">Concepts</a>
          <a href="#why-us">Why Us</a>
          <a href="#process">Process</a>
          <a href="#beliefs">Beliefs</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-bottom">
          <p>&copy; 2026 Orniva Design Studio</p>
          <a href="#home">Privacy policy</a>
          <a href="#home">Terms &amp; Conditions</a>
          <div className="footer-socials" aria-label="Social links">
            <a href="#home" aria-label="X">X</a>
            <a href="#home" aria-label="LinkedIn">in</a>
            <a href="#home" aria-label="Instagram">IG</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        className="whatsapp-float"
        href="https://wa.me/919398801834?text=Hi%20Orniva%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20project."
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
