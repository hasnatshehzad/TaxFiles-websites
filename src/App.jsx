import { useState } from 'react'
import './App.css'
import logoImage from './um_co_cma_log1.jpg'

const navItems = ['Services', 'Pricing', 'Resources', 'About']

const stats = [
  { value: '50K+', label: 'Returns processed' },
  { value: '99.6%', label: 'Client satisfaction' },
  { value: '24/7', label: 'Support & guidance' },
  { value: '5.0/5', label: 'Google review score' },
]

const services = [
  {
    icon: '💼',
    title: 'Individual Tax Filing',
    text: 'Fast, compliant, and accurate tax return filing for salaried professionals and business owners.',
    detail: 'From 1-page income returns to complex deductions.',
  },
  {
    icon: '🏢',
    title: 'NTN Registration',
    text: 'Complete National Tax Number registration and setup support for new and existing businesses.',
    detail: 'Smooth onboarding with expert review before submission.',
  },
  {
    icon: '📊',
    title: 'Business Tax Services',
    text: 'Accounting and compliance support designed to help companies stay tax-ready year-round.',
    detail: 'GST, withholding, payroll, and annual filing support.',
  },
  {
    icon: '🛡️',
    title: 'Tax Advisory',
    text: 'Personalized guidance to reduce risk, improve planning, and keep your finances organized.',
    detail: 'Advice for growth, deductions, and audit preparation.',
  },
]

const steps = [
  { number: '01', title: 'Tell us about your case', text: 'Share your tax situation and documents through a quick intake form.' },
  { number: '02', title: 'Our experts review', text: 'We validate your information, identify deductions, and prepare the right filing path.' },
  { number: '03', title: 'Submit and track', text: 'Your filing is reviewed and submitted with real-time status updates and support.' },
]

const reasons = [
  'Experienced tax professionals and filing specialists',
  'Plain-language guidance for every step of the process',
  'Secure document handling and compliance-first workflow',
  'Affordable packages tailored to your filing needs',
]

const testimonials = [
  {
    quote: 'The team guided me through the requirements as a first-time filer and made the entire process smooth and stress-free.',
    name: 'Hamza Reza',
    role: 'Befiler client · 8 months ago',
  },
  {
    quote: 'Samrah was professional, patient, and responsive throughout my tax filing. Everything was submitted on time.',
    name: 'Amir Hamza',
    role: 'Befiler client · 8 months ago',
  },
  {
    quote: 'The support team understood my issue quickly and resolved it within a day. I truly appreciated their efficiency.',
    name: 'Sehrish Alvi',
    role: 'Befiler client · 8 months ago',
  },
]

const faqs = [
  { question: 'What is included in your tax filing service?', answer: 'We handle preparation, compliance review, supporting documentation guidance, and submission support based on your profile.' },
  { question: 'Do you support NTN registration?', answer: 'Yes. We assist with new NTN registration, profile setup, documentation review, and follow-up guidance.' },
  { question: 'How long does processing take?', answer: 'Most filings are completed within a few business days, depending on the complexity and document readiness.' },
  { question: 'Can I get advice before filing?', answer: 'Absolutely. Our advisors can walk you through eligibility, deductions, and the best filing pathway for your situation.' },
]

