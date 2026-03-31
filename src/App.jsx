import { useEffect, useRef, useState } from "react";
import serviceCorporateImage from "./assets/service-corporate.png";
import servicePlatformsImage from "./assets/service-platforms.png";
import serviceMvpImage from "./assets/service-mvp.png";
import reasonExpertImage from "./assets/reason-expert-team.png";
import reasonAgileImage from "./assets/reason-agile.png";
import reasonTechImage from "./assets/reason-cutting-edge.png";
import reasonPartnerImage from "./assets/reason-partnership.png";
import reasonSecurityImage from "./assets/reason-security.png";
import reasonSupportImage from "./assets/reason-support.png";
import detailEnterpriseImage from "./assets/detail-enterprise.png";
import detailIndustryImage from "./assets/detail-industry.png";
import detailTransformationImage from "./assets/detail-transformation.png";
import instagramIcon from "./assets/icon-instagram.png";
import whatsappIcon from "./assets/icon-whatsapp.png";
import emailIcon from "./assets/icon-email.png";

const portfolioUrl = "https://kypchumba.github.io/#get-in-touch";

const navItems = [
  { id: "services", label: "Services" },
  { id: "why-choose", label: "Why Choose" },
  { id: "process", label: "Process" },
  { id: "services-detail", label: "Services In Detail" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const faqs = [
  {
    question: "What kind of websites does Kencore Systems build?",
    answer:
      "Kencore Systems builds corporate websites, small service business sites, custom platforms and startup MVPs with a strong focus on clarity, credibility and modern frontend quality.",
  },
  {
    question: "What is included in the cost?",
    answer:
      "Usually, this includes web design, domain registration, web hosting and SSL certificates depending on the project scope.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. If your current site feels outdated, unclear or weak on conversions, it can be redesigned into something cleaner, faster and more professional.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "Timelines vary, but if goals are clear and content is ready, a simple static MVP site can take between one and four weeks.",
  },
  {
    question: "Can you build both marketing sites and web apps?",
    answer:
      "Yes. Kencore Systems can handle polished landing pages, company websites, dashboards, client portals and lean product MVPs depending on the business need.",
  },
];

const services = [
  {
    title: "Corporate Websites",
    text: "Professional company sites designed to build trust, present your value clearly and turn visits into qualified enquiries.",
    image: serviceCorporateImage,
  },
  {
    title: "Custom Business Platforms",
    text: "Internal tools, admin panels and client portals that streamline operations without looking like an afterthought.",
    image: servicePlatformsImage,
  },
  {
    title: "Product MVPs",
    text: "Lean, modern web apps that help founders validate ideas quickly with strong UX and clean frontend architecture.",
    image: serviceMvpImage,
  },
];

const reasons = [
  {
    title: "Expert Team",
    text: "Our team of seasoned developers, architects, and consultants brings decades of combined experience across diverse industries and technologies.",
    image: reasonExpertImage,
  },
  {
    title: "Agile Methodology",
    text: "We employ agile development practices to ensure flexibility, transparency, and continuous delivery of value throughout the project lifecycle.",
    image: reasonAgileImage,
  },
  {
    title: "Cutting-Edge Technology",
    text: "We stay at the forefront of technological innovation, leveraging the latest tools, frameworks, and best practices to deliver superior solutions.",
    image: reasonTechImage,
  },
  {
    title: "Partnership Approach",
    text: "We view ourselves as your technology partner, not just a vendor. Your success is our success, and we're committed to your long-term growth.",
    image: reasonPartnerImage,
  },
  {
    title: "Security-First Mindset",
    text: "Security is integrated into every aspect of our development process, ensuring your data and systems remain protected against evolving threats.",
    image: reasonSecurityImage,
  },
  {
    title: "Dedicated Support",
    text: "Our commitment doesn't end at deployment. We provide comprehensive post-launch support and maintenance to ensure your solution continues to perform optimally.",
    image: reasonSupportImage,
  },
];

const process = [
  {
    step: "1. Discovery & Requirements",
    text: "We start by understanding your business goals, target audience, preferred design style, features, timeline, and content requirements.",
  },
  {
    step: "2. Design & Development",
    text: "Your ideas are transformed into a functional product. We build the structure, design the interface, and develop all required features.",
  },
  {
    step: "3. Testing & Client Review",
    text: "The project is thoroughly tested for performance and usability, then shared with you for feedback on design, flow, and functionality.",
  },
  {
    step: "4. Refinement & Deployment",
    text: "We implement your feedback, finalize the project, connect your domain, and deploy it live for the world to access.",
  },
  {
    step: "5. Ongoing Support & Maintenance",
    text: "After launch, we provide continuous updates, fixes, and improvements to keep your system running smoothly and efficiently.",
  },
];

const serviceDetails = [
  {
    id: "enterprise",
    label: "Enterprise solutions",
    title: "Enterprise Solutions",
    description:
      "Comprehensive software ecosystems that integrate all aspects of your enterprise operations.",
    items: [
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Business Intelligence & Analytics",
      "Supply Chain Management",
      "Human Resource Management Systems",
      "Digital Workplace Solutions",
    ],
    image: detailEnterpriseImage,
  },
  {
    id: "industry",
    label: "Industry-Specific",
    title: "Industry-Specific Solutions",
    description:
      "Specialized software tailored to the unique requirements of your industry vertical.",
    items: [
      "Healthcare Management Systems",
      "Network and internet services",
      "Financial Services Platforms",
      "Retail & E-commerce Solutions",
      "Manufacturing Execution Systems",
      "Logistics & Transportation Management",
    ],
    image: detailIndustryImage,
  },
  {
    id: "transformation",
    label: "Digital Transformation",
    title: "Digital Transformation",
    description:
      "Strategic technology initiatives that revolutionize your business model and customer experiences.",
    items: [
      "Digital Experience Platforms",
      "Process Automation & Workflow Optimization",
      "Data-Driven Decision Making",
      "Legacy System Modernization",
      "API Integration & Microservices",
    ],
    image: detailTransformationImage,
  },
];

const contactButtons = [
  {
    label: "Instagram",
    href: portfolioUrl,
    icon: instagramIcon,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?text=Hello%20Kencore%20Systems%2C%20I%20would%20like%20to%20discuss%20my%20project.",
    icon: whatsappIcon,
  },
  {
    label: "Email",
    href: "mailto:chumbakenny@gmail.com",
    icon: emailIcon,
  },
];

function animateValue(setValue, endValue, duration = 1400) {
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    setValue(Math.floor(progress * endValue));

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

export default function App() {
  const statsRef = useRef(null);
  const sectionElementsRef = useRef([]);
  const navRef = useRef(null);
  const navLinkRefs = useRef({});
  const hasAnimatedRef = useRef(false);
  const [happyClients, setHappyClients] = useState(0);
  const [projectsDelivered, setProjectsDelivered] = useState(0);
  const [activeSection, setActiveSection] = useState("services");
  const [activeDetailTab, setActiveDetailTab] = useState(serviceDetails[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const statsNode = statsRef.current;

    if (!statsNode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animateValue(setHappyClients, 30);
          animateValue(setProjectsDelivered, 100, 1700);
          observer.disconnect();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(statsNode);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = sectionElementsRef.current.filter(Boolean);

      if (!sections.length) {
        return;
      }

      const viewportAnchor = window.innerHeight * 0.3;
      let nextActiveSection = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);

        if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
          nextActiveSection = section.id;
          closestDistance = -1;
          return;
        }

        if (closestDistance !== -1 && distance < closestDistance) {
          closestDistance = distance;
          nextActiveSection = section.id;
        }
      });

      setActiveSection((current) =>
        current === nextActiveSection ? current : nextActiveSection
      );
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const activeLink = navLinkRefs.current[activeSection];

    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const activeServiceDetail =
    serviceDetails.find((detail) => detail.id === activeDetailTab) ?? serviceDetails[0];

  return (
    <div className="landing-shell">
      <header className="landing-header">
        <div className="logo-mark">KC</div>
      </header>

      <nav ref={navRef} className="section-dashboard landing-dashboard" aria-label="Section navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            ref={(node) => {
              navLinkRefs.current[item.id] = node;
            }}
            className={activeSection === item.id ? "is-active" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main className="landing-main">
        <section className="landing-copy">
          <h1>Welcome to Kencore Systems</h1>
          <p>
            We specialize in digitalizing businesses and help them connect with more clients through
            technology.
          </p>
          <p>Stop missing out on more clients contact us today.</p>
        </section>

        <section ref={statsRef} className="stats-strip" aria-label="Kencore Systems highlights">
          <article className="stat-item">
            <strong>{happyClients}+</strong>
            <span>Happy clients</span>
          </article>
          <article className="stat-item">
            <strong>{projectsDelivered}+</strong>
            <span>Projects delivered</span>
          </article>
        </section>

        <section className="content-stack">
          <section
            id="services"
            ref={(node) => {
              sectionElementsRef.current[0] = node;
            }}
            className="section-card"
          >
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Solutions that help businesses present better and convert better</h2>
            </div>
            <div className="grid-cards service-cards-grid">
              {services.map((service) => (
                <article key={service.title} className="info-card service-card">
                  <img src={service.image} alt="" className="service-card-image" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="why-choose"
            ref={(node) => {
              sectionElementsRef.current[1] = node;
            }}
            className="section-card why-choose-section"
          >
            <div className="section-heading">
              <p className="eyebrow">Why choose heykensystems</p>
              <h2>Our commitment to excellence sets us apart</h2>
            </div>
            <div className="reasons-list">
              {reasons.map((reason) => (
                <article key={reason.title} className="reason-row">
                  <div className="reason-image-wrap">
                    <img src={reason.image} alt="" className="reason-image" />
                  </div>
                  <div className="reason-copy">
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="process"
            ref={(node) => {
              sectionElementsRef.current[2] = node;
            }}
            className="section-card process-flow"
          >
            <div className="section-heading">
              <p className="eyebrow">Process</p>
              <h2>A straightforward workflow from first brief to long-term support</h2>
            </div>
            <div className="process-track">
              {process.map((item) => (
                <article key={item.step} className="process-box">
                  <span className="process-step">{item.step}</span>
                  <span className="process-text">{item.text}</span>
                </article>
              ))}
            </div>
          </section>

          <section
            id="services-detail"
            ref={(node) => {
              sectionElementsRef.current[3] = node;
            }}
            className="section-card services-detail-section"
          >
            <div className="section-heading">
              <p className="eyebrow">Services in detail</p>
              <h2>Explore the kind of digital systems we can plan, build, and scale with you</h2>
            </div>
            <div className="detail-tabs" role="tablist" aria-label="Service detail categories">
              {serviceDetails.map((detail) => (
                <button
                  key={detail.id}
                  type="button"
                  role="tab"
                  aria-selected={activeDetailTab === detail.id}
                  className={activeDetailTab === detail.id ? "detail-tab is-active" : "detail-tab"}
                  onClick={() => setActiveDetailTab(detail.id)}
                >
                  {detail.label}
                </button>
              ))}
            </div>
            <div className="detail-panel">
              <div className="detail-visual">
                <img src={activeServiceDetail.image} alt="" className="detail-image" />
              </div>
              <div className="detail-copy">
                <h3>{activeServiceDetail.title}</h3>
                <p>{activeServiceDetail.description}</p>
                <ul className="detail-list">
                  {activeServiceDetail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="cta-button"
                  href={portfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  discuss your requiremnts
                </a>
              </div>
            </div>
          </section>

          <section
            id="faq"
            ref={(node) => {
              sectionElementsRef.current[4] = node;
            }}
            className="section-card faq-panel"
          >
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Quick answers before we build together</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <article key={item.question} className={isOpen ? "faq-item is-open" : "faq-item"}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true"></span>
                    </button>
                    <div className={isOpen ? "faq-answer-wrap is-open" : "faq-answer-wrap"}>
                      <div className="faq-answer-inner">
                        <p className="faq-answer">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            id="contact"
            ref={(node) => {
              sectionElementsRef.current[5] = node;
            }}
            className="section-card contact-card"
          >
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Need a better web presence for your business?</h2>
            </div>
            <p className="contact-copy">
              Let&apos;s turn your offer into a website or web app that gives clients confidence from
              the first impression.
            </p>
            <a className="contact-link" href="mailto:chumbakenny@gmail.com">
              chumbakenny@gmail.com
            </a>
            <div className="contact-buttons" aria-label="Social contact links">
              {contactButtons.map((button) => (
                <a
                  key={button.label}
                  className="contact-pill"
                  href={button.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={button.icon} alt="" className="contact-pill-icon" />
                  <span className="contact-pill-label">{button.label}</span>
                </a>
              ))}
            </div>
            <a className="portfolio-footer-link" href={portfolioUrl} target="_blank" rel="noreferrer">
              CONTACT ME FROM MY PORTFOLIO
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}
