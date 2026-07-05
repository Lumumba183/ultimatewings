import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', path: '/#about' },
  { label: 'Our Programs', path: '/#programs' },
  { label: 'Impact Stories', path: '/blog' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const getInvolved = [
  { label: 'Donate', path: '/contact' },
  { label: 'Partner With Us', path: '/contact' },
  { label: 'Volunteer', path: '/contact' },
  { label: 'Fundraise', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-cream-white">
      <div className="content-max-width mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-display font-bold text-xl text-cream-white">ULTIMATE WINGS</span>
              <span className="text-label text-golden-hour mt-1">KENYA</span>
            </div>
            <p className="text-cream-white/60 text-sm leading-relaxed max-w-[280px]">
              Restoring hope among vulnerable children and communities across Kenya.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-cream-white/60 hover:text-golden-hour transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-cream-white/60 text-sm hover:text-cream-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-cream-white/60 text-sm hover:text-cream-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-widest text-cream-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-accent mt-0.5 flex-shrink-0" />
                <span className="text-cream-white/60 text-sm">P.O. Box 28, 80202<br />Watamu, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-accent flex-shrink-0" />
                <a href="tel:+254742287771" className="text-golden-hour text-sm hover:underline">+254 742 287 771</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-accent flex-shrink-0" />
                <a href="mailto:info@ultimatewings.co.ke" className="text-golden-hour text-sm hover:underline">info@ultimatewings.co.ke</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream-white/40 text-xs">
            &copy; 2026 Ultimate Wings Kenya. All rights reserved.
          </p>
          <p className="text-cream-white/40 text-xs">
            Registered PBO in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