const pageDetails = {
  Services: {
    label: 'Services',
    title: 'Tax support for every stage of your financial journey.',
    intro: 'Choose the service that matches your needs and get practical guidance from registration through filing and compliance.',
    items: services.map((service) => ({ title: service.title, text: service.text, detail: service.detail })),
  },
  Pricing: {
    label: 'Pricing',
    title: 'Simple plans with clear next steps.',
    intro: 'Use these reference packages to choose the right level of filing support. Final pricing depends on your documents and case complexity.',
    items: [
      { title: 'Essential Filing', text: 'Standard income tax return preparation and filing support.', detail: 'From PKR 3,900 · typical processing: 48 hours to 5 working days' },
      { title: 'Priority Filing', text: 'Faster handling for urgent and time-sensitive submissions.', detail: 'From PKR 5,500 · typical processing: 24 to 48 hours' },
      { title: 'Premium Consultant', text: 'One-to-one support from a senior tax consultant.', detail: 'From PKR 14,500 · consultation and return review included' },
    ],
  },
  Resources: {
    label: 'Resources',
    title: 'Useful tools before you file.',
    intro: 'Understand the process, estimate your tax position, and get answers to common filing questions.',
    items: [
      { title: 'Salary Tax Calculator', text: 'Estimate annual tax from your monthly salary and tax year.', detail: 'Use an estimate to prepare questions for your consultant.' },
      { title: 'Filing Checklist', text: 'Gather salary slips, bank statements, withholding certificates, and expense records.', detail: 'Complete documents help the review move faster.' },
      { title: 'Frequently Asked Questions', text: 'Find plain-language answers about NTN registration, returns, deadlines, and compliance.', detail: 'Speak with an advisor when your case needs a tailored answer.' },
    ],
  },
  About: {
    label: 'About',
    title: 'A clearer way to manage tax and compliance.',
    intro: 'Inspired by the service model described on Befiler.com, this page brings filing, registration, review, and support into one simple experience.',
    items: [
      { title: 'Compliance-first', text: 'Every filing starts with a careful review of your information and supporting documents.', detail: 'Clear records reduce surprises later.' },
      { title: 'Human guidance', text: 'Get understandable explanations instead of being left alone with complex forms.', detail: 'Ask questions at each step.' },
      { title: 'Secure handling', text: 'Your financial information should be handled privately and responsibly.', detail: 'Share only the documents needed for your case.' },
    ],
  },
}

