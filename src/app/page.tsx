'use client';

import React, { useState } from 'react';

export default function HomePage() {
  // Service Tab State
  const [activeService, setActiveService] = useState<'INTEGRATION' | 'TURNKEY' | 'ADVISORY' | 'SOFTWARE'>('INTEGRATION');

  // ROI Calculator State
  const [placedChicks, setPlacedChicks] = useState<number>(10000);
  const [targetWeightKg, setTargetWeightKg] = useState<number>(2.10);
  const [livabilityPct, setLivabilityPct] = useState<number>(97.5);
  const [targetFCR, setTargetFCR] = useState<number>(1.48);
  const [growingChargePerKg, setGrowingChargePerKg] = useState<number>(12.00);
  const [operatingCostPerBird, setOperatingCostPerBird] = useState<number>(4.80);

  // Calculations
  const totalHarvestedBirds = Math.floor(placedChicks * (livabilityPct / 100));
  const totalLiveWeightKg = totalHarvestedBirds * targetWeightKg;
  const totalFeedKg = totalLiveWeightKg * targetFCR;
  const totalFeedBags = Math.ceil(totalFeedKg / 50);
  const grossGrowingCharges = totalLiveWeightKg * growingChargePerKg;
  const totalOperatingCost = placedChicks * operatingCostPerBird;
  const netBatchProfit = grossGrowingCharges - totalOperatingCost;
  const profitPerBird = placedChicks > 0 ? netBatchProfit / placedChicks : 0;
  const profitPerKg = totalLiveWeightKg > 0 ? netBatchProfit / totalLiveWeightKg : 0;

  // Modal States
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  
  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'INTEGRATION',
    capacity: '10000',
    message: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingSuccess(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '4rem' }}>
      
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: '6rem 2rem 4rem 2rem',
        background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.12) 0%, rgba(16, 185, 129, 0.05) 35%, rgba(11, 15, 23, 1) 70%)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          
          <div className="badge badge-gold" style={{ fontSize: '0.82rem', padding: '0.4rem 1.1rem' }}>
            🏆 Premier Enterprise Poultry Integration & Advisory
          </div>

          <h1 style={{ fontSize: '3.2rem', lineHeight: 1.15, fontWeight: 900 }}>
            Maximize Poultry Yields. Elevate Growing Charges. <br />
            <span className="gold-text">Master Operational Excellence.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
            From high-performing contract broiler integration to complete turnkey farm operations and precision software analytics — Coop Works connects integrators, owners, and farm teams to deliver industry-leading FCR and guaranteed profitability.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <a href="#calculator" className="btn-primary">
              📊 Calculate Growing Charges & ROI
            </a>
            <a href="#software" className="btn-outline">
              ⚡ Explore Resource Planner Software
            </a>
            <button onClick={() => setShowDemoModal(true)} className="btn-outline" style={{ borderColor: 'var(--emerald-accent)', color: 'var(--emerald-accent)' }}>
              🖥️ Watch Software Demo
            </button>
          </div>

          {/* Key Metrics Counter Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            width: '100%',
            marginTop: '3.5rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            backdropFilter: 'blur(16px)'
          }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary-gold)' }}>500,000+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Birds Managed Annually</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--emerald-accent)' }}>1.45</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Average Target FCR</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#3B82F6' }}>98.2%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Flock Livability Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#F59E0B' }}>₹ 12.50+</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Avg Growing Charge / kg</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. FOUR PILLAR SERVICES ────────────────────────────────────────── */}
      <section id="services" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>Core Solutions</span>
          <h2 style={{ fontSize: '2.4rem', marginTop: '0.4rem' }}>Our Business Models & Services</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
            Tailored advisory and management structures for integrators, independent farm owners, and enterprise agricultural investors.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'INTEGRATION', label: '🤝 Contract Broiler Integration', badge: 'Integrator Model' },
            { id: 'TURNKEY', label: '🏚️ Turnkey Farm Operations', badge: 'Full Supervision' },
            { id: 'ADVISORY', label: '🩺 Technical & Advisory Audits', badge: 'FCR & Utilities' },
            { id: 'SOFTWARE', label: '⚡ Software & Technology', badge: 'Resource Planner' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveService(tab.id as any)}
              className={activeService === tab.id ? 'btn-primary' : 'btn-outline'}
              style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Content Display */}
        <div className="glass-card-accent" style={{ padding: '2.5rem' }}>
          {activeService === 'INTEGRATION' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Contract Broiler Farming</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Integrator Partnership & Growing Charge Model</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                  We partner directly with leading poultry integrators. The integrator provides high-quality day-old chicks, commercial feed lots, and health vaccines. Coop Works supplies state-of-the-art shed infrastructure, skilled operational labor, precision climate controls, and rigorous biosecurity.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
                  <li>✅ <strong>Performance-Linked Growing Charges:</strong> Earn maximum remuneration per kg harvested by hitting target FCR (&lt; 1.48) and livability (&gt; 97.5%).</li>
                  <li>✅ <strong>Strict Biosecurity Protocols:</strong> Zero-cross contamination, strict shed sanitation, and batch-to-batch downtime protocols.</li>
                  <li>✅ <strong>Real-Time FIFO Feed Tracking:</strong> Automated feed lot tracking ensuring zero feed wastage or spoilage.</li>
                  <li>✅ <strong>Transparent Harvest Lifting:</strong> Live weigh-bridge logging and multi-lifting management.</li>
                </ul>
              </div>
              <div className="glass-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem' }}>
                <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>Integrator vs Farm Manager Responsibilities</h4>
                <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-gold)', textAlign: 'left' }}>
                      <th style={{ padding: '0.5rem 0', color: 'var(--text-muted)' }}>Item / Input</th>
                      <th style={{ padding: '0.5rem 0', color: 'var(--emerald-accent)' }}>Provided By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}><td style={{ padding: '0.5rem 0' }}>Chicks, Feed & Vaccines</td><td style={{ padding: '0.5rem 0', fontWeight: 700 }}>Integrator</td></tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}><td style={{ padding: '0.5rem 0' }}>Shed Infrastructure & Equipment</td><td style={{ padding: '0.5rem 0', fontWeight: 700 }}>Coop Works</td></tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}><td style={{ padding: '0.5rem 0' }}>Labor, Supervision & Daily Care</td><td style={{ padding: '0.5rem 0', fontWeight: 700 }}>Coop Works</td></tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}><td style={{ padding: '0.5rem 0' }}>Utilities (Electricity, Water, Husk)</td><td style={{ padding: '0.5rem 0', fontWeight: 700 }}>Coop Works</td></tr>
                    <tr><td style={{ padding: '0.5rem 0' }}>Revenue Model</td><td style={{ padding: '0.5rem 0', fontWeight: 700, color: 'var(--primary-gold)' }}>Growing Charges (₹/kg)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeService === 'TURNKEY' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>Full Farm Management</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Turnkey Poultry Farm Operational Management</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                  Ideal for farm owners, financial investors, or corporate entities wanting hassle-free, highly profitable poultry production. We deploy our experienced farm managers, veterinary consultants, and operational teams to run your farm end-to-end.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
                  <li>✅ <strong>Complete Staffing & Supervision:</strong> Dedicated farm supervisor, shed operators, and flock health experts.</li>
                  <li>✅ <strong>Automated Financial Ledgers:</strong> Monthly date-bucketed accounting ledgers tracking chick, feed, medicine, husk, electricity, rent, and lifting revenues.</li>
                  <li>✅ <strong>Sanitized Executive Reporting:</strong> Granular RBAC reporting with financial cost masking for operational staff and full P&amp;L visibility for owners.</li>
                  <li>✅ <strong>Husk & Bedding Optimization:</strong> Retrospective utility audits saving up to 20% on husk, energy, and water expenses per flock.</li>
                </ul>
              </div>
              <div className="glass-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem' }}>
                <h4 style={{ color: 'var(--emerald-accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>Turnkey Deliverables</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                    <strong>📋 Daily Digital Logging:</strong> Real-time tracking of mortality, feed consumption, weight samples, and temperature.
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                    <strong>📊 Batch Performance Reports:</strong> Automated PDF exports containing FCR, EPEF, Mortality %, Daily Weight Gain, and ROI calculations.
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                    <strong>🧹 Biosecurity & Maintenance:</strong> End-of-batch shed washing, disinfection, husk removal, and litter revenue sales management.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeService === 'ADVISORY' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Specialist Advisory</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ad-Hoc Poultry Diagnostics & Audits</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                  Struggling with high mortality, poor FCR, excessive electricity bills, or unorganized harvest lifting? Our advisory team conducts rapid on-site and retrospective data audits to pinpoint leaks and restore peak productivity.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
                  <li>🔍 <strong>FCR & Mortality Troubleshooting:</strong> Root cause analysis of feed wastage, water sanitation, and ventilation imbalances.</li>
                  <li>⚡ <strong>Retrospective Utility Audits:</strong> Historical auditing of electricity, water, and shed rent allocations to eliminate billing discrepancies.</li>
                  <li>🏥 <strong>Disease Prevention & Vaccination Protocols:</strong> Customized medication schedules and disease treatment logging.</li>
                  <li>🏷️ <strong>Harvest Lifting & Market Advisory:</strong> Strategic partial vs full lifting schedules to maximize live-weight market price.</li>
                </ul>
              </div>
              <div className="glass-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem' }}>
                <h4 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.1rem' }}>Proven Audit Results</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--emerald-accent)' }}>- 0.12</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>FCR Reduction Achieved</div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-gold)' }}>18.5%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Utility Cost Savings</div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#3B82F6' }}>+ 4.2%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Livability Improvement</div>
                  </div>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F59E0B' }}>100%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Audit Confidentiality</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeService === 'SOFTWARE' && (
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <span className="badge badge-emerald" style={{ marginBottom: '0.75rem' }}>Poultry Resource Planner SaaS</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Enterprise Software & Technology Solutions</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                  We deploy our flagship **Poultry Resource Planner** software system for your farm or integration business. Designed specifically for modern poultry operations, featuring automated FIFO feed allocation, batch accounting ledgers, and role-based financial data access controls.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
                  <li>⚡ <strong>Automated FIFO Feed Lot Allocations:</strong> Multi-shed feed inventory tracking with exact rate-per-bag cost calculations.</li>
                  <li>🔐 <strong>Granular Access Management (RBAC):</strong> Hide financial costs from general staff (`canViewFinancials()`) while enabling write access for logs.</li>
                  <li>📊 <strong>Section 3 Management & Health KPIs:</strong> Instant tracking of FCR, EPEF, Mortality Rate, Daily Weight Gain, and Net Profit / Loss.</li>
                  <li>📄 <strong>Executive PDF & CSV Reports:</strong> Automated sanitized PDF generation with dynamic section re-numbering.</li>
                </ul>
              </div>
              <div className="glass-card" style={{ background: 'rgba(0,0,0,0.4)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📱💻</div>
                <h4 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Poultry Resource Planner App</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Cloud-hosted SaaS platform accessible from iPhone, Android, Tablet, or Desktop.
                </p>
                <button onClick={() => setShowDemoModal(true)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  🚀 Preview Live Application Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. INTERACTIVE GROWING CHARGE & ROI CALCULATOR ─────────────────── */}
      <section id="calculator" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="glass-card-accent" style={{ padding: '3rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-gold">Interactive Financial Engine</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.4rem' }}>Broiler Integration Growing Charge & ROI Calculator</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.4rem auto 0 auto' }}>
              Adjust operational metrics below to estimate your net batch revenue, feed consumption, and net earnings per bird.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            
            {/* Input Controls */}
            <div className="glass-card" style={{ background: 'rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-gold)', borderBottom: '1px solid var(--border-gold)', paddingBottom: '0.5rem' }}>
                ⚙️ Batch Operational Inputs
              </h3>

              {/* Input 1: Chicks Placed */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">🐥 Chicks Placed (Flock Size)</span>
                  <strong style={{ color: 'var(--primary-gold)' }}>{placedChicks.toLocaleString()} birds</strong>
                </div>
                <input type="range" min="1000" max="100000" step="1000" value={placedChicks} onChange={e => setPlacedChicks(Number(e.target.value))} />
              </div>

              {/* Input 2: Target Body Weight */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">⚖️ Target Harvest Body Weight</span>
                  <strong style={{ color: 'var(--emerald-accent)' }}>{targetWeightKg.toFixed(2)} kg / bird</strong>
                </div>
                <input type="range" min="1.50" max="3.00" step="0.05" value={targetWeightKg} onChange={e => setTargetWeightKg(Number(e.target.value))} />
              </div>

              {/* Input 3: Target FCR */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">📐 Target FCR (Feed Conversion Ratio)</span>
                  <strong style={{ color: '#3B82F6' }}>{targetFCR.toFixed(2)}</strong>
                </div>
                <input type="range" min="1.30" max="1.80" step="0.01" value={targetFCR} onChange={e => setTargetFCR(Number(e.target.value))} />
              </div>

              {/* Input 4: Livability Rate */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">✅ Expected Livability Rate</span>
                  <strong style={{ color: 'var(--emerald-accent)' }}>{livabilityPct.toFixed(1)}%</strong>
                </div>
                <input type="range" min="90.0" max="99.5" step="0.5" value={livabilityPct} onChange={e => setLivabilityPct(Number(e.target.value))} />
              </div>

              {/* Input 5: Growing Charge Rate */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">💰 Growing Charge Rate (Paid by Integrator)</span>
                  <strong style={{ color: 'var(--primary-gold)' }}>₹ {growingChargePerKg.toFixed(2)} / kg</strong>
                </div>
                <input type="range" min="8.00" max="18.00" step="0.25" value={growingChargePerKg} onChange={e => setGrowingChargePerKg(Number(e.target.value))} />
              </div>

              {/* Input 6: Operating Cost Per Bird */}
              <div className="form-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span className="form-label">🏚️ Farm Operating Cost (Labor, Energy, Rent)</span>
                  <strong style={{ color: 'var(--text-muted)' }}>₹ {operatingCostPerBird.toFixed(2)} / bird</strong>
                </div>
                <input type="range" min="2.00" max="8.00" step="0.10" value={operatingCostPerBird} onChange={e => setOperatingCostPerBird(Number(e.target.value))} />
              </div>
            </div>

            {/* Live Calculation Results Output */}
            <div className="glass-card" style={{ background: 'rgba(11,15,23,0.85)', border: '1px solid var(--border-gold)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#FFF', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                📈 Projected Financial & Production Outcomes
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>HARVESTED LIVE WEIGHT</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--emerald-accent)' }}>
                    {totalLiveWeightKg.toLocaleString(undefined, { maximumFractionDigits: 0 })} kg
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({totalHarvestedBirds.toLocaleString()} birds sold)</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>TOTAL FEED REQUIRED</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#3B82F6' }}>
                    {totalFeedBags.toLocaleString()} bags
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>({(totalFeedKg / 1000).toFixed(1)} tons @ 50kg/bag)</div>
                </div>
              </div>

              <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  GROSS GROWING CHARGE REVENUE
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary-gold)', margin: '0.2rem 0' }}>
                  ₹ {grossGrowingCharges.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Total remuneration paid by integrator ({totalLiveWeightKg.toLocaleString()} kg × ₹{growingChargePerKg})
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>TOTAL OPERATING EXPENSES</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--crimson-accent)' }}>
                    ₹ {totalOperatingCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--emerald-accent)', fontWeight: 700 }}>ESTIMATED NET PROFIT</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--emerald-accent)' }}>
                    ₹ {netBatchProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.88rem' }}>
                <span>Profit Per Placed Bird: <strong style={{ color: 'var(--emerald-accent)' }}>₹ {profitPerBird.toFixed(2)} / bird</strong></span>
                <span>Profit Per kg: <strong style={{ color: 'var(--emerald-accent)' }}>₹ {profitPerKg.toFixed(2)} / kg</strong></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. POULTRY RESOURCE PLANNER SOFTWARE SHOWCASE ─────────────────── */}
      <section id="software" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="glass-card" style={{ padding: '3.5rem 2.5rem', background: 'linear-gradient(135deg, rgba(17,24,39,0.9) 0%, rgba(11,15,23,0.95) 100%)', border: '1px solid var(--border-gold)' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Flagship Software Integration</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Poultry Resource Planner SaaS</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Powered by our core engineering technology from **Project04 - Poultry Resource Planner**, we provide custom software deployments for commercial poultry operations. Track feed lots, shed allocations, weight samples, lifting records, and financial P&amp;L ledgers with precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid var(--primary-gold)' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>🌾 FIFO Feed Lot Engine</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Automated cost-per-bag tracking and multi-shed allocations.</p>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid var(--emerald-accent)' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>🔐 Financial Data Gating</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Hide monetary costs from general staff with `canViewFinancials()`.</p>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #3B82F6' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>📊 Section 3 Batch KPIs</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Live FCR, EPEF, Mortality Rate, DWG, and Management KPIs.</p>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid #F59E0B' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#FFF' }}>📄 Executive PDF Reports</strong>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Sanitized executive reports with dynamic section numbering.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => setShowDemoModal(true)} className="btn-primary">
                  🖥️ Launch Application Demo
                </button>
                <a href="#contact" className="btn-outline">
                  🤝 Request Custom Enterprise License
                </a>
              </div>
            </div>

            {/* Mock Dashboard UI Showcase */}
            <div className="glass-card" style={{ background: '#0B0F17', padding: '1.5rem', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>🐓</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--primary-gold)' }}>Poultry Resource Planner v1.0.0</strong>
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>Live Connected</span>
              </div>

              {/* KPI Preview Strip */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>BATCH FCR</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-gold)' }}>1.462</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>LIVABILITY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--emerald-accent)' }}>98.1%</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem', borderRadius: '6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>EPEF SCORE</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3B82F6' }}>412.5</div>
                </div>
              </div>

              {/* Feed & Batch Status Card */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                  <strong>🌾 Feed Lot #FL-2026-08 (Starter)</strong>
                  <span style={{ color: 'var(--emerald-accent)' }}>Active (340.5 bags rem)</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '68%', height: '100%', background: 'var(--gold-gradient)' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                  <span>Allocated across Shed Alpha &amp; Shed Beta</span>
                  <span>Rate: ₹ 1,950 / bag</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONSULTATION & PROPOSAL INQUIRY FORM ────────────────────────── */}
      <section id="contact" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="glass-card-accent" style={{ padding: '3rem 2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-emerald">Get In Touch</span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '0.4rem' }}>Request Advisory Consultation or Software Demo</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.4rem auto 0 auto' }}>
              Whether you are an integrator seeking dedicated contract growing capacity or a farm owner looking for turnkey operational management, our team is ready.
            </p>
          </div>

          <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input type="text" className="form-control" required placeholder="e.g. Vikram Sharma" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-control" required placeholder="e.g. vikram@poultryfarms.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-control" required placeholder="e.g. +91 98765 43210" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Primary Interest *</label>
                <select className="form-control" value={formData.businessType} onChange={e => setFormData({ ...formData, businessType: e.target.value })}>
                  <option value="INTEGRATION">Contract Broiler Integration Partnership</option>
                  <option value="TURNKEY">Turnkey Farm Management & Supervision</option>
                  <option value="ADVISORY">Ad-Hoc FCR & Utility Diagnostic Audit</option>
                  <option value="SOFTWARE">Poultry Resource Planner Software License</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Total Farm / Batch Capacity (Birds)</label>
              <input type="text" className="form-control" placeholder="e.g. 20,000 birds across 2 sheds" value={formData.capacity} onChange={e => setFormData({ ...formData, capacity: e.target.value })} />
            </div>

            <div className="form-group">
              <label className="form-label">Message / Project Requirements (Optional)</label>
              <textarea className="form-control" rows={4} placeholder="Tell us about your current farm setup, FCR challenges, or integration goals..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}>
              🤝 Submit Advisory Request
            </button>
          </form>
        </div>
      </section>

      {/* ── DEMO PREVIEW MODAL ──────────────────────────────────────────────── */}
      {showDemoModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999
        }}>
          <div className="glass-card" style={{ width: '92%', maxWidth: '750px', maxHeight: '90vh', overflowY: 'auto', border: '1px solid var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-gold)' }}>🐓 Poultry Resource Planner Software Preview</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enterprise SaaS Platform for Poultry Integration &amp; Farm Owners</p>
              </div>
              <button onClick={() => setShowDemoModal(false)} style={{ background: 'none', border: 'none', color: '#FFF', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '4px solid var(--emerald-accent)' }}>
                <strong style={{ color: 'var(--emerald-accent)', fontSize: '0.95rem' }}>✨ Key Feature Highlights</strong>
                <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', paddingLeft: '1.2rem', lineHeight: 1.6 }}>
                  <li><strong>FIFO Feed Lot Engine:</strong> Track feed shipments from suppliers, allocate across sheds, and calculate exact daily consumption costs.</li>
                  <li><strong>Section 3 Management KPIs:</strong> Monitor FCR, DWG (Daily Weight Gain), Livability %, EPEF index, and financial P&amp;L per batch.</li>
                  <li><strong>Sanitized PDF Reports:</strong> Generate executive performance PDFs with optional financial data masking for farm supervisors.</li>
                  <li><strong>Granular RBAC:</strong> Configure read/write permissions per role for Sheds, Feed Lots, Health Logs, Accounting, and Access Management.</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button onClick={() => setShowDemoModal(false)} className="btn-outline">Close Preview</button>
                <a href="#contact" onClick={() => setShowDemoModal(false)} className="btn-primary">Request Enterprise Deployment →</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── BOOKING SUCCESS MODAL ───────────────────────────────────────────── */}
      {showBookingSuccess && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999
        }}>
          <div className="glass-card" style={{ width: '90%', maxWidth: '500px', textAlign: 'center', border: '1px solid var(--border-gold)', padding: '2.5rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🎉</div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>Advisory Request Received!</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.name}</strong>. Our senior poultry consultant will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 24 hours.
            </p>
            <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--emerald-accent)', marginBottom: '1.5rem' }}>
              Reference ID: <strong>#CW-CONSULT-{Math.floor(100000 + Math.random() * 900000)}</strong>
            </div>
            <button onClick={() => setShowBookingSuccess(false)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
