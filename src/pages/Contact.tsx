import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter, Youtube, Check, Lock, CheckCircle, Heart } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'I want to donate',
    message: '',
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-animate > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-grid', start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    const formEl = e.target as HTMLFormElement
    const data = new FormData(formEl)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      })
      setFormState('success')
      setFormData({ name: '', email: '', phone: '', subject: 'I want to donate', message: '' })
    } catch {
      setFormState('error')
    }
  }

  return (
    <div ref={sectionRef}>
      {/* Contact Hero */}
      <section className="relative min-h-[50vh] bg-golden-hour flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <span className="text-label text-deep-forest/70 tracking-[0.2em]">GET IN TOUCH</span>
          <h1 className="text-heading text-deep-forest mt-4" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            We'd love to<br />hear from you
          </h1>
          <p className="text-deep-forest/80 mt-6 max-w-[520px] mx-auto leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Whether you want to donate, volunteer, partner with us, or simply learn more — reach out and let's make a difference together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-warm-cream section-padding">
        <div className="contact-grid contact-animate content-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-deep-forest">Thank you!</h3>
                <p className="text-off-black/70 mt-3 max-w-sm">
                  Your message has been sent. We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="link-arrow text-golden-hour hover:text-deep-forest mt-6 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display font-bold text-2xl md:text-[28px] text-deep-forest">
                  Send us a message
                </h2>
                <p className="text-muted-sage text-sm mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Hidden inputs for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all"
                    />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all appearance-none cursor-pointer"
                    >
                      <option>I want to donate</option>
                      <option>I want to volunteer</option>
                      <option>Partnership inquiry</option>
                      <option>General inquiry</option>
                      <option>Prayer request</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-warm-cream border border-warm-sand rounded-lg px-4 py-3.5 text-off-black placeholder:text-muted-sage focus:border-golden-hour focus:outline-none focus:ring-2 focus:ring-golden-hour/15 transition-all resize-none"
                  />

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {formState === 'error' && (
                    <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Right — Contact Info + Donation */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-display font-bold text-xl text-deep-forest">
                Contact Information
              </h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-teal-accent mt-0.5 flex-shrink-0" />
                  <span className="text-off-black">P.O. Box 28, 80202, Watamu, Kenya</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="tel:+254742287771" className="text-off-black hover:text-golden-hour transition-colors">+254 742 287 771</a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="https://wa.me/254725917676" target="_blank" rel="noopener noreferrer" className="text-off-black hover:text-golden-hour transition-colors">+254 725 917 676</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-teal-accent flex-shrink-0" />
                  <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour hover:underline">info@ultimatewings.co.ke</a>
                </div>
              </div>
            </div>

            {/* Donation Card */}
            <div className="bg-deep-forest rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-cream-white">
                Make a Donation
              </h3>
              <p className="text-cream-white/75 text-sm mt-3 leading-relaxed">
                Your generosity directly supports children and families in Kenya. Every donation creates lasting change.
              </p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-8 py-3.5 rounded-pill bg-golden-hour text-deep-forest font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#D9A33A]"
              >
                Donate Securely &rarr;
              </a>
              <div className="flex flex-wrap items-center gap-4 mt-5 text-cream-white/50 text-xs">
                <span className="flex items-center gap-1"><Lock size={12} /> Secure Payment</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Tax Deductible</span>
                <span className="flex items-center gap-1"><Heart size={12} /> 100% to Programs</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-muted-sage text-sm font-medium mb-3">Follow our journey</p>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-deep-forest hover:text-golden-hour transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
