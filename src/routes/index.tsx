import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconTruck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
      <rect x="9" y="11" width="14" height="10" rx="2"/>
      <circle cx="12" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function IconDollar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  )
}

function IconRecycle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/>
      <polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

// ── Truck SVG Illustration ───────────────────────────────────────────────────

function TruckIllustration() {
  return (
    <svg
      className="truck-bounce"
      viewBox="0 0 520 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Junk removal truck"
    >
      {/* Shadow */}
      <ellipse cx="260" cy="298" rx="200" ry="14" fill="rgba(0,0,0,0.25)" />

      {/* Truck bed / cargo box */}
      <rect x="20" y="100" width="290" height="160" rx="6" fill="#2e2e2e" />
      <rect x="25" y="105" width="280" height="150" rx="4" fill="#3a3a3a" />

      {/* Junk in bed - boxes */}
      <rect x="35" y="130" width="55" height="50" rx="3" fill="#5a4a3a" />
      <rect x="40" y="120" width="45" height="20" rx="2" fill="#6b5a45" />
      <rect x="100" y="140" width="70" height="40" rx="3" fill="#4a3a2a" />
      <rect x="110" y="125" width="50" height="25" rx="2" fill="#5c4a36" />
      <rect x="180" y="145" width="40" height="35" rx="2" fill="#634e3c" />
      <rect x="230" y="135" width="55" height="45" rx="3" fill="#52412f" />
      <rect x="235" y="120" width="42" height="22" rx="2" fill="#6a5540" />
      {/* Old TV */}
      <rect x="155" y="118" width="42" height="34" rx="3" fill="#3d3d3d" />
      <rect x="159" y="122" width="34" height="24" rx="1" fill="#1a1a1a" />
      <line x1="176" y1="152" x2="176" y2="158" stroke="#555" strokeWidth="2"/>

      {/* Cab */}
      <rect x="310" y="140" width="180" height="120" rx="8" fill="#e85d04" />
      <rect x="315" y="145" width="170" height="110" rx="6" fill="#d4540a" />

      {/* Windshield */}
      <rect x="340" y="155" width="110" height="70" rx="5" fill="#b8d4e8" opacity="0.85" />
      <line x1="395" y1="155" x2="395" y2="225" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />

      {/* Cab roof detail */}
      <rect x="330" y="130" width="150" height="18" rx="4" fill="#c44c02" />

      {/* Door */}
      <rect x="320" y="195" width="60" height="60" rx="4" fill="#c44c02" />
      <circle cx="375" cy="228" r="4" fill="#e8a87a" />

      {/* Windows */}
      <rect x="460" y="160" width="25" height="40" rx="3" fill="#b8d4e8" opacity="0.85" />

      {/* Exhaust pipe */}
      <rect x="470" y="105" width="12" height="40" rx="3" fill="#2a2a2a" />
      <ellipse cx="476" cy="104" rx="7" ry="4" fill="#1a1a1a" />
      {/* Exhaust puffs */}
      <circle cx="476" cy="88" r="8" fill="rgba(255,255,255,0.12)" />
      <circle cx="480" cy="72" r="6" fill="rgba(255,255,255,0.08)" />
      <circle cx="474" cy="58" r="5" fill="rgba(255,255,255,0.06)" />

      {/* Wheels */}
      <circle cx="90" cy="262" r="36" fill="#1a1a1a" />
      <circle cx="90" cy="262" r="24" fill="#2e2e2e" />
      <circle cx="90" cy="262" r="10" fill="#4a4a4a" />
      <circle cx="90" cy="262" r="4" fill="#e85d04" />

      <circle cx="225" cy="262" r="36" fill="#1a1a1a" />
      <circle cx="225" cy="262" r="24" fill="#2e2e2e" />
      <circle cx="225" cy="262" r="10" fill="#4a4a4a" />
      <circle cx="225" cy="262" r="4" fill="#e85d04" />

      <circle cx="390" cy="262" r="36" fill="#1a1a1a" />
      <circle cx="390" cy="262" r="24" fill="#2e2e2e" />
      <circle cx="390" cy="262" r="10" fill="#4a4a4a" />
      <circle cx="390" cy="262" r="4" fill="#e85d04" />

      <circle cx="470" cy="262" r="36" fill="#1a1a1a" />
      <circle cx="470" cy="262" r="24" fill="#2e2e2e" />
      <circle cx="470" cy="262" r="10" fill="#4a4a4a" />
      <circle cx="470" cy="262" r="4" fill="#e85d04" />

      {/* Headlight */}
      <rect x="483" y="210" width="30" height="18" rx="4" fill="#fff9d6" />
      <rect x="486" y="213" width="24" height="12" rx="2" fill="#fffbe0" />

      {/* Company name on truck */}
      <rect x="35" y="108" width="268" height="22" rx="2" fill="#1a1a1a" opacity="0.6"/>
      <text x="169" y="123" textAnchor="middle" fill="#e85d04" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="13" letterSpacing="2">CHAPPY'S JUNK REMOVAL</text>

      {/* Truck frame / undercarriage */}
      <rect x="15" y="255" width="490" height="20" rx="4" fill="#1a1a1a" />
    </svg>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: '◈',
    title: 'Single Item Pickup',
    desc: 'One bulky piece — couch, mattress, appliance, or anything else taking up space. We lift, load, and haul it.',
    price: 'Starting at $125',
    tag: 'Most Popular',
  },
  {
    icon: '◉',
    title: 'Room Cleanout',
    desc: 'Garage, basement, attic, or spare room — we clear it completely so you get your space back.',
    price: 'Starting at $250',
    tag: null,
  },
  {
    icon: '◈',
    title: 'Full Property Cleanout',
    desc: 'Estate cleanouts, foreclosures, hoarding situations — no job too large. We handle the heavy lifting.',
    price: 'Custom Quote',
    tag: 'Best Value',
  },
  {
    icon: '◉',
    title: 'Yard & Debris Removal',
    desc: 'Brush, branches, old lumber, concrete, dirt — we haul the outdoor messes that drag down your curb appeal.',
    price: 'Starting at $175',
    tag: null,
  },
  {
    icon: '◈',
    title: 'Construction Cleanout',
    desc: 'Renovation scraps, drywall, flooring, fixtures — we clear job sites fast so your crew can keep moving.',
    price: 'Starting at $300',
    tag: null,
  },
  {
    icon: '◉',
    title: 'Same-Day Service',
    desc: 'Need it gone today? We offer same-day and next-morning appointments when slots are available.',
    price: 'Call for availability',
    tag: 'Fast',
  },
]

