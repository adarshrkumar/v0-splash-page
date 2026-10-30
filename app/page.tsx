'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Camera,
  Code2,
  Globe2,
  Mail,
  Menu,
  Music2,
  Palette,
  X,
} from 'lucide-react'

const interests = [
  { label: 'Computer science & coding', icon: Code2, color: 'coral' },
  { label: 'Photography', icon: Camera, color: 'blue' },
  { label: 'Music', icon: Music2, color: 'yellow' },
  { label: 'History & geography', icon: Globe2, color: 'green' },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Astro', 'Node.js', 'Python', 'Git']

const links = [
  { label: 'Website', href: 'https://adarshrkumar.dev/', icon: Globe2 },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adarshrkumar/', icon: ArrowUpRight },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeInterest, setActiveInterest] = useState(0)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">ARK<span>.</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>What I do</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Hello, I&apos;m Adarsh R. Kumar</p>
          <h1>I make the<br /><em>web feel human.</em></h1>
          <p className="hero-description">An undergraduate sophomore studying computer science, building for the web, and making photographs in Santa Clara. Class of 2029.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">Explore my world <ArrowUpRight size={17} /></a>
            <a href="#about" className="text-link">A little more about me <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract portrait illustration" role="img">
          <div className="art-grid" />
          <div className="art-sun" />
          <div className="art-frame"><div className="art-person"><div className="art-head" /><div className="art-body" /></div></div>
          <p className="art-caption">curious by nature<br /><span>always building</span></p>
          <div className="art-stamp">ARK<br /><span>AK</span></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">DEVELOPER <span>✳</span> PHOTOGRAPHER <span>✳</span> MUSIC LOVER <span>✳</span> HISTORY NERD <span>✳</span> DEVELOPER <span>✳</span> PHOTOGRAPHER <span>✳</span></div></div>

      <section className="about-section section" id="about">
        <div className="section-label">01 / About</div>
        <div className="about-content"><h2>Not just a<br /><span>screen person.</span></h2><div className="about-text"><p>I&apos;m fascinated by the intersection of logic and feeling — where clean code meets a good story, and where a useful product still has a little soul.</p><p>When I&apos;m not shipping websites, you&apos;ll probably find me chasing light with a camera, listening to a new record, or getting lost in a map.</p><a href="#contact" className="inline-arrow">More about me <ArrowUpRight size={16} /></a></div></div>
      </section>

      <section className="work-section section" id="work">
        <div className="section-label">02 / The good stuff</div>
        <div className="work-grid"><div><h2>Things I<br /><span>care about.</span></h2><p className="section-intro">A few of the rabbit holes I happily disappear into.</p></div><div className="interest-list">{interests.map(({ label, icon: Icon, color }, index) => <button key={label} className={activeInterest === index ? `interest-card active ${color}` : `interest-card ${color}`} onClick={() => setActiveInterest(index)}><span className="interest-number">0{index + 1}</span><Icon size={24} strokeWidth={1.7} /><span>{label}</span><ArrowUpRight className="interest-arrow" size={18} /></button>)}</div></div>
      </section>

      <section className="skills-section section"><div className="skills-heading"><div className="section-label">03 / In the toolkit</div><Palette size={23} /></div><div className="skills-row">{skills.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}</div></section>

      <footer className="footer" id="contact"><div><p className="eyebrow"><span className="eyebrow-dot" /> Have an idea?</p><h2>Let&apos;s make<br /><em>something nice.</em></h2></div><div className="footer-right"><a href="mailto:hello@example.com" className="footer-email">hello@example.com <ArrowUpRight size={18} /></a><div className="social-links">{links.map(({ label, href, icon: Icon }) => <a href={href} key={label} aria-label={label}><Icon size={18} /></a>)}</div><p className="copyright">© 2026 Adarsh R. Kumar<br />AK / ARK · Made with care & curiosity.</p></div></footer>
    </main>
  )
}
