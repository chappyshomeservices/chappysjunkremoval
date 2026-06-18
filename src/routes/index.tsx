import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-amber-500 selection:text-zinc-950">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo Section (Recreated in Gold/Gray) */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex flex-col items-center justify-center bg-zinc-900 shadow-md shadow-amber-500/10 shrink-0">
              {/* House Icon */}
              <svg className="w-5 h-5 text-amber-500 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-[7px] font-black tracking-wider text-amber-400 uppercase leading-none">Chappys</span>
            </div>
            <div>
              <span className="text-sm font-black tracking-tight text-zinc-100 block uppercase">
                CHAPPYS <span className="text-amber-500">HOME SERVICES</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase block -mt-1">
                Junk Removal LLC
              </span>
            </div>
          </div>

          {/* Navigation Link */}
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#why-us" className="text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors">
              WHY US
            </a>
          </nav>

          {/* Call Action Button */}
          <a 
            href="tel:7065550100" 
            className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-black text-xs tracking-wider uppercase px-4 py-2.5 rounded-md flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-amber-500/10"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.82 18 2 12.18 2 5V3z" />
            </svg>
            CALL NOW
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-4 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold text-zinc-300 tracking-wide uppercase">Premium Property Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-100 uppercase leading-none">
              WE HAUL IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600">
                ALL AWAY.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              One item or an entire property — Chappys Junk Removal LLC shows up on time, does the heavy lifting, and leaves your space clean.
            </p>

            <div className="p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl inline-block">
              <p className="text-sm text-zinc-400 font-medium">
                Professional residential & commercial removal starting at just{' '}
                <span className="text-amber-400 font-black text-lg">$125</span>.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#quote" 
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-black text-sm tracking-wide uppercase px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                GET A FREE QUOTE
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 text-zinc-300 font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                SEE SERVICES
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Right Visual Element */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-amber-500/5 rounded-full filter blur-3xl" />
            <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase">Service Coverage</span>
                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">CSRA Region</span>
              </div>
              
              {/* Truck Graphic Representation */}
              <div className="h-32 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800/50 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-zinc-800/30 dynamic-diagonal" />
                <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 16c1.657 0 3-1.343 3-3V9a1 1 0 00-1-1h-3.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0014.586 6H3a1 1 0 00-1 1v7a3 3 0 003 3h14zM5 16a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="text-amber-500">✓</span> Fully Licensed & Insured LLC
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="text-amber-500">✓</span> Residential & Commercial Portals
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* STATS SECTION */}
        <section id="why-us" className="mt-24 border-t border-zinc-900 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            <div className="bg-zinc-900/30 border border-zinc-900 p-6 rounded-xl text-center space-y-1">
              <p className="text-4xl font-black text-zinc-100 tracking-tight">500+</p>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">JOBS COMPLETED</p>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-900 p-6 rounded-xl text-center space-y-1">
              <p className="text-4xl font-black text-amber-500 tracking-tight flex items-center justify-center gap-1">
                4.9 
                <span className="text-xl text-amber-500">★</span>
              </p>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">AVG. RATING</p>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-900 p-6 rounded-xl text-center space-y-1">
              <p className="text-4xl font-black text-zinc-100 tracking-tight uppercase">SAME DAY</p>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">SERVICE AVAILABLE</p>
            </div>

          </div>
        </section>
      </main>

    </div>
  )
}
