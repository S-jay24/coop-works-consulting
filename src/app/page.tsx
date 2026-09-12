'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  BarChart3,
  Globe2,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  Calculator,
  Calendar,
  X,
  ChevronRight,
  Sparkles,
  Download,
  Mail,
  Award,
  PieChart
} from 'lucide-react';

export default function HomePage() {
  // Modal states
  const [activePracticeModal, setActivePracticeModal] = useState<number | null>(null);
  const [activeReportModal, setActiveReportModal] = useState<number | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // ROI Calculator state
  const [industry, setIndustry] = useState('Manufacturing & Operations');
  const [annualRevenue, setAnnualRevenue] = useState(150); // Millions $
  const [optimizationGoal, setOptimizationGoal] = useState('EBITDA Expansion & Cost Optimization');

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    revenue: '$100M - $500M',
    interest: 'Corporate Strategy & M&A',
    message: ''
  });

  // Calculate estimated ROI
  const calculatedSavings = Math.round(annualRevenue * 0.082 * 10) / 10; // $M
  const calculatedRevenueUplift = Math.round(annualRevenue * 0.125 * 10) / 10; // $M
  const estimatedPaybackMonths = 4.2;

  // Practice Areas Data
  const practiceAreas = [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Corporate Strategy & M&A Advisory',
      subtitle: 'Portfolio Acceleration & Growth Strategy',
      summary: 'We partner with enterprise leaders and private equity boards to evaluate growth vectors, perform commercial due diligence, and execute post-merger integration playbooks.',
      deliverables: [
        'Growth Vector Identification & Market Sizing',
        'Buy-Side & Sell-Side Commercial Due Diligence',
        'Post-Merger Integration (PMI) 100-Day Playbook',
        'Capital Allocation & Business Model Optimization'
      ],
      impactMetric: 'Average 3.4x valuation uplift post-engagement'
    },
    {
      id: 2,
      icon: Cpu,
      title: 'AI & Digital Transformation',
      subtitle: 'Enterprise Technology Modernization',
      summary: 'Architecting scalable AI infrastructure, modernizing legacy enterprise software, and embedding machine learning workflows into core operational processes.',
      deliverables: [
        'Executive AI Readiness & ROI Roadmap',
        'Generative AI Enterprise Governance & Architecture',
        'Legacy Stack Modernization & Cloud Optimization',
        'Data Governance & Predictive Analytics Engines'
      ],
      impactMetric: '74% reduction in manual operational latency'
    },
    {
      id: 3,
      icon: Layers,
      title: 'Operational Excellence & Supply Chain',
      subtitle: 'Cost Restructuring & Resilient Supply Networks',
      summary: 'Re-engineering end-to-end supply chains, restructuring fixed overhead, and deploying lean operational frameworks across multi-national footprints.',
      deliverables: [
        'Zero-Based Cost Restructuring & SG&A Rationalization',
        'Global Supply Chain Risk & Logistics Optimization',
        'Procurement Synergies & Vendor Rationalization',
        'Smart Manufacturing & Process Automation'
      ],
      impactMetric: '$140M+ cumulative cost savings delivered'
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Private Equity Value Creation',
      subtitle: 'Portfolio Turnaround & Exit Readiness',
      summary: 'Driving aggressive EBITDA expansion for PE portfolio companies during investment horizons through targeted operational interventions.',
      deliverables: [
        'Pre-Acquisition Value Creation Modeling',
        'Rapid 90-Day Operational Performance Sprints',
        'Working Capital & Cash Flow Optimization',
        'Exit Positioning & Strategic Equity Storytelling'
      ],
      impactMetric: '28.6% average internal rate of return (IRR) enhancement'
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: 'ESG & Sustainable Governance',
      subtitle: 'Decarbonization & Strategic Compliance',
      summary: 'Transforming ESG obligations into competitive advantages through decarbonization frameworks, regulatory audit readiness, and sustainable supply chains.',
      deliverables: [
        'Scope 1-3 Decarbonization & Carbon Offset Strategy',
        'CSRD & SEC Climate Disclosure Audit Readiness',
        'Sustainable Procurement & Supply Chain Tracing',
        'Board Governance & Executive Stewardship Metrics'
      ],
      impactMetric: '100% regulatory audit pass rate across 30+ clients'
    },
    {
      id: 6,
      icon: Users,
      title: 'Organizational Design & Executive Talent',
      subtitle: 'Leadership Alignment & Agile Transformation',
      summary: 'Designing high-performance organizational structures, aligning C-suite incentives with value creation goals, and navigating complex change management.',
      deliverables: [
        'Operating Model & Org Architecture Redesign',
        'C-Suite & Board Executive Leadership Coaching',
        'Performance Compensation & Incentive Alignment',
        'Agile Enterprise Scaling & Culture Transformation'
      ],
      impactMetric: '94% executive retention during restructuring'
    }
  ];

  // Reports & Insights Data
  const reports = [
    {
      id: 1,
      title: '2026 Executive AI Readiness Index',
      type: 'Global Benchmarking Report',
      date: 'Q3 2026 Release',
      pages: '48 Pages',
      abstract: 'A definitive study of 450 global enterprise CEOs analyzing GenAI ROI, infrastructure bottlenecks, and organizational deployment frameworks.',
      keyTakeaways: [
        'Only 14% of enterprises have achieved positive net EBITDA from GenAI pilots.',
        'Architecture governance is the single largest differentiator between scalable deployments and failed POCs.',
        'Leading firms re-allocate 22% of legacy IT budgets into real-time decision engines.'
      ]
    },
    {
      id: 2,
      title: 'Navigating Supply Chain Volatility',
      type: 'Executive White Paper',
      date: 'Q2 2026 Release',
      pages: '36 Pages',
      abstract: 'Strategic playbook for C-suite leaders re-shoring manufacturing footprints and building near-shore supply chain resilience in volatile trade regimes.',
      keyTakeaways: [
        'Dual-sourcing strategies reduce disruption penalties by up to 68%.',
        'Predictive supply chain monitoring yields an average 3.8x ROI within 9 months.',
        'Inventory buffer optimization frees up an average of $24M in working capital per $1B in revenue.'
      ]
    },
    {
      id: 3,
      title: 'Private Equity Value Creation Playbook',
      type: 'Special Advisory Insights',
      date: 'Q3 2026 Release',
      pages: '42 Pages',
      abstract: 'Examining how top-decile PE sponsors drive operational EBITDA expansion amidst higher cost of capital and compressed exit multiples.',
      keyTakeaways: [
        'Operational improvements drive 72% of total equity returns in high-interest rate cycles.',
        'Early working capital optimization expands EBITDA margins by 180-320 basis points.',
        'Digital margin expansion outweighs traditional head-count reduction strategies by 3:1.'
      ]
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      client: 'Fortune 500 Industrial Equipment Manufacturer',
      headline: '$140M Annual EBITDA Expansion via Supply Chain Optimization',
      sector: 'Industrial & Manufacturing',
      challenge: 'Fragmented global supply networks and rising raw material costs eroded operating margins by 420 bps.',
      solution: 'Coop Works restructured procurement categories, deployed AI inventory prediction, and consolidated supplier hubs across 18 countries.',
      results: [
        '$140M recurring annual EBITDA improvement',
        '28% reduction in global inventory hold times',
        '100% delivery reliability score across Tier-1 clients'
      ]
    },
    {
      client: 'Tier-1 FinTech & Banking Platform',
      headline: '74% Reduction in Onboarding Latency with Enterprise AI Architecture',
      sector: 'Financial Services',
      challenge: 'Legacy compliance workflows created a 14-day customer onboarding delay, leading to high drop-off rates.',
      solution: 'Engineered an automated risk-scoring pipeline and modern microservices architecture with strict regulatory safeguards.',
      results: [
        'Onboarding time reduced from 14 days to 4 hours',
        '$68M in net new ARR captured within 12 months',
        'Zero compliance audit findings post-launch'
      ]
    },
    {
      client: 'Leading Healthcare Services Network',
      headline: '3.2x Valuation Multiplier Growth Ahead of Successful IPO',
      sector: 'Healthcare & Life Sciences',
      challenge: 'Inconsistent hospital unit economics and stagnant operational throughput across 85 regional facilities.',
      solution: 'Implemented standardized clinical resource scheduling, optimized payer contract structures, and streamlined SG&A overhead.',
      results: [
        '3.2x valuation multiplier increase upon public listing',
        '240 bps margin expansion across all operating units',
        'Ranked #1 in regional patient care quality metrics'
      ]
    }
  ];

  // Leadership Team
  const leadership = [
    {
      name: 'Alexander Vance',
      title: 'Senior Managing Director & Co-Founder',
      pedigree: 'Ex-McKinsey Principal | MBA, Harvard Business School',
      expertise: 'Corporate Strategy, M&A Advisory & Board Governance',
      bio: '20+ years advising Fortune 100 CEOs and Private Equity sponsors on multi-billion dollar strategic transformations and portfolio turnarounds.'
    },
    {
      name: 'Dr. Elena Rostova',
      title: 'Partner & Global Head of AI & Digital Practice',
      pedigree: 'Ex-BCG Digital Ventures Director | Ph.D. Computer Science, MIT',
      expertise: 'Enterprise AI Infrastructure, Cloud Architecture & Machine Learning',
      bio: 'Pioneer in operationalizing machine learning models for global financial institutions and complex industrial supply networks.'
    },
    {
      name: 'Marcus Sterling',
      title: 'Managing Director, Operational Excellence',
      pedigree: 'Ex-Bain Partner | B.S. Engineering, Stanford University',
      expertise: 'Supply Chain Resiliency, Zero-Based Costing & Lean Operations',
      bio: 'Directly oversaw over $1.2B in cumulative cost restructuring and supply chain modernization programs across 30+ countries.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. EXECUTIVE STICKY NAVIGATION HEADER */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.9rem 2rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Identity */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }}>
            <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="10" fill="#0A192F" />
              <path d="M14 16C14 13.7909 15.7909 12 18 12H30C32.2091 12 34 13.7909 34 16V32C34 34.2091 32.2091 36 30 36H18C15.7909 36 14 34.2091 14 32V16Z" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M20 20L24 16L28 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 16V32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 26L24 32L30 26" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy-900)', letterSpacing: '-0.02em', lineHeight: 1.1, fontFamily: 'var(--font-accent)' }}>
                COOP WORKS
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--amber-700)', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                STRATEGIC ADVISORY
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
            <a href="#practices" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
              Practice Areas
            </a>
            <a href="#insights" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
              Strategic Insights
            </a>
            <a href="#calculator" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
              ROI Calculator
            </a>
            <a href="#cases" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
              Case Studies
            </a>
            <a href="#leadership" style={{ color: 'var(--text-body)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 600 }}>
              Leadership
            </a>
            <a href="#brand-system" style={{ color: 'var(--amber-700)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Sparkles size={14} /> Brand Identity
            </a>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            <button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="btn-primary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
            >
              <Calendar size={16} /> Schedule Consultation
            </button>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '5.5rem 2rem 4rem 2rem',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Soft Background Accent Lines */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '840px' }}>
            
            <div className="badge-gold" style={{ marginBottom: '1.5rem' }}>
              <Award size={14} /> Global Management Consulting & Executive Advisory
            </div>

            <h1 style={{
              fontSize: '3.6rem',
              fontWeight: 800,
              color: 'var(--navy-900)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              letterSpacing: '-0.025em'
            }}>
              Transforming Complexity into Executive Growth & Market Leadership.
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-body)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '720px'
            }}>
              We partner with Fortune 500 CEOs, Boards of Directors, and Private Equity sponsors to solve high-stakes operational challenges, execute digital transformation, and unlock multi-billion dollar enterprise value.
            </p>

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '4rem' }}>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
              >
                Request Executive Briefing <ArrowRight size={18} />
              </button>

              <a 
                href="#calculator"
                className="btn-secondary"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                <Calculator size={18} /> Interactive ROI Calculator
              </a>
            </div>

          </div>

          {/* STATS COUNTER BAR */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            padding: '2.25rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--navy-900)', fontFamily: 'var(--font-accent)' }}>
                $2.5B+
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Enterprise Value Created
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Across 120+ client engagements globally
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--navy-900)', fontFamily: 'var(--font-accent)' }}>
                98.4%
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-body)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Board Retention Rate
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Long-term strategic partnership trust
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--navy-900)', fontFamily: 'var(--font-accent)' }}>
                74%
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--emerald-600)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Average Operational Latency Cut
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Driven by AI & automated architecture
              </div>
            </div>

            <div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--navy-900)', fontFamily: 'var(--font-accent)' }}>
                14
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--amber-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Industry Sectors Served
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                From FinTech to Industrial Supply Chains
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE PRACTICE AREAS */}
      <section id="practices" style={{
        padding: '6rem 2rem',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="section-tag">Core Capabilities</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              Strategic Advisory Practice Areas
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)' }}>
              Tailored multi-disciplinary consulting services designed to solve complex structural, operational, and digital challenges.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2rem'
          }}>
            {practiceAreas.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div 
                  key={practice.id}
                  className="executive-card-interactive"
                  onClick={() => setActivePracticeModal(practice.id)}
                  style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--blue-50)',
                      border: '1px solid var(--blue-100)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--navy-900)',
                      marginBottom: '1.5rem'
                    }}>
                      <IconComponent size={26} />
                    </div>

                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--amber-700)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      {practice.subtitle}
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '1rem', lineHeight: 1.3 }}>
                      {practice.title}
                    </h3>

                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {practice.summary}
                    </p>
                  </div>

                  <div>
                    <div style={{
                      padding: '0.75rem 1rem',
                      backgroundColor: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--emerald-600)',
                      border: '1px solid var(--emerald-100)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '1.25rem'
                    }}>
                      <CheckCircle2 size={16} /> {practice.impactMetric}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)' }}>
                      Explore Methodology & Deliverables <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE ROI & STRATEGIC IMPACT CALCULATOR */}
      <section id="calculator" style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <Calculator size={14} /> Executive Impact Engine
              </div>

              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Estimate Your EBITDA & Revenue Uplift Opportunity
              </h2>

              <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our proprietary benchmarking model projects potential cost rationalization and revenue expansion based on historical engagements across similar revenue tiers and industry sectors.
              </p>

              {/* Calculator Input Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                    Select Industry Sector
                  </label>
                  <select 
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="input-executive"
                    style={{ fontWeight: 600 }}
                  >
                    <option value="Manufacturing & Operations">Industrial, Supply Chain & Manufacturing</option>
                    <option value="Financial Services">Financial Services, FinTech & Banking</option>
                    <option value="Healthcare & Life Sciences">Healthcare, Pharma & Life Sciences</option>
                    <option value="Technology & Software">Enterprise Technology & SaaS</option>
                    <option value="Retail & Consumer Goods">Retail, E-Commerce & Consumer Goods</option>
                  </select>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)' }}>
                      Annual Enterprise Revenue ($M USD)
                    </label>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--amber-700)' }}>
                      ${annualRevenue}M
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="20" 
                    max="1000" 
                    step="10" 
                    value={annualRevenue} 
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--navy-900)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    <span>$20M</span>
                    <span>$500M</span>
                    <span>$1.0B+</span>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.5rem' }}>
                    Primary Engagement Strategic Objective
                  </label>
                  <select 
                    value={optimizationGoal}
                    onChange={(e) => setOptimizationGoal(e.target.value)}
                    className="input-executive"
                    style={{ fontWeight: 600 }}
                  >
                    <option value="EBITDA Expansion & Cost Optimization">EBITDA Expansion & SG&A Restructuring</option>
                    <option value="AI Architecture Modernization">Enterprise AI Architecture & Latency Reduction</option>
                    <option value="M&A Synergy Realization">M&A Integration & Portfolio Synergies</option>
                    <option value="Supply Chain Resilience">Global Supply Chain Re-Engineering</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Calculated Output Card */}
            <div style={{
              backgroundColor: 'var(--navy-900)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2.5rem',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(217, 119, 6, 0.15) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--amber-500)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                  PROJECTED 12-MONTH IMPACT MODEL
                </div>
                
                <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '2rem', fontFamily: 'var(--font-accent)' }}>
                  {industry}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '0.35rem' }}>
                      Est. Annual Cost Rationalization
                    </div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--amber-500)' }}>
                      ${calculatedSavings}M
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.25rem' }}>
                      ~8.2% of annual operating cost
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '0.35rem' }}>
                      Est. Gross Revenue Expansion
                    </div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#34D399' }}>
                      +${calculatedRevenueUplift}M
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.25rem' }}>
                      Through pricing & efficiency gains
                    </div>
                  </div>

                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '2rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <PieChart size={24} style={{ color: 'var(--amber-500)' }} />
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF' }}>Advisory Payback Period</div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Full engagement cost recouped in</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {estimatedPaybackMonths} Months
                  </div>
                </div>

                <button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="btn-amber"
                  style={{ width: '100%', padding: '1rem', fontSize: '0.9375rem' }}
                >
                  Lock In Custom Strategic Audit <ArrowRight size={18} />
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THOUGHT LEADERSHIP & PUBLICATIONS */}
      <section id="insights" style={{
        padding: '6rem 2rem',
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="section-tag">Executive Intelligence</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              Strategic Insights & Research Reports
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)' }}>
              Empirically grounded research and white papers authored by our global practice leaders.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {reports.map((report) => (
              <div 
                key={report.id}
                className="executive-card"
                style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span className="badge-navy">{report.type}</span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)' }}>{report.pages}</span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '1rem', lineHeight: 1.3 }}>
                    {report.title}
                  </h3>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {report.abstract}
                  </p>
                </div>

                <div>
                  <button 
                    onClick={() => setActiveReportModal(report.id)}
                    className="btn-secondary"
                    style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', justifyContent: 'center' }}
                  >
                    <FileText size={16} /> Read Key Findings & Executive Summary
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CLIENT CASE STUDIES & PROOF POINTS */}
      <section id="cases" style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="section-tag">Proven Results</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              Client Transformations & Case Studies
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)' }}>
              Realized value delivered across multinational enterprise clients and private equity portfolios.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {caseStudies.map((study, idx) => (
              <div 
                key={idx}
                className="executive-card"
                style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="badge-gold">{study.sector}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)' }}>{study.client}</span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: 'var(--navy-900)', marginBottom: '1rem', lineHeight: 1.25 }}>
                    {study.headline}
                  </h3>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>The Strategic Challenge</div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)' }}>{study.challenge}</p>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Coop Works Intervention</div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)' }}>{study.solution}</p>
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    Verified Deliverable Impact
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {study.results.map((res, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy-900)' }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--emerald-600)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BRAND SYSTEM & GRAPHIC PALETTE SHOWCASE */}
      <section id="brand-system" style={{
        padding: '6rem 2rem',
        backgroundColor: 'var(--navy-900)',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div style={{ color: 'var(--amber-500)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
              Design System & Graphic Identity
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-accent)' }}>
              Coop Works Visual & Graphic Architecture
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#94A3B8' }}>
              A clean, authoritative light-mode aesthetic constructed to reflect global executive trust, high-density data clarity, and structural balance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Logo Specifications */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--amber-500)', marginBottom: '1rem', fontFamily: 'var(--font-accent)' }}>
                Official Emblem & Logo
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem' }}>
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="#0A192F" />
                  <path d="M14 16C14 13.7909 15.7909 12 18 12H30C32.2091 12 34 13.7909 34 16V32C34 34.2091 32.2091 36 30 36H18C15.7909 36 14 34.2091 14 32V16Z" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M20 20L24 16L28 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 16V32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 26L24 32L30 26" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0A192F', fontFamily: 'Cinzel' }}>COOP WORKS</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#B45309', letterSpacing: '0.15em' }}>STRATEGIC ADVISORY</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                Geometric monogram fusing an outer executive pillar shield with inner interlocking <strong>C</strong> and <strong>W</strong> vectors symbolizing structural cohesion and growth.
              </p>
            </div>

            {/* Graphic Color Palette */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--amber-500)', marginBottom: '1rem', fontFamily: 'var(--font-accent)' }}>
                Graphic Color Palette
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <div style={{ backgroundColor: '#0A192F', padding: '0.75rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#FFF', fontWeight: 700 }}>Navy 900</div>
                  <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>#0A192F</div>
                </div>
                <div style={{ backgroundColor: '#1E40AF', padding: '0.75rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#FFF', fontWeight: 700 }}>Royal Blue</div>
                  <div style={{ fontSize: '0.65rem', color: '#DBEAFE' }}>#1E40AF</div>
                </div>
                <div style={{ backgroundColor: '#D97706', padding: '0.75rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#FFF', fontWeight: 700 }}>Amber Gold</div>
                  <div style={{ fontSize: '0.65rem', color: '#FEF3C7' }}>#D97706</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#0F172A', fontWeight: 700 }}>Light Surface</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748B' }}>#F8FAFC</div>
                </div>
              </div>
            </div>

            {/* Typography Scale */}
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--amber-500)', marginBottom: '1rem', fontFamily: 'var(--font-accent)' }}>
                Typography Hierarchy
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Heading Font (Playfair / Cinzel)</div>
                  <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: '#FFF', fontWeight: 700 }}>Executive Authority & Heritage</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase' }}>Body & UI Font (Plus Jakarta Sans)</div>
                  <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)', color: '#CBD5E1' }}>Crisp, high-density corporate readability</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. EXECUTIVE LEADERSHIP */}
      <section id="leadership" style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
            <div className="section-tag">Senior Leadership</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '1rem' }}>
              Managing Partners & Practice Leaders
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)' }}>
              Seasoned executive strategists with decades of operational leadership at tier-1 global consulting firms.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}>
            {leadership.map((leader, i) => (
              <div 
                key={i}
                className="executive-card"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--navy-900)',
                    color: 'var(--amber-500)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    fontFamily: 'Cinzel'
                  }}>
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: 'var(--navy-900)', marginBottom: '0.25rem' }}>
                    {leader.name}
                  </h3>

                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--amber-700)', marginBottom: '0.75rem' }}>
                    {leader.title}
                  </div>

                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--navy-700)', padding: '0.5rem 0.75rem', backgroundColor: 'var(--blue-50)', borderRadius: '4px', marginBottom: '1.25rem' }}>
                    {leader.pedigree}
                  </div>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                    {leader.bio}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  <strong>Specialization:</strong> {leader.expertise}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. GLOBAL OFFICES & FOOTER */}
      <footer style={{
        backgroundColor: '#070E1B',
        color: '#FFFFFF',
        padding: '5rem 2rem 2.5rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '4rem' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="10" fill="#1E40AF" />
                  <path d="M14 16C14 13.7909 15.7909 12 18 12H30C32.2091 12 34 13.7909 34 16V32C34 34.2091 32.2091 36 30 36H18C15.7909 36 14 34.2091 14 32V16Z" stroke="#D97706" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M20 20L24 16L28 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 16V32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 26L24 32L30 26" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'Cinzel' }}>COOP WORKS</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--amber-500)', letterSpacing: '0.15em' }}>STRATEGIC ADVISORY</div>
                </div>
              </div>

              <p style={{ color: '#94A3B8', fontSize: '0.9375rem', maxWidth: '380px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Tier-1 strategic management consulting firm delivering corporate strategy, digital transformation, supply chain optimization, and private equity advisory globally.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span className="badge-gold">ISO 27001 Certified</span>
                <span className="badge-navy">C-Suite Trusted</span>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Practice Areas
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li><a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>Corporate Strategy & M&A</a></li>
                <li><a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>AI & Digital Transformation</a></li>
                <li><a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>Supply Chain Optimization</a></li>
                <li><a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>Private Equity Advisory</a></li>
                <li><a href="#practices" style={{ color: 'inherit', textDecoration: 'none' }}>ESG & Governance</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Global Presence
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94A3B8' }}>
                <li>📍 New York (Americas HQ)</li>
                <li>📍 London (EMEA HQ)</li>
                <li>📍 Zurich (Strategic Advisory)</li>
                <li>📍 Singapore (APAC HQ)</li>
                <li>📍 Tokyo (Technology Practice)</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Executive Inquiries
              </h4>
              <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '1rem', lineHeight: 1.6 }}>
                Direct C-Suite Advisory Help Desk & Client Portal:
              </div>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="btn-amber"
                style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem' }}
              >
                <Mail size={16} /> Contact Advisory Partner
              </button>
            </div>

          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.8125rem',
            color: '#64748B',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              © {new Date().getFullYear()} Coop Works Consulting LLC. All rights reserved. Registered under sjay.collabs@gmail.com.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Governance</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Security Protocols</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 10. PRACTICE AREA METHODOLOGY MODAL */}
      {activePracticeModal !== null && (
        <div className="modal-overlay" onClick={() => setActivePracticeModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            {(() => {
              const practice = practiceAreas.find(p => p.id === activePracticeModal);
              if (!practice) return null;
              const Icon = practice.icon;
              return (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'var(--blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-900)' }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--amber-700)', textTransform: 'uppercase' }}>{practice.subtitle}</div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--navy-900)' }}>{practice.title}</h3>
                      </div>
                    </div>
                    <button 
                      onClick={() => setActivePracticeModal(null)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {practice.summary}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                      Core Practice Deliverables & Workstreams
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {practice.deliverables.map((del, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--navy-900)' }} />
                          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--navy-900)' }}>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button onClick={() => setActivePracticeModal(null)} className="btn-secondary">
                      Close Window
                    </button>
                    <button onClick={() => { setActivePracticeModal(null); setIsConsultationModalOpen(true); }} className="btn-primary">
                      Inquire About This Practice
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* 11. REPORT SUMMARY MODAL */}
      {activeReportModal !== null && (
        <div className="modal-overlay" onClick={() => setActiveReportModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            {(() => {
              const report = reports.find(r => r.id === activeReportModal);
              if (!report) return null;
              return (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                      <span className="badge-gold" style={{ marginBottom: '0.5rem' }}>{report.type}</span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-900)' }}>{report.title}</h3>
                    </div>
                    <button 
                      onClick={() => setActiveReportModal(null)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {report.abstract}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy-900)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                      Key Executive Findings
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {report.keyTakeaways.map((takeaway, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                          <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--navy-900)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                          <span style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.5 }}>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>PDF Size: 4.2 MB • Full Unrestricted Access</span>
                    <button onClick={() => alert(`Simulated Download: ${report.title}.pdf sent to your device.`)} className="btn-primary">
                      <Download size={18} /> Download Full PDF Report
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* 12. CONSULTATION LEAD MODAL */}
      {isConsultationModalOpen && (
        <div className="modal-overlay" onClick={() => setIsConsultationModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <div className="badge-navy" style={{ marginBottom: '0.5rem' }}>Executive Strategic Inquiry</div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--navy-900)' }}>Schedule a Partner Consultation</h3>
              </div>
              <button 
                onClick={() => setIsConsultationModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={24} />
              </button>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--emerald-50)', color: 'var(--emerald-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.5rem', color: 'var(--navy-900)', marginBottom: '0.5rem' }}>Consultation Confirmed</h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. A Senior Managing Director will review your strategic priorities and contact you within 2 business hours.
                </p>
                <button onClick={() => { setIsConsultationModalOpen(false); setFormSubmitted(false); }} className="btn-primary">
                  Return to Platform
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className="input-executive"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                      Corporate Email *
                    </label>
                    <input 
                      required 
                      type="email" 
                      placeholder="s.jenkins@company.com"
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      className="input-executive"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                      Company Name *
                    </label>
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Global Tech Solutions"
                      value={formData.company} 
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                      className="input-executive"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                      Executive Title / Role
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Chief Executive Officer / Vice President"
                      value={formData.role} 
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })} 
                      className="input-executive"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                    Primary Practice Interest
                  </label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="input-executive"
                  >
                    <option value="Corporate Strategy & M&A">Corporate Strategy & M&A Advisory</option>
                    <option value="AI & Digital Transformation">AI & Digital Transformation</option>
                    <option value="Operational Excellence & Supply Chain">Operational Excellence & Supply Chain</option>
                    <option value="Private Equity Value Creation">Private Equity Value Creation</option>
                    <option value="ESG & Sustainable Governance">ESG & Sustainable Governance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>
                    Brief Summary of Strategic Priorities
                  </label>
                  <textarea 
                    rows={3} 
                    placeholder="Describe key challenges, project timeline, or target outcomes..."
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="input-executive" 
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                  <button type="button" onClick={() => setIsConsultationModalOpen(false)} className="btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Submit Advisory Request <ArrowRight size={16} />
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
