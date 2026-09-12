import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Coop Works Consulting — Poultry Integration, Farm Operations & Software Solutions',
  description: 'Enterprise poultry consulting, contract broiler integration management, turnkey farm operational advisory, and Poultry Resource Planner software solutions.',
  keywords: ['Poultry Consulting', 'Broiler Integration', 'Growing Charges', 'Poultry Resource Planner', 'FCR Optimization', 'Farm Management'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Executive Top Navigation Header */}
          <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(11, 15, 23, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1rem 2rem'
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              
              {/* Brand Logo */}
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FFF099 0%, #D4AF37 50%, #AA7C11 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                }}>
                  🐓
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                    COOP WORKS
                  </div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--primary-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    CONSULTING & INTEGRATION
                  </div>
                </div>
              </a>

              {/* Navigation Links */}
              <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'var(--transition)' }}>Services</a>
                <a href="#integration" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'var(--transition)' }}>Broiler Integration</a>
                <a href="#turnkey" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'var(--transition)' }}>Turnkey Management</a>
                <a href="#software" style={{ color: 'var(--primary-gold)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, transition: 'var(--transition)' }}>⚡ Resource Planner Software</a>
                <a href="#calculator" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'var(--transition)' }}>ROI Calculator</a>
              </nav>

              {/* CTA Action */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="#contact" className="btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                  🤝 Get Started
                </a>
              </div>

            </div>
          </header>

          {/* Main Content */}
          <main style={{ flex: 1 }}>
            {children}
          </main>

          {/* Executive Footer */}
          <footer style={{
            background: '#070A10',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '4rem 2rem 2rem 2rem',
            marginTop: '6rem'
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--gold-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                    🐓
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>COOP WORKS CONSULTING</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '380px', marginBottom: '1.5rem' }}>
                  Transforming poultry operations through enterprise contract integration management, turnkey farm supervision, technical advisory, and precision software solutions.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <span className="badge badge-gold">🏆 FCR 1.45 Benchmark</span>
                  <span className="badge badge-emerald">🔒 Biosecurity Grade A</span>
                </div>
              </div>

              <div>
                <h4 style={{ color: '#FFF', fontSize: '0.95rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Offerings</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li><a href="#integration" style={{ color: 'inherit', textDecoration: 'none' }}>Contract Broiler Integration</a></li>
                  <li><a href="#turnkey" style={{ color: 'inherit', textDecoration: 'none' }}>Turnkey Farm Operations</a></li>
                  <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>FCR & Mortality Audits</a></li>
                  <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Retrospective Utility Audits</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#FFF', fontSize: '0.95rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Software Suite</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li><a href="#software" style={{ color: 'var(--primary-gold)', textDecoration: 'none', fontWeight: 600 }}>Poultry Resource Planner</a></li>
                  <li><a href="#software" style={{ color: 'inherit', textDecoration: 'none' }}>FIFO Feed Allocation Engine</a></li>
                  <li><a href="#software" style={{ color: 'inherit', textDecoration: 'none' }}>Section 3 Batch Accounting</a></li>
                  <li><a href="#software" style={{ color: 'inherit', textDecoration: 'none' }}>Role-Based Access (RBAC)</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#FFF', fontSize: '0.95rem', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact & Advisory</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li>📧 consulting@coopworks.com</li>
                  <li>📞 +91 (800) 555-COOP</li>
                  <li>📍 Global Poultry Advisory Center</li>
                  <li><a href="#contact" style={{ color: 'var(--emerald-accent)', textDecoration: 'none', fontWeight: 600 }}>Book Session →</a></li>
                </ul>
              </div>
            </div>

            <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              <div>© {new Date().getFullYear()} Coop Works Consulting. All rights reserved. Linked with Poultry Resource Planner.</div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Biosecurity Protocols</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
