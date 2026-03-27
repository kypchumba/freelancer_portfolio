<script setup>
import { onMounted, ref } from "vue";

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
  },
  {
    title: "Custom Business Platforms",
    text: "Internal tools, admin panels and client portals that streamline operations without looking like an afterthought.",
  },
  {
    title: "Product MVPs",
    text: "Lean, modern web apps that help founders validate ideas quickly with strong UX and clean frontend architecture.",
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

const techStack = [
  "Vue.js",
  "Vite",
  "Component-based UI",
  "Responsive layouts",
  "Frontend architecture",
  "Performance-minded delivery",
];

const backendStack = [
  "Flask",
  "FastAPI",
  "SQLite",
  "MongoDB",
  "REST API design",
  "Backend integration",
];

const statsRef = ref(null);
const happyClients = ref(0);
const projectsDelivered = ref(0);
let hasAnimated = false;

function animateValue(targetRef, endValue, duration = 1400) {
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    targetRef.value = Math.floor(progress * endValue);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateValue(happyClients, 30);
        animateValue(projectsDelivered, 100, 1700);
        observer.disconnect();
      }
    },
    { threshold: 0.45 }
  );

  if (statsRef.value) {
    observer.observe(statsRef.value);
  }
});
</script>

<template>
  <div class="landing-shell">
    <header class="landing-header">
      <div class="logo-mark">KC</div>
    </header>

    <nav class="section-dashboard landing-dashboard" aria-label="Section navigation">
      <a href="#faq">FAQ</a>
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#frontend">Frontend</a>
      <a href="#backend">Backend</a>
      <a href="#contact">Contact</a>
    </nav>

    <main class="landing-main">
      <section class="landing-copy">
        <h1>Welcome to Kencore Systems</h1>
        <p>
          We specialize in digitalizing businesses and help them connect with more clients through
          technology.
        </p>
        <p>Stop missing out on more clients contact us today.</p>
      </section>

      <section ref="statsRef" class="stats-strip" aria-label="Kencore Systems highlights">
        <article class="stat-item">
          <strong>{{ happyClients }}+</strong>
          <span>Happy clients</span>
        </article>
        <article class="stat-item">
          <strong>{{ projectsDelivered }}+</strong>
          <span>Projects delivered</span>
        </article>
      </section>

      <section class="content-stack">
        <section id="services" class="section-card">
          <div class="section-heading">
            <p class="eyebrow">Services</p>
            <h2>Solutions that help businesses present better and convert better</h2>
          </div>
          <div class="grid-cards">
            <article v-for="service in services" :key="service.title" class="info-card">
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
            </article>
          </div>
        </section>

        <section id="process" class="section-card process-flow">
          <div class="section-heading">
            <p class="eyebrow">Process</p>
            <h2>A straightforward workflow from first brief to long-term support</h2>
          </div>
          <div class="process-track">
            <article v-for="item in process" :key="item.step" class="process-box">
              <span class="process-step">{{ item.step }}</span>
              <span class="process-text">{{ item.text }}</span>
            </article>
          </div>
        </section>

        <section id="frontend" class="section-card">
          <div class="section-heading">
            <p class="eyebrow">Frontend</p>
            <h2>Frontend tools used to build fast and maintainable experiences</h2>
          </div>
          <div class="stack-list">
            <span v-for="item in techStack" :key="item">{{ item }}</span>
          </div>
        </section>

        <section id="backend" class="section-card">
          <div class="section-heading">
            <p class="eyebrow">Backend</p>
            <h2>Backend support for APIs, logic and modern data storage</h2>
          </div>
          <div class="stack-list">
            <span v-for="item in backendStack" :key="item">{{ item }}</span>
          </div>
        </section>

        <section id="faq" class="section-card faq-panel">
          <div class="section-heading">
            <p class="eyebrow">FAQ</p>
            <h2>Quick answers before we build together</h2>
          </div>
          <div class="faq-list">
            <details v-for="item in faqs" :key="item.question" class="faq-item">
              <summary class="faq-question">
                <span>{{ item.question }}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </summary>
              <p class="faq-answer">{{ item.answer }}</p>
            </details>
          </div>
        </section>

        <section id="contact" class="section-card contact-card">
          <div class="section-heading">
            <p class="eyebrow">Contact</p>
            <h2>Need a better web presence for your business?</h2>
          </div>
          <p class="contact-copy">
            Let&apos;s turn your offer into a website or web app that gives clients confidence from
            the first impression.
          </p>
          <a class="contact-link" href="mailto:chumbakenny@gmail.com">chumbakenny@gmail.com</a>
        </section>
      </section>
    </main>
  </div>
</template>
