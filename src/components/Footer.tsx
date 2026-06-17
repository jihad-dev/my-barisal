import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'হাসপাতাল', href: '#' },
    { label: 'অ্যাম্বুলেন্স', href: '#' },
    { label: 'আইনি সেবা', href: '#' },
    { label: 'পুলিশ সেবা', href: '#' },
    { label: 'রক্তদান', href: '#' },
  ],
  company: [
    { label: 'আমাদের সম্পর্কে', href: '#about' },
    { label: 'যোগাযোগ', href: '#contact' },
    { label: 'গোপনীয়তা নীতি', href: '#' },
    { label: 'শর্তাবলী', href: '#' },
  ],
  support: [
    { label: 'সাহায্য কেন্দ্র', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'ফিডব্যাক', href: '#' },
    { label: 'অভিযোগ', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 pt-20 pb-8">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="inline-flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <span className="text-white font-bold text-lg">ম</span>
                </div>
                <span className="text-xl font-bold text-white">
                  My <span className="gradient-text">Barisal</span>
                </span>
              </a>

              <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
                বরিশালের সকল জরুরি সেবা ও প্রয়োজনীয় তথ্য এক প্ল্যাটফর্মে। আপনার সেবায় সর্বদা প্রতিশ্রুতিবদ্ধ।
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Phone size={18} />
                  <span>+৮৮০ ১৭XX-XXXXXXX</span>
                </a>
                <a
                  href="mailto:info@mybarisal.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={18} />
                  <span>info@mybarisal.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} />
                  <span>বরিশাল, বাংলাদেশ</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">কোম্পানি</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">সাপোর্ট</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} My Barisal। সর্বস্বত্ব সংরক্ষিত।
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800/50 hover:bg-primary-500/20 border border-slate-700/50 hover:border-primary-500/50 flex items-center justify-center text-slate-400 hover:text-primary-400 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
