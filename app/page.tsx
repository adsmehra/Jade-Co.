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
        <div className="availability"><span className="availability-dot" /> AVAILABLE FOR NOVEMBER PROJECTS</div>

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
    </main>
  );
}
