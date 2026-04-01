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
import processDiscoveryImage from "./assets/process-discovery.png";
import processDesignImage from "./assets/process-design.png";
import processTestingImage from "./assets/process-testing.png";
import processDeployImage from "./assets/process-deploy.png";
import processSupportImage from "./assets/process-support.png";
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
    question: "What kind of websites does Heykens Systems build?",
    answer:
      "Heykens Systems builds corporate websites, small service business sites, custom platforms and startup MVPs with a strong focus on clarity, credibility and modern frontend quality.",
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
      "Yes. Heykens Systems can handle polished landing pages, company websites, dashboards, client portals and lean product MVPs depending on the business need.",
  },
];

const services = [
  {
    title: "Corporate Websites",
    text: "Professional business websites engineered to earn trust, communicate your value instantly and turn attention into real business opportunities.",
    image: serviceCorporateImage,
  },
  {
    title: "Business Systems & Portals",
    text: "Tailored admin panels and client platforms that simplify workflows and elevate everyday operations.",
    image: servicePlatformsImage,
  },
  {
    title: "Startup MVPs",
    text: "Quick modern web apps built to test ideas very fast with intuitive UX and solid frontend foundations.",
    image: serviceMvpImage,
  },
];

const reasons = [
  {
    title: "Expert Team",
    text: "A diverse team with strong technical depth and cross-industry experience, delivering impactful systems that are scalable, reliable and thoughtfully designed to solve real business challenges.",
    image: reasonExpertImage,
  },
  {
    title: "Agile Methodology",
    text: "Using agile methodologies, we maintain flexibility while delivering incremental value across the entire project lifecycle.",
    image: reasonAgileImage,
  },
  {
    title: "Cutting-Edge Technology",
    text: "We stay ahead of technological trends by continuously exploring and adopting modern tools, frameworks and engineering practices, ensuring we deliver solutions that are not only reliable and scalable but also aligned with current and future industry standards.",
    image: reasonTechImage,
  },
  {
    title: "Partnership Approach",
    text: "We believe in building partnerships, not transactions. Your success is our priority and we remain dedicated to supporting your growth well beyond project delivery.",
    image: reasonPartnerImage,
  },
  {
    title: "Security-First Mindset",
    text: "Security is embedded into every stage of our development process ensuring your data, applications and systems remain protected against evolving threats and modern vulnerabilities.",
    image: reasonSecurityImage,
  },
  {
    title: "Dedicated Support",
    text: "Our partnership continues after launch with dedicated support and maintenance designed to keep your solution performing optimally and adapting to evolving requirements.",
    image: reasonSupportImage,
  },
];

const process = [
  {
    step: "1. Discovery & Requirements",
    text: "We start by understanding your business goals, target audience, preferred design style, features, timeline and content requirements.",
    image: processDiscoveryImage,
  },
  {
    step: "2. Design & Development",
    text: "Your ideas are transformed into a functional product. We build the structure, design the interface and develop all required features.",
    image: processDesignImage,
  },
  {
    step: "3. Testing & Client Review",
    text: "The project is thoroughly tested for performance and usability, then shared with you for feedback on design, flow and functionality.",
    image: processTestingImage,
  },
  {
    step: "4. Refinement & Deployment",
    text: "We implement your feedback, finalize the project, connect your domain and deploy it live for the world to access.",
    image: processDeployImage,
  },
  {
    step: "5. Ongoing Support & Maintenance",
    text: "After launch, we provide continuous updates, fixes and improvements to keep your system running smoothly and efficiently.",
    image: processSupportImage,
  },
];

const serviceDetails = [
  {
    id: "enterprise",
    label: "Enterprise solutions",
    title: "Enterprise Solutions",
    description:
      "Fully integrated software ecosystems that connect every part of your enterprise operations.",
    items: [
      "Workflow Automation Systems & tools",
      "Order Management System (OMS)",
      "Billing & Subscription Management",
      "Supply Chain Management",
      "Inventory Management Systems",
      "Business Intelligence & Analytics",
      "Human Resource Management Systems",
      "Digital Workplace Solutions",
    ],
    image: detailEnterpriseImage,
  },
  {
    id: "industry",
    label: "Industry Specific",
    title: "Industry Specific Solutions",
    description:
      "Industry-specific software designed to meet the unique needs of your business sector.",
    items: [
      "Laboratory Information Management Systems (LIMS)",
      "Hospital Information Systems (HIS)",
      "Warehouse Management Systems (WMS)",
      "IT Infrastructure Management Platforms",
      "Retail & E-commerce Solutions",
      "Logistics & Transportation Management",
    ],
    image: detailIndustryImage,
  },
  {
    id: "transformation",
    label: "Digital Transformation",
    title: "Digital Transformation",
    description:
      "Business transforming digital solutions that enhance experiences and optimize operations.",
    items: [
      "Small & Medium Business (SMB) Digitalization",
      "Process Automation & Workflow Optimization",
      "Appointment Booking & Scheduling Systems",
      "Legacy System Modernization",
      "API Integration & Microservices",
      "Data Driven Decision Making Systems",
    ],
    image: detailTransformationImage,
  },
];

const contactButtons = [
  {
    label: "Instagram",
    href: "https://instagram.com/kypchumbaa?igshid=MzRlODBiNWFlZA==",
    icon: instagramIcon,
    target: "_blank",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?text=Hello%20Heykens%20Systems%2C%20I%20would%20like%20to%20discuss%20my%20project.",
    icon: whatsappIcon,
    target: "_blank",
  },
  {
    label: "Email",
    href: "mailto:chumbakenny@gmail.com",
    icon: emailIcon,
    target: "_blank",
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
          <h1>Welcome to Heykens Systems</h1>
          <p>
            We specialize in digitalizing businesses and help them connect with more clients through
            technology.
          </p>
          <p>Stop missing out on more clients contact us today.</p>
        </section>

        <section ref={statsRef} className="stats-strip" aria-label="Heykens Systems highlights">
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
            <div className="process-track process-list">
              {process.map((item) => (
                <article key={item.step} className="process-row">
                  <div className="process-image-wrap">
                    <img src={item.image} alt="" className="process-image" />
                  </div>
                  <div className="process-copy">
                    <span className="process-step">{item.step}</span>
                    <span className="process-text">{item.text}</span>
                  </div>
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
              <h2>Explore the kind of digital systems we can plan, build and scale with you</h2>
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
