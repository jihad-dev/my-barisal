import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Download, Smartphone, Star } from 'lucide-react';
import { stats } from '../data/services';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(value * easeOutQuart);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('bn-BD')}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glow blobs */}
        <div className="glow-blob w-[500px] h-[500px] bg-primary-500/30 top-0 -left-20 animate-pulse-slow" />
        <div className="glow-blob w-[400px] h-[400px] bg-cyan-500/20 top-1/4 right-0 animate-float" />
        <div className="glow-blob w-[600px] h-[600px] bg-teal-500/15 bottom-0 left-1/3" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Star size={16} className="text-accent-400" />
            <span className="text-slate-300 text-sm">বরিশালের #১ সেবা অ্যাপ</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="section-title text-balance mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            বরিশালের সকল জরুরি সেবা{' '}
            <span className="gradient-text">এক জায়গায়</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            হাসপাতাল, অ্যাম্বুলেন্স, আইনি সেবা, পুলিশ ও রক্তদান সেবা - সবার জন্য সহজ ও দ্রুত
            প্রবেশযোগ্য। যেকোনো জরুরি প্রয়োজনে আপনার পাশে মাই বরিশাল।
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#download" className="btn-primary group">
              <Download size={20} className="group-hover:animate-bounce" />
              <span>অ্যাপ ডাউনলোড করুন</span>
            </a>
            <a href="#services" className="btn-secondary group">
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              <span>সেবাসমূহ দেখুন</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 md:p-6 gradient-border"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* App Preview */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-xs">
              {/* Phone mockup */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl shadow-primary-500/10">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-full" />
                <div className="w-full aspect-[9/19] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden">
                  {/* Fake app content */}
                  <div className="p-4 space-y-3">
                    <div className="h-8 w-24 bg-gradient-to-r from-primary-500 to-primary-400 rounded-lg" />
                    <div className="h-4 w-full bg-slate-700 rounded" />
                    <div className="h-4 w-3/4 bg-slate-700/50 rounded" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-slate-700/30 rounded-xl flex items-center justify-center"
                        >
                          <div className="w-8 h-8 rounded-full bg-slate-600/30" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -left-16 top-1/4 glass-card rounded-xl p-3 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Building className="w-8 h-8 text-emerald-400" />
              </motion.div>
              <motion.div
                className="absolute -right-12 top-1/3 glass-card rounded-xl p-3 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Ambulance className="w-8 h-8 text-orange-400" />
              </motion.div>
              <motion.div
                className="absolute -left-8 bottom-1/4 glass-card rounded-xl p-3 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Droplets className="w-6 h-6 text-rose-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-primary-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Import these at the top
import { Building, Ambulance, Droplets } from 'lucide-react';
