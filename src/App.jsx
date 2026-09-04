import { useState } from 'react'
import './App.css'
import logoImage from './assets/2.png'

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
    quote: 'Excellent services received. Recommended for income tax filing & tax services.',
    name: 'Hasnat Sherzad',
    initials: 'HS',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVbuE6XZXescQ4_R3lRs9EzzCpS8ZNBjhF9zsufRFbilgIMcUY9=w96-h96-p-rp-mo-br100',
    role: 'Google review · a week ago',
  },
  {
    quote: 'I had an excellent experience working with UM&CO. He helped me save more than 50% of my taxes and clearly explained where I was overpaying, in a way that was very easy to understand. He was always available whenever I needed guidance and handled everything with professionalism and patience.',
    name: 'Sibtain Shah',
    initials: 'SS',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocI_txwrsD1-TGKilS3vYhSM7sRznw4HN0jFPbDsHR_EsdfOkQ=w96-h96-p-rp-mo-br100',
    role: 'Google review · 8 months ago',
  },
  {
    quote: 'I had an excellent experience working with this firm. Their team is highly professional, knowledgeable, and attentive to detail. They handled my financial matters with great accuracy and ensured full compliance with all regulatory requirements.',
    name: 'Azhar Uddin',
    initials: 'AU',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjWiOVf5joV-IMyAP8gk0DPtPuv0ib_SNB8pFlbUl6XkFCwliVlS=w96-h96-p-rp-mo-br100',
    role: 'Google review · 4 months ago',
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
    intro: 'Choose the service that matches your needs and get practical guidance from registration through filing, business compliance, and tax planning.',
    items: [
      ...services.map((service) => ({ title: service.title, text: service.text, detail: service.detail })),
      { title: 'Sales Tax Registration', text: 'Register your business for sales tax and keep your records aligned with filing requirements.', detail: 'Registration, profile setup, and return guidance.' },
      { title: 'Company Registration', text: 'Set up your company with practical support for registration documents and compliance obligations.', detail: 'A clear start for new and growing businesses.' },
      { title: 'Intellectual Property', text: 'Protect your brand, name, and original work with guidance through the relevant registration process.', detail: 'Support for trademarks and business assets.' },
      { title: 'USA LLC & Tax Filing', text: 'Get support for USA LLC setup and related tax filing needs when you operate across borders.', detail: 'Guidance for overseas founders and businesses.' },
    ],
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
    intro: 'UM&CO brings tax filing, registration, review, and financial support into one clear experience for individuals, entrepreneurs, and growing businesses.',
    items: [
      { title: 'Compliance-first', text: 'Every filing starts with a careful review of your information and supporting documents.', detail: 'Clear records reduce surprises later.' },
      { title: 'Human guidance', text: 'Get understandable explanations instead of being left alone with complex forms.', detail: 'Ask questions at each step.' },
      { title: 'Secure handling', text: 'Your financial information should be handled privately and responsibly.', detail: 'Share only the documents needed for your case.' },
    ],
  },
}

const planDetails = {
  'Essential Filing': {
    price: 'PKR 3,900',
    summary: 'Best for regular tax return filing and routine cases.',
    timing: '48 hours to 5 working days',
    features: [
      'Prepared and filed by our tax team',
      'Ideal for salaried individuals and routine cases',
      'Timeline starts after payment and complete documents',
      'FBR-compliant review before submission',
    ],
  },
  'Priority Filing': {
    price: 'PKR 5,500',
    summary: 'For urgent and time-sensitive tax submissions.',
    timing: '24 to 48 hours',
    features: [
      'Priority handling by the tax team',
      'Faster turnaround for urgent submissions',
      'Best for clients with a close filing deadline',
      'Processing depends on timely document submission',
    ],
  },
  'Premium Consultant': {
    price: 'PKR 14,500',
    summary: 'One-on-one support from a senior tax consultant.',
    timing: 'Scheduled consultation and return review',
    features: [
      'Zoom or in-person consultation',
      'Personal guidance from a senior consultant',
      'Review and improvement of your tax return',
      'Better understanding of your financial position',
    ],
  },
}

