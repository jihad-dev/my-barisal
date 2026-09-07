import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  Target, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { label: "সক্রিয় ব্যবহারকারী", value: "৫০,০০০+" },
    { label: "যুক্ত প্রতিষ্ঠান", value: "১,২০০+" },
    { label: "সেবা ক্যাটাগরি", value: "২০+" },
    { label: "পজিটিভ রিভিউ", value: "৯৮%" },
  ];

  const features = [
    {
      icon: Target,
      title: "আমাদের লক্ষ্য",
      description:
        "বরিশালের প্রতিটি মানুষের কাছে জরুরি ও নিত্যপ্রয়োজনীয় সেবাগুলোকে সহজলভ্য ও এক ক্লিকে পৌঁছে দেওয়া।",
    },
    {
      icon: ShieldCheck,
      title: "নির্ভরযোগ্য তথ্য",
      description:
        "আমাদের প্ল্যাটফর্মে থাকা সকল সার্ভিস ও প্রতিষ্ঠানের তথ্য যাচাই-বাছাই করে যুক্ত করা হয়।",
    },
    {
      icon: Heart,
      title: "জনসেবায় নিবেদিত",
      description:
        "রক্তদান, অ্যাম্বুলেন্স, পুলিশ ও ফায়ার সার্ভিসের মতো জরুরি নম্বরগুলো বিনামূল্যে ২৪/৭ অ্যাক্সেসযোগ্য।",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-teal-500/10 top-1/4 -left-40 animate-pulse-slow" />
        <div className="glow-blob w-[400px] h-[400px] bg-cyan-500/10 bottom-10 right-0" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-xs font-semibold tracking-wide uppercase">
              আমাদের সম্পর্কে
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            বরিশালবাসীর জন্য এক{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              স্মার্ট ডিজিটাল ঠিকানা
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            <strong className="text-slate-200">My Barisal</strong> হলো বরিশাল বিভাগের সকল নাগরিক সেবা, জরুরি যোগাযোগ ও ব্যবসা প্রতিষ্ঠানগুলোকে এক ছাতার নিচে নিয়ে আসার একটি আধুনিক উদ্যোগ।
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/40 backdrop-blur-md p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}