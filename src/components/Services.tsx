import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-teal-500/10 top-1/3 -right-40 animate-pulse-slow" />
        <div className="glow-blob w-[450px] h-[450px] bg-cyan-500/10 bottom-10 -left-40" />
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
              আমাদের সেবাসমূহ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            যে সেবাগুলো আপনার{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              দৈনন্দিন জীবনে
            </span>{" "}
            প্রয়োজন
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            জরুরি প্রয়োজনে সঠিক সেবা খুঁজে পান সহজেই। সকল ডিজিটাল সেবা এক
            প্ল্যাটফর্মে।
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 hover:border-teal-500/50 backdrop-blur-md rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10"
            >
              {/* Card Upper Section */}
              <div>
                {/* Icon Wrapper */}
                <div className="relative mb-6 inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-300" />
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom Stats & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-auto">
                <div className="text-slate-400 text-xs sm:text-sm font-medium">
                  মোট{" "}
                  <span className="text-white font-bold text-base">
                    {service.count.toLocaleString("bn-BD")}
                  </span>{" "}
                  টি প্রতিষ্ঠান
                </div>

                <div className="flex items-center gap-1.5 text-teal-400 text-sm font-semibold group-hover:text-teal-300 transition-all">
                  <span>বিস্তারিত</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA Box */}
        <motion.div
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 text-center relative overflow-hidden max-w-3xl mx-auto shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2">
              অন্য কোনো জরুরি সেবা খুঁজছেন?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              আপনার প্রয়োজনীয় সেবা যুক্ত করতে বা যেকোনো ফিডব্যাক দিতে আমাদের
              সাথে যোগাযোগ করুন।
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700/80 hover:text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>যোগাযোগ করুন</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
