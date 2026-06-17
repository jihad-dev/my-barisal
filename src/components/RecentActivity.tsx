import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Ambulance, Building, Scale, Shield, Clock, MapPin } from 'lucide-react';
import { recentActivities } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  blood: Droplets,
  ambulance: Ambulance,
  hospital: Building,
  law: Scale,
  police: Shield,
};

const colorMap: Record<string, string> = {
  blood: 'text-rose-400 bg-rose-500/10',
  ambulance: 'text-orange-400 bg-orange-500/10',
  hospital: 'text-emerald-400 bg-emerald-500/10',
  law: 'text-violet-400 bg-violet-500/10',
  police: 'text-blue-400 bg-blue-500/10',
};

export default function RecentActivity() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(20, 184, 166, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="glow-blob w-[500px] h-[500px] bg-primary-500/15 -top-60 -left-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-medium mb-4 block">লাইভ আপডেট</span>
            <h2 className="section-title text-left mb-6">
              সর্বশেষ{' '}
              <span className="gradient-text">সেবা কার্যক্রম</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              বরিশাল জেলায় চলমান সেবা কার্যক্রমের রিয়েল-টাইম আপডেট। সবকিছু জানুন মুহূর্তেই।
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-white">২৪/৭</div>
                <div className="text-slate-400 text-sm">সার্বিক সেবা</div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="text-2xl font-bold text-white">৫ মিনিট</div>
                <div className="text-slate-400 text-sm">গড় রেসপন্স টাইম</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Activity Feed */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {recentActivities.map((activity, index) => {
              const Icon = iconMap[activity.type] || Building;
              const colorClass = colorMap[activity.type] || 'text-slate-400 bg-slate-500/10';

              return (
                <motion.div
                  key={activity.id}
                  className="glass-card rounded-xl p-4 hover:border-primary-500/30 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg ${colorClass} shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white leading-relaxed mb-2">
                        {activity.message}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {activity.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {activity.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* View More */}
            <motion.button
              className="w-full py-3 text-center text-primary-400 hover:text-primary-300 font-medium rounded-xl border border-slate-700/50 hover:border-primary-500/50 transition-all glass-card"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              সকল আপডেট দেখুন
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