function PlanDetailPage({ plan, onBack, onAction }) {
  const detail = planDetails[plan] || planDetails['Essential Filing']

  return (
    <section className="plan-page">
      <div className="container plan-wrap">
        <button type="button" className="back-button" onClick={onBack}>← Back to pricing</button>
        <div className="plan-heading">
          <div>
            <span className="eyebrow dark">Selected plan</span>
            <h1>{plan}</h1>
            <p className="detail-intro">{detail.summary} Our team follows the same simple flow: create your account, provide your income information, review your return, and complete the submission.</p>
          </div>
          <div className="plan-price">
            <span>Starting from</span>
            <strong>{detail.price}</strong>
            <small>{detail.timing}</small>
          </div>
        </div>

        <div className="plan-content">
          <div className="plan-panel">
            <span className="eyebrow dark">What is included</span>
            <h2>A clear path from documents to filing.</h2>
            <ul className="plan-features">
              {detail.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <div className="plan-steps">
            <article><span>01</span><div><h3>Create your account</h3><p>Sign up and verify your mobile number to begin securely.</p></div></article>
            <article><span>02</span><div><h3>Provide information</h3><p>Answer simple questions about your income and share the required documents.</p></div></article>
            <article><span>03</span><div><h3>Review and file</h3><p>Our tax team prepares your return for review and approval before submission.</p></div></article>
          </div>
        </div>

        <div className="detail-cta">
          <div><span className="eyebrow dark">Ready to begin?</span><h2>Start your {plan.toLowerCase()} today.</h2></div>
          <button type="button" className="primary-btn is-active" onClick={() => onAction('Consultation')}>Get started</button>
        </div>
      </div>
    </section>
  )
}

function SignInPage({ onBack }) {
  const [submitted, setSubmitted] = useState(false)
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)

  const switchMode = () => {
    setIsCreatingAccount((currentMode) => !currentMode)
    setSubmitted(false)
  }

  return (
    <section className="signin-page">
      <div className="signin-layout">
        <button type="button" className="back-button signin-back-button" onClick={onBack}>← Back to home</button>
        <div className="signin-card">
          <span className="eyebrow dark">Client portal</span>
          <h1>{isCreatingAccount ? 'Create your account.' : 'Welcome back.'}</h1>
          <p>{isCreatingAccount ? 'Create a secure account to manage your filing and documents.' : 'Sign in to manage your filing, upload documents, and track your return status.'}</p>
          {submitted ? (
            <div className="signin-success">{isCreatingAccount ? 'Your account request is ready. A consultant will help you complete setup.' : 'Your sign-in request is ready. Connect this form to your client portal when authentication is enabled.'}</div>
          ) : (
            <form className="signin-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              {isCreatingAccount && <label>Full name<input required type="text" placeholder="Your full name" /></label>}
              <label>Email address<input required type="email" placeholder="you@example.com" /></label>
              <label>Password<input required type="password" placeholder="Enter your password" /></label>
              {!isCreatingAccount && <div className="signin-options"><label><input type="checkbox" /> Remember me</label><button type="button">Forgot password?</button></div>}
              <button type="submit" className="primary-btn signin-submit">{isCreatingAccount ? 'Create account' : 'Sign in'}</button>
            </form>
          )}
          <div className="signin-account-prompt">
            <span>{isCreatingAccount ? 'Already have an account?' : "Don't have an account?"}</span>
            <button type="button" onClick={switchMode}>{isCreatingAccount ? 'Sign in' : 'Create an account'}</button>
          </div>
          <small className="signin-note">Your consultant can help you complete your secure client portal setup.</small>
        </div>
      </div>
    </section>
  )
}