function DetailPage({ page, onBack, onAction }) {
  const detail = pageDetails[page] || pageDetails.Services

  return (
    <section className="detail-page">
      <div className="container detail-wrap">
        <button type="button" className="back-button" onClick={onBack}>← Back to home</button>
        <span className="eyebrow dark">{detail.label}</span>
        <h1>{detail.title}</h1>
        <p className="detail-intro">{detail.intro}</p>

        <div className="detail-grid">
          {detail.items.map((item) => (
            <article key={item.title} className="detail-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.detail}</span>
              <button type="button" className="text-link detail-action" onClick={() => onAction(item.title)}>
                {page === 'Pricing' ? 'Choose this plan' : 'Get help with this'} →
              </button>
            </article>
          ))}
        </div>

        <div className="detail-cta">
          <div>
            <span className="eyebrow dark">Need a hand?</span>
            <h2>Talk through your situation with a tax specialist.</h2>
          </div>
          <button type="button" className="primary-btn" onClick={() => onAction('Consultation')}>
            Book a consultation
          </button>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [activeNav, setActiveNav] = useState('Services')
  const [activeService, setActiveService] = useState('Individual Tax Filing')
  const [activeAction, setActiveAction] = useState('Get started')
  const [activePage, setActivePage] = useState('home')

  const navigateTo = (page) => {
    setActiveNav(page)
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAction = (action) => {
    setActiveAction(action)
    if (services.some((service) => service.title === action)) {
      setActiveService(action)
    }
    navigateTo(action === 'Individual Tax Filing' ? 'Services' : 'Pricing')
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
            <button type="button" className="brand" aria-label="UM&CO brand logo" onClick={() => navigateTo('home')}>
              <img className="brand-logo" src={logoImage} alt="UM&CO logo" />
            <span className="brand-text">UM&CO</span>
            </button>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`nav-link ${activeNav === item ? 'is-active' : ''}`}
                onClick={() => navigateTo(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <button type="button" className="nav-button is-active" onClick={() => handleAction('Consultation')}>
            Book a consultation
          </button>
        </div>
      </header>

      <main>
        {activePage === 'home' ? (
          <>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Trusted Tax & Compliance Partner</div>
              <h1>Income tax filing and NTN registration made simple.</h1>
              <p>
                Help individuals and businesses file accurately, stay compliant, and unlock tax-ready growth with expert guidance.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className={`primary-btn ${activeAction === 'Get started' ? 'is-active' : ''}`}
                  onClick={() => handleAction('Get started')}
                >
                  Get started
                </button>
                <button
                  type="button"
                  className={`secondary-btn ${activeAction === 'Talk to an expert' ? 'is-active' : ''}`}
                  onClick={() => handleAction('Talk to an expert')}
                >
                  Talk to an expert
                </button>
              </div>

              <div className="mini-trust">
                <span>✔ Secure & confidential</span>
                <span>✔ Fast turnaround</span>
              </div>
            </div>

            <div className="hero-panel" aria-label="Tax filing dashboard preview">
              <div className="panel-card card-main">
                <div className="card-topline">
                  <span className="dot green"></span>
                  <span>Tax filing status</span>
                </div>
                <h2>Return Ready</h2>
                <div className="progress-row">
                  <div className="progress-track">
                    <span className="progress-bar"></span>
                  </div>
                  <strong>92%</strong>
                </div>
                <ul className="check-list">
                  <li>Income review complete</li>
                  <li>NTN profile verified</li>
                  <li>Documents submitted</li>
                </ul>
              </div>

              <div className="floating-pill pill-one">
                <span className="pill-icon">✓</span>
                <div>
                  <strong>Filing Approved</strong>
                  <small>Within 48 hours</small>
                </div>
              </div>

              <div className="floating-pill pill-two">
                <span className="pill-icon alt">%</span>
                <div>
                  <strong>Tax Saved</strong>
                  <small>Up to 25%</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-box">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <div className="container section-header">
            <div>
              <span className="eyebrow dark">Our services</span>
              <h2>Tax solutions built for both individuals and businesses.</h2>
            </div>
            <button type="button" className="text-link link-button" onClick={() => navigateTo('Services')}>Explore all services</button>
          </div>

          <div className="container services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card ${activeService === service.title ? 'is-active' : ''}`}
                onClick={() => handleAction(service.title)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="container process-wrap">
            <div className="section-header left-align">
              <span className="eyebrow dark">How it works</span>
              <h2>A simple process that keeps compliance stress low.</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <div key={step.number} className="step-card">
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-us-section">
          <div className="container why-grid">
            <div className="why-copy">
              <span className="eyebrow dark">Why choose us</span>
              <h2>Clear guidance, careful review, and support that feels personal.</h2>
              <p>
                Whether you need annual filing help or a new NTN registration, our service is designed to reduce confusion and keep your records aligned with compliance requirements.
              </p>
              <ul className="feature-list">
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <div className="insight-box">
              <div className="insight-top">
                <span className="insight-tag">Compliance snapshot</span>
                <strong>Q2 Review</strong>
              </div>
              <div className="insight-stat">
                <span>Return health</span>
                <strong>Excellent</strong>
              </div>
              <div className="mini-bars" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="insight-bottom">
                <small>Documents verified</small>
                <strong>12/12</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="container section-header center-align">
            <span className="eyebrow dark">Client feedback</span>
            <h2>People trust us to handle important tax decisions.</h2>
            <a
              className="google-review-link"
              href="https://www.befiler.com/"
              target="_blank"
              rel="noreferrer"
            >
              ★ 5.0 reviews on Befiler · View all reviews
            </a>
          </div>

          <div className="container testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars" aria-label="5 stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-person">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-wrap">
            <div className="section-header left-align">
              <span className="eyebrow dark">FAQ</span>
              <h2>Common questions before filing.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-box">
            <div>
              <span className="eyebrow dark">Ready to file?</span>
              <h2>Let our tax specialists handle the details.</h2>
            </div>
            <button type="button" className="primary-btn" onClick={() => handleAction('Consultation')}>Schedule a call</button>
          </div>
        </section>
          </>
        ) : (
          <DetailPage page={activePage} onBack={() => navigateTo('home')} onAction={handleAction} />
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <button type="button" className="brand footer-brand" aria-label="UM&CO footer brand" onClick={() => navigateTo('home')}>
              <span className="brand-mark">B</span>
              <span className="brand-text">UM&CO</span>
            </button>
            <p>Helping individuals and businesses file with confidence.</p>
          </div>

          <div className="footer-links">
            <button type="button" onClick={() => handleAction('Individual Tax Filing')}>Income Tax Filing</button>
            <button type="button" onClick={() => handleAction('NTN Registration')}>NTN Registration</button>
            <button type="button" onClick={() => handleAction('Tax Advisory')}>Tax Advisory</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
