import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-golden-hour section-padding"
    >
      <div className="cta-content content-max-width mx-auto text-center max-w-[800px]">
        <h2 className="text-heading text-deep-forest" style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}>
          Every donation<br />creates a ripple of hope
        </h2>
        <p className="text-deep-forest/85 mt-6 max-w-[560px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
          Join us in transforming lives. Your generosity provides education, shelter, healthcare, and dignity to those who need it most in Kenya.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-pill bg-deep-forest text-cream-white font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-deep-earth hover:-translate-y-0.5 hover:shadow-lg"
          >
            Donate Now
          </Link>
          <Link
            to="/contact"
            className="btn-secondary border-deep-forest text-deep-forest hover:bg-deep-forest/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