function ConsultationModal({ plan, onClose }) {
  const [callType, setCallType] = useState('scheduled')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="consultation-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
        <div className="consultation-header">
          <div className="consultation-title-wrap">
            <div className="consultation-icon" aria-hidden="true">♧</div>
            <div>
              <h2 id="consultation-title">Book a Consultation</h2>
              <p>Fill in your details and a senior tax consultant will reach out shortly.</p>
            </div>
          </div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close consultation form">×</button>
        </div>

        {submitted ? (
          <div className="form-success">
            <span className="success-check">✓</span>
            <h3>Request received</h3>
            <p>Thank you. Our tax consultant will contact you shortly about your {plan.toLowerCase()}.</p>
            <button type="button" className="primary-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="consultation-body">
              <div className="contact-column">
                <span className="form-section-title">Contact information</span>
                <div className="form-grid">
                  <label>Full Name <em>*</em><input required type="text" placeholder="Your full name" /></label>
                  <label>Email Address <em>*</em><input required type="email" placeholder="your@email.com" /></label>
                  <label>Mobile Number <em>*</em><input required type="tel" placeholder="03xx-xxxxxxx" /></label>
                  <label>CNIC Number<input type="text" placeholder="xxxxx-xxxxxxx-x" /></label>
                </div>
                <fieldset className="call-type-field">
                  <legend>Preferred Call Time</legend>
                  <div className="call-type-options">
                    <label className={callType === 'scheduled' ? 'is-selected' : ''}><input type="radio" name="callType" value="scheduled" checked={callType === 'scheduled'} onChange={() => setCallType('scheduled')} />◉ &nbsp;Schedule a Call</label>
                    <label className={callType === 'urgent' ? 'is-selected' : ''}><input type="radio" name="callType" value="urgent" checked={callType === 'urgent'} onChange={() => setCallType('urgent')} />◯ &nbsp;Urgent Call</label>
                  </div>
                </fieldset>
                <label className="date-field">Date &amp; Time<input type="datetime-local" /></label>
                <p className="form-note">Daytime slots (9 AM - 6 PM, Mon-Fri) receive the fastest response.</p>
              </div>
              <div className="additional-column">
                <label>What do you need help with?<textarea defaultValue={`I am interested in the ${plan} plan. `} placeholder="E.g. I have salary + rental income, need help filing my tax return..." /></label>
              </div>
            </div>
            <div className="consultation-footer">
              <button type="button" className="discard-button" onClick={onClose}>Discard</button>
              <button type="submit" className="send-button">⌁ &nbsp;Send Request</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function DetailPage({ page, onBack, onAction }) {
  const detail = pageDetails[page] || pageDetails.Services

  return (
    <section className="detail-page">
      <div className="container detail-page-top">
        <button type="button" className="back-button detail-back-button" onClick={onBack}>← Back to home</button>
      </div>
      <div className="container detail-wrap">
        <span className="eyebrow dark">{detail.label}</span>
        <h1>{detail.title}</h1>
        <p className="detail-intro">{detail.intro}</p>

        <div className="detail-grid">
          {detail.items.map((item) => (
            <article key={item.title} className="detail-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.detail}</span>
              <button type="button" className={`text-link detail-action ${page === 'Pricing' ? 'plan-select-button' : ''}`} onClick={() => onAction(item.title, page)}>
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
  const [selectedPlan, setSelectedPlan] = useState('Essential Filing')
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [monthlySalary, setMonthlySalary] = useState(100000)
  const [taxYear, setTaxYear] = useState('2026')

  const annualSalary = Math.max(0, Number(monthlySalary) || 0) * 12
  const annualTax = annualSalary <= 600000
    ? 0
    : annualSalary <= 1200000
      ? (annualSalary - 600000) * 0.025
      : 15000 + (annualSalary - 1200000) * 0.125
  const monthlyTax = annualTax / 12
  const salaryAfterTax = Math.max(0, Number(monthlySalary) - monthlyTax)
  const formatCurrency = (amount) => `PKR ${Math.round(amount).toLocaleString('en-PK')}`

  const navigateTo = (page) => {
    setActiveNav(page)
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToHomeSection = (sectionId) => {
    setActiveNav('Services')
    setActivePage('home')
    window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }

  const handleAction = (action, sourcePage) => {
    setActiveAction(action)
    if (sourcePage === 'Pricing' && planDetails[action]) {
      setSelectedPlan(action)
      setActiveNav('Pricing')
      setActivePage('plan')
      setConsultationOpen(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (services.some((service) => service.title === action)) {
      setActiveService(action)
      setActiveNav('Services')
      setActivePage('Services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (action === 'Consultation') {
      setConsultationOpen(true)
      return
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

          <div className="nav-actions">
            <button type="button" className="sign-in-button" onClick={() => navigateTo('signin')}>Sign in</button>
            <button type="button" className="nav-button is-active" onClick={() => handleAction('Consultation')}>
              Book a consultation
            </button>
          </div>
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

        <section id="tax-calculator" className="calculator-section">
          <div className="container calculator-wrap">
            <div className="calculator-copy">
              <span className="eyebrow dark">Calculate your taxes</span>
              <h2>Estimate your salary tax in seconds.</h2>
              <p>Enter your monthly salary to get a quick view of annual income, estimated tax, and take-home pay.</p>
              <span className="calculator-note">This is an estimate. Actual tax may vary based on deductions, allowances, and your filing profile.</span>
            </div>
            <div className="calculator-card">
              <div className="calculator-controls">
                <label>Monthly Salary (PKR)
                  <input type="number" min="0" step="1000" value={monthlySalary} onChange={(event) => setMonthlySalary(event.target.value)} />
                </label>
                <label>Tax Year
                  <select value={taxYear} onChange={(event) => setTaxYear(event.target.value)}>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                </label>
              </div>
              <div className="calculator-results">
                <div><span>Annual salary</span><strong>{formatCurrency(annualSalary)}</strong></div>
                <div><span>Estimated monthly tax</span><strong>{formatCurrency(monthlyTax)}</strong></div>
                <div className="result-highlight"><span>Salary after tax</span><strong>{formatCurrency(salaryAfterTax)}</strong></div>
              </div>
              <p className="calculator-year-note">Estimate for tax year {taxYear} · Based on salary income only</p>
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
              href="https://www.google.com/search?client=safari&hl=en-us&q=UM%26CO+Karachi"
              target="_blank"
              rel="noreferrer"
            >
              ★ 5.0 on Google · View all reviews
            </a>
          </div>

          <div className="container testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars" aria-label="5 stars">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-person">
                  <span className="reviewer-avatar" aria-hidden="true">
                    <img src={item.image} alt="" onError={(event) => { event.currentTarget.style.display = 'none' }} />
                    <span>{item.initials}</span>
                  </span>
                  <div><strong>{item.name}</strong><span>{item.role}</span></div>
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

        <section className="location-section">
          <div className="container location-wrap">
            <div className="location-copy">
              <span className="eyebrow dark">Visit UM&amp;CO</span>
              <h2>Find us in Karachi.</h2>
              <p>Meet our tax and financial services team at the ICMAP Building in Gulshan-e-Iqbal.</p>
              <div className="location-details">
                <div><strong>Address</strong><span>ICMAP Building, ST-18/C ICMAP Avenue, Block 6 Gulshan-e-Iqbal, Karachi, 75300</span></div>
                <div><strong>Phone</strong><a href="tel:+923488925608">+92 348 8925608</a></div>
                <div><strong>Hours</strong><span>Mon - Fri · 10 AM - 6 PM</span></div>
              </div>
              <a className="location-link" href="https://www.google.com/maps/dir/?api=1&destination=24.9195946,67.0974023" target="_blank" rel="noreferrer">Get directions →</a>
            </div>
            <div className="map-frame">
              <iframe title="UM&CO Karachi location map" loading="lazy" src="https://www.google.com/maps?q=24.9195946,67.0974023&z=15&output=embed"></iframe>
            </div>
          </div>
        </section>
          </>
        ) : activePage === 'plan' ? (
          <PlanDetailPage plan={selectedPlan} onBack={() => navigateTo('Pricing')} onAction={handleAction} />
        ) : activePage === 'signin' ? (
          <SignInPage onBack={() => navigateTo('home')} />
        ) : (
          <DetailPage page={activePage} onBack={() => navigateTo('home')} onAction={handleAction} />
        )}
      </main>

      {consultationOpen && <ConsultationModal plan={selectedPlan} onClose={() => setConsultationOpen(false)} />}

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-intro">
            <button type="button" className="brand footer-brand" aria-label="UM&CO footer brand" onClick={() => navigateTo('home')}>
              <img className="footer-logo" src={logoImage} alt="UM&CO logo" />
              <span className="brand-text">UM&amp;CO</span>
            </button>
            <h2>Tax filing made clear, secure, and stress-free.</h2>
            <p>Helping individuals and businesses file accurately, stay compliant, and plan with confidence.</p>
            <div className="footer-badges"><span>✓ FBR compliant</span><span>✓ Secure &amp; private</span></div>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <button type="button" onClick={() => handleAction('Individual Tax Filing')}>Income Tax Filing</button>
            <button type="button" onClick={() => handleAction('NTN Registration')}>NTN Registration</button>
            <button type="button" onClick={() => handleAction('Business Tax Services')}>Business Tax Services</button>
            <button type="button" onClick={() => handleAction('Tax Advisory')}>Tax Advisory</button>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <button type="button" onClick={() => navigateTo('Pricing')}>Tax filing plans</button>
            <button type="button" onClick={() => navigateToHomeSection('tax-calculator')}>Tax calculator</button>
            <button type="button" onClick={() => navigateTo('Resources')}>FAQs &amp; guides</button>
            <button type="button" onClick={() => navigateTo('About')}>About UM&amp;CO</button>
          </div>

          <div className="footer-column footer-contact">
            <h3>Need support?</h3>
            <a href="tel:+922138228222">+92 3555210724</a>
            <a href="mailto:support@umandco.com">support@umandco.com</a>
            <button type="button" onClick={() => handleAction('Consultation')}>Book a consultation →</button>
            <span>Mon - Fri · 9 AM - 6 PM</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 UM&amp;CO. All rights reserved.</span>
          <span>Privacy · Terms · Process policy</span>
          <span className="footer-socials" aria-label="Social media links">
            <a href="https://www.facebook.com/Befiler.pk" target="_blank" rel="noreferrer" aria-label="Facebook"><span aria-hidden="true">f</span></a>
            <a href="https://wa.me/923343338888" target="_blank" rel="noreferrer" aria-label="WhatsApp"><span aria-hidden="true">◔</span></a>
            <a href="https://www.instagram.com/befiler.pk/" target="_blank" rel="noreferrer" aria-label="Instagram"><span aria-hidden="true">◎</span></a>
            <a href="https://www.linkedin.com/company/befiler/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
