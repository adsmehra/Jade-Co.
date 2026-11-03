import { ArrowUpRight } from "lucide-react";
import InquiryForm from "./InquiryForm";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Jade and Co home">
          <img src="/logo.png" alt="JADE & CO." className="logo-image" />
          <span>JADE <b>&</b> CO.</span>
        </a>
        <div className="nav-center"><span className="status-dot" /> INDEPENDENT CREATIVE STUDIO</div>
        <a className="nav-cta" href="#inquire">
          INQUIRE <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
      </nav>

      <section className="hero">
        <div className="availability"><span className="availability-dot" /> AVAILABLE FOR PROJECTS</div>

        <div className="hero-copy">
          <p className="eyebrow">GOOD DESIGN. GOOD PEOPLE. GOOD WORK.</p>
          <h1>A design team,<br /><span>you can trust.</span></h1>
          <p className="intro">
            We craft brands, interfaces, and digital experiences that earn loyalty.
            Not just attention — real, lasting trust with the people who matter most to your business.
          </p>
          <a className="primary-button" href="#inquire">
            <span>Inquire for Projects</span>
            <span className="button-icon"><ArrowUpRight size={18} /></span>
          </a>
          <div className="hero-footnote"><span>STRATEGY WITH SOUL.</span><span>DESIGN THAT CONVERTS.</span></div>
        </div>

        <div className="visual-stage" aria-label="Abstract three-dimensional Jade and Co design composition">
          <div className="stage-grid" />
          <div className="halo halo-one" />
          <div className="halo halo-two" />
          <div className="orb-shadow" />
          <div className="orb"><div className="orb-shine" /><div className="orb-ridge" /></div>
          <div className="glass-card card-top">
            <span className="mini-label">JADE / 001</span>
            <span className="card-star">✳</span>
          </div>
          <div className="glass-card card-bottom">
            <span className="card-index">01 — 01</span>
            <span className="card-caption">Ideas made<br />tangible.</span>
            <ArrowUpRight className="card-arrow" size={22} strokeWidth={1.3} />
          </div>
          <div className="orbit-label orbit-label-a">FORM FOLLOWS FEELING</div>
          <div className="orbit-label orbit-label-b">BUILT TO MEAN SOMETHING</div>
          <div className="stage-cross cross-one">+</div><div className="stage-cross cross-two">+</div>
        </div>
        <div className="scroll-cue"><span className="scroll-line" /> SCROLL TO INQUIRE</div>
      </section>

      <section className="inquiry-section" id="inquire">
        <div className="inquiry-intro">
          <p className="section-tag"><span>01</span> / NEW PROJECTS</p>
          <h2>Inquire for<br /><em>projects.</em></h2>
          <p className="inquiry-description">
            Have something good in mind? Tell us a little about yourself and we’ll be in touch.
          </p>
          <div className="inquiry-note"><span className="availability-dot" /> A GOOD PROJECT STARTS WITH A HELLO.</div>
        </div>
        <InquiryForm />
      </section>

      <footer className="footer">
        <a className="wordmark footer-brand" href="#top">
          <img src="/logo.png" alt="JADE & CO." className="logo-image" />
          <span>JADE <b>&</b> CO.</span>
        </a>
        <span className="copyright">ALL RIGHTS RESERVED BY JADE & CO. — 2026</span>
        <a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>

<a
  href="https://wa.me/919113136267?text=Hi%20JADE%20%26%20CO.%2C%20I%27m%20interested%20in%20your%20services."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact JADE & CO. on WhatsApp"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width="25"
  height="25"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M16.04 2.67A13.27 13.27 0 0 0 4.63 22.7L2.67 29.33l6.8-1.92a13.3 13.3 0 1 0 6.57-24.74Zm0 24.1a11 11 0 0 1-5.6-1.53l-.4-.24-4.04 1.14 1.17-3.93-.26-.41a10.98 10.98 0 1 1 9.13 4.97Zm6.03-8.23c-.33-.16-1.96-.97-2.26-1.08-.3-.11-.52-.16-.74.16-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.64-.98-.88-1.64-1.96-1.83-2.29-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z" />
</svg>
  <span className="whatsapp-text">WhatsApp us</span>
</a>

    </main>
  );
}
