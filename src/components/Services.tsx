import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="glow-blob w-[600px] h-[600px] bg-primary-500/10 top-1/2 -translate-y-1/2 -right-60" />
        <div className="glow-blob w-[400px] h-[400px] bg-cyan-500/10 bottom-0 left-0" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-400 font-medium mb-4 block">আমাদের সেবাসমূহ</span>
          <h2 className="section-title">
            যে সেবাগুলো আপনার{' '}
            <span className="gradient-text">দৈনন্দিন জীবনে</span> প্রয়োজন
          </h2>
          <p className="section-subtitle mt-6">
            জরুরি প্রয়োজনে সঠিক সেবা খুঁজে পান সহজেই। সকল সেবা এক প্ল্যাটফর্মে।
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className={`service-card group cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                style={{
                  boxShadow: `0 10px 40px -10px var(--tw-shadow-${service.shadowColor}-500)`,
                }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                <div className="text-slate-500 text-sm">
                  মোট <span className="text-white font-semibold">{service.count.toLocaleString('bn-BD')}</span> টি প্রতিষ্ঠান
                </div>
                <div className="flex items-center gap-1 text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>বিস্তারিত</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-400 mb-4">
            আরো কোন সেবা প্রয়োজন? আমাদের জানান।
          </p>
          <a href="#contact" className="btn-secondary">
            <span>যোগাযোগ করুন</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
