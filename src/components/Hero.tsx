
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Download, Star, Building, Ambulance, Droplets } from "lucide-react";
import { stats } from "../data/services";
import heroImg from "../../public/hero.jpg";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      {count.toLocaleString("bn-BD")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.08) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(20, 184, 166, 0.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="glow-blob w-[500px] h-[500px] bg-teal-500/20 top-0 -left-20 animate-pulse-slow" />
        <div className="glow-blob w-[400px] h-[400px] bg-cyan-500/15 top-1/4 right-0 animate-float" />
        <div className="glow-blob w-[600px] h-[600px] bg-emerald-500/10 bottom-0 left-1/3" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md mb-6 shadow-lg shadow-teal-500/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Star size={16} className="text-amber-400 fill-amber-400" />
            <span className="text-slate-200 text-xs sm:text-sm font-medium">
              বরিশালের #১ ডিজিটাল সেবা অ্যাপ
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            বরিশালের সকল জরুরি সেবা{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              এক জায়গায়
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-slate-400 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            হাসপাতাল, অ্যাম্বুলেন্স, আইনি সেবা, পুলিশ ও রক্তদান সেবা - সবার জন্য
            সহজ ও দ্রুত প্রবেশযোগ্য। যেকোনো জরুরি প্রয়োজনে আপনার পাশে মাই বরিশাল।
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
        <a
  href="https://play.google.com/store/apps/details?id=com.mybarisal.app&pcampaignid=web_share"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 group"
>
  <Download size={20} className="group-hover:animate-bounce" />
  <span>অ্যাপ ডাউনলোড করুন</span>
</a>
            
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all duration-300 hover:text-white hover:-translate-y-0.5 group"
            >
              <Play
                size={18}
                className="fill-slate-200 group-hover:scale-110 transition-transform"
              />
              <span>সেবাসমূহ দেখুন</span>
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl hover:border-slate-700/80 transition-colors"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* App Preview Frame */}
          <motion.div
            className="mt-16 sm:mt-20 relative"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-xs">
              
              {/* Device Frame */}
              <div className="w-full aspect-[9/19] bg-slate-900 rounded-[2.5rem] p-3 border-4 border-slate-800 shadow-2xl relative">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                  <img
                    src={heroImg}
                    alt="App UI Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Service Badges */}
              <motion.div
                className="absolute -left-10 sm:-left-16 top-1/4 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-3 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
              </motion.div>

              <motion.div
                className="absolute -right-8 sm:-right-12 top-1/3 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-3 shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Ambulance className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
              </motion.div>

              <motion.div
                className="absolute -left-6 sm:-left-8 bottom-1/4 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-3 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-teal-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