const features = [
  {
    icon: <IconClock />,
    title: 'Same-Day Availability',
    desc: 'Call before noon, we\'re often there same afternoon. We respect your time.',
  },
  {
    icon: <IconDollar />,
    title: 'Upfront Pricing',
    desc: 'You get a firm quote before we touch anything. Zero surprises, zero hidden fees.',
  },
  {
    icon: <IconShield />,
    title: 'Fully Insured',
    desc: 'Licensed and insured for your peace of mind. We protect your property every step of the way.',
  },
  {
    icon: <IconRecycle />,
    title: 'Eco-Responsible',
    desc: 'We donate usable items to local charities and recycle whenever possible — less ends up in the landfill.',
  },
]

const testimonials = [
  {
    name: 'Marlene Kowalczyk',
    location: 'Homeowner',
    stars: 5,
    quote: 'Chappy\'s cleared out my entire garage in under two hours. Absolute legends. The crew was polite, fast, and left the floor spotless. I\'ve already booked them for my mother-in-law\'s basement.',
  },
  {
    name: 'Terrence Oduya',
    location: 'Property Manager',
    stars: 5,
    quote: 'I manage 14 rental units. When tenants leave a mess, Chappy\'s is my first call. They\'ve never let me down — always on time, always professional, always competitive on price.',
  },
  {
    name: 'Sandra Pfeiffer-Grubb',
    location: 'Estate Executor',
    stars: 5,
    quote: 'Handling my father\'s estate was already hard enough emotionally. Chappy\'s made the physical cleanout painless. They were respectful, careful, and donated as much as possible.',
  },
]

const acceptedItems = [
  'Furniture & Sofas',
  'Mattresses & Box Springs',
  'Appliances (Washers, Dryers, Fridges)',
  'Electronics & TVs',
  'Yard Waste & Brush',
  'Hot Tubs & Swing Sets',
  'Construction Debris',
  'Exercise Equipment',
  'Pianos & Organs',
  'Boxes & Household Clutter',
]

// ── Main Component ────────────────────────────────────────────────────────────

function LandingPage() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }}>

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <nav
        style={{
          background: 'var(--charcoal)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '2px solid var(--orange)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                background: 'var(--orange)',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)',
              }}
            >
              <IconTruck />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.25rem',
                  color: 'var(--cream)',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                }}
              >
                Chappy's
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '0.65rem',
                  color: 'var(--orange)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Junk Removal LLC
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#why-us" className="nav-link">Why Us</a>
            <a href="#contact" className="btn-primary" style={{ padding: '9px 22px', fontSize: '0.85rem' }}>
              <IconPhone />
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--charcoal)',
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: '0',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(232,93,4,0.04) 40px,
              rgba(232,93,4,0.04) 41px
            )`,
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '5rem 1.5rem 0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Left: Text */}
          <div>
            <div className="section-label anim-fade-in" style={{ marginBottom: '1.25rem' }}>
              Serving Your Area — Fast & Affordable
            </div>

            <h1
              className="anim-fade-up d1"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                lineHeight: 0.95,
                color: 'var(--cream)',
                margin: '0 0 0.5rem',
                letterSpacing: '0.02em',
              }}
            >
              We Haul<br />
              <span style={{ color: 'var(--orange)' }}>It All</span><br />
              Away.
            </h1>

            <p
              className="anim-fade-up d2"
              style={{
                color: 'rgba(245,240,232,0.65)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                margin: '1.5rem 0 2.5rem',
                maxWidth: '420px',
              }}
            >
              One item or an entire property — Chappy's Junk Removal LLC shows up on time,
              does the heavy lifting, and leaves your space clean.
              <strong style={{ color: 'var(--cream)', display: 'block', marginTop: '0.5rem' }}>
                Services starting at just $125.
              </strong>
            </p>

            <div className="anim-fade-up d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary pulse-cta">
                <IconPhone />
                Get a Free Quote
              </a>
              <a href="#services" className="btn-outline">
                See Services
                <IconArrow />
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="anim-fade-up d4"
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(245,240,232,0.12)',
              }}
            >
              {[
                { num: '500+', label: 'Jobs Completed' },
                { num: '4.9', label: 'Avg. Rating' },
                { num: 'Same Day', label: 'Service Available' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '2rem',
                      color: 'var(--orange)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.5)',
                      marginTop: '2px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Truck illustration */}
          <div
            className="anim-scale-in d2"
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
          >
            <div style={{ width: '100%', maxWidth: '560px' }}>
              <TruckIllustration />
            </div>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div className="divider-down" style={{ marginTop: '2rem' }} />
      </section>

      {/* ── Accepted Items Banner ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--orange)', padding: '1rem 0', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: '2.5rem',
            whiteSpace: 'nowrap',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.9)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '0 1.5rem',
          }}
        >
          {acceptedItems.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6rem' }}>◆</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="services" style={{ padding: '6rem 1.5rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>
              What We Do
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1,
                color: 'var(--charcoal)',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              Services &amp; Pricing
            </h2>
            <p
              style={{
                color: 'var(--slate)',
                fontSize: '1.05rem',
                marginTop: '1rem',
                maxWidth: '500px',
                lineHeight: 1.65,
              }}
            >
              Straightforward pricing. No hidden fees. We quote before we touch anything.
            </p>
          </div>

          {/* Asymmetric grid: 3 columns top, 3 bottom */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((service, i) => (
              <div key={i} className="service-card" style={{ position: 'relative' }}>
                {service.tag && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'var(--orange)',
                      color: 'white',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 100%, 5px 100%)',
                    }}
                  >
                    {service.tag}
                  </div>
                )}
                <div
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--orange)',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.35rem',
                    letterSpacing: '0.04em',
                    color: 'var(--cream)',
                    margin: '0 0 0.6rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(245,240,232,0.6)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: '0 0 1.5rem',
                  }}
                >
                  {service.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.6rem',
                    color: 'var(--orange)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* Free estimate prompt */}
          <div
            style={{
              marginTop: '3rem',
              padding: '2rem 2.5rem',
              background: 'var(--charcoal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap',
              borderLeft: '5px solid var(--orange)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: 'var(--cream)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Not sure what your job will cost?
              </div>
              <div style={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.95rem', marginTop: '4px' }}>
                Send us a photo or describe your load — we'll give you an estimate in minutes.
              </div>
            </div>
            <a href="#contact" className="btn-primary">
              Get Free Estimate
              <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-up" style={{ background: 'var(--charcoal)', marginTop: '-2px' }} />

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <section
        id="why-us"
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative orange block */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '30%',
            height: '100%',
            background: 'rgba(232,93,4,0.04)',
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
            }}
          >
            {/* Left */}
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>
                The Chappy's Difference
              </div>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: 1,
                  color: 'var(--cream)',
                  margin: '0 0 1.5rem',
                  letterSpacing: '0.02em',
                }}
              >
                Why Thousands<br />
                <span style={{ color: 'var(--orange)' }}>Trust Us</span>
              </h2>
              <p
                style={{
                  color: 'rgba(245,240,232,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 2.5rem',
                  maxWidth: '420px',
                }}
              >
                We're not a franchise or a call center. We're a local, owner-operated business —
                which means the people answering the phone are the same people showing up at your door.
              </p>

              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  'No job too small — single items welcome',
                  'We move heavy items from any floor of your home',
                  'Flexible scheduling including weekends',
                  'We sweep up after ourselves, always',
                  'Donation & recycling drop-offs included at no extra cost',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        background: 'var(--orange)',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      <IconCheck />
                    </div>
                    <span style={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.97rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="feature-bar"
                  style={{
                    borderLeft: '3px solid var(--orange)',
                    paddingLeft: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <div style={{ color: 'var(--orange)' }}>{feat.icon}</div>
                    <h3
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'var(--cream)',
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {feat.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: 'rgba(245,240,232,0.55)',
                      fontSize: '0.93rem',
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>
              Customer Reviews
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1,
                color: 'var(--charcoal)',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              Don't Take Our Word For It
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', color: 'var(--orange)', marginBottom: '1.25rem' }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <IconStar key={si} filled />
                  ))}
                </div>

                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '4rem',
                    color: 'var(--orange)',
                    lineHeight: 0.7,
                    marginBottom: '0.75rem',
                    opacity: 0.4,
                  }}
                >
                  "
                </div>

                <p
                  style={{
                    color: 'var(--charcoal)',
                    fontSize: '0.97rem',
                    lineHeight: 1.7,
                    margin: '0 0 1.5rem',
                    fontStyle: 'italic',
                  }}
                >
                  {t.quote}
                </p>

                <div
                  style={{
                    borderTop: '1px solid rgba(28,28,28,0.1)',
                    paddingTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--charcoal)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: '0.78rem',
                        color: 'var(--slate)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginTop: '2px',
                      }}
                    >
                      {t.location}
                    </div>
                  </div>
                  <div
                    style={{
                      background: 'var(--orange)',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '2px',
                      color: 'white',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.1rem',
                    }}
                  >
                    {t.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating summary */}
          <div
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: '4px', color: 'var(--orange)' }}>
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} filled />)}
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: 'var(--slate)',
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              4.9 out of 5 across 200+ verified reviews
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: 'var(--charcoal)',
          padding: '6rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Orange diagonal accent */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, rgba(232,93,4,0.12) 0%, transparent 60%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--orange)',
          }}
        />

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1.25rem' }}>
            Ready to Reclaim Your Space?
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 0.95,
              color: 'var(--cream)',
              margin: '0 0 1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Call Us Today &mdash;<br />
            <span style={{ color: 'var(--orange)' }}>We Answer Fast.</span>
          </h2>
          <p
            style={{
              color: 'rgba(245,240,232,0.6)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              margin: '0 0 2.5rem',
            }}
          >
            Free estimates, no pressure, no obligation. Describe your load and we'll give you
            a firm price before any work begins. Same-day appointments often available.
          </p>

          <div
            style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}
          >
            <a
              href="tel:+15551234567"
              className="btn-primary pulse-cta"
              style={{ fontSize: '1.1rem', padding: '18px 44px' }}
            >
              <IconPhone />
              (555) 123-4567
            </a>
            <a
              href="mailto:hello@chappysjunk.com"
              className="btn-outline"
              style={{ fontSize: '1.05rem', padding: '16px 36px' }}
            >
              Email Us Instead
            </a>
          </div>

          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '0.8rem',
              color: 'rgba(245,240,232,0.35)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Monday – Saturday &nbsp;·&nbsp; 7am – 7pm &nbsp;·&nbsp; Emergency pickups by arrangement
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#111', padding: '3rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2.5rem',
              marginBottom: '3rem',
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div
                  style={{
                    background: 'var(--orange)',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 100%, 5px 100%)',
                    flexShrink: 0,
                  }}
                >
                  <IconTruck />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.1rem',
                      color: 'var(--cream)',
                      letterSpacing: '0.05em',
                      lineHeight: 1,
                    }}
                  >
                    Chappy's Junk Removal LLC
                  </div>
                </div>
              </div>
              <p
                style={{
                  color: 'rgba(245,240,232,0.4)',
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: '240px',
                }}
              >
                Locally owned and operated. We take pride in serving our community — one haul at a time.
              </p>
            </div>

            {/* Services */}
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--orange)',
                  marginBottom: '1.25rem',
                }}
              >
                Services
              </div>
              {['Single Item Pickup', 'Room Cleanout', 'Full Property Cleanout', 'Yard & Debris Removal', 'Same-Day Service'].map((s) => (
                <div
                  key={s}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '0.88rem',
                    color: 'rgba(245,240,232,0.5)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--orange)',
                  marginBottom: '1.25rem',
                }}
              >
                Contact
              </div>
              <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                (555) 123-4567
              </div>
              <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                hello@chappysjunk.com
              </div>
              <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.88rem', marginBottom: '0.6rem' }}>
                Mon – Sat, 7am – 7pm
              </div>
            </div>

            {/* Service area */}
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--orange)',
                  marginBottom: '1.25rem',
                }}
              >
                We Accept
              </div>
              {['Furniture & Appliances', 'Electronics', 'Yard Waste', 'Construction Debris', 'Hot Tubs & More'].map((item) => (
                <div
                  key={item}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '0.88rem',
                    color: 'rgba(245,240,232,0.5)',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ color: 'var(--orange)', fontSize: '0.5rem' }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid rgba(245,240,232,0.08)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.25)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              © 2025 Chappy's Junk Removal LLC. All rights reserved.
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.2)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Licensed &nbsp;·&nbsp; Insured &nbsp;·&nbsp; Local
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
