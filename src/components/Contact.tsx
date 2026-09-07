import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "হেল্পলাইন",
      value: "+৮৮০ ১৭০০-০০০০০০",
      subText: "সকাল ৯:০০ - রাত ১০:০০",
    },
    {
      icon: Mail,
      title: "ইমেইল করুন",
      value: "support@mybarisal.com",
      subText: "২৪ ঘন্টার মধ্যে রেসপন্স",
    },
    {
      icon: MapPin,
      title: "প্রধান কার্যালয়",
      value: "সদর রোড, বরিশাল",
      subText: "বরিশাল ৪০০০, বাংলাদেশ",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24  bg-slate-950 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[500px] h-[500px] bg-emerald-500/10 top-1/3 -left-40 animate-pulse-slow" />
        <div className="glow-blob w-[450px] h-[450px] bg-teal-500/10 bottom-10 -right-40" />
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
              যোগাযোগ করুন
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            যেকোনো প্রয়োজনে{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
              আমাদের সাথেই থাকুন
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            নতুন সার্ভিস যুক্ত করতে, আপনার মতামত জানাতে বা যেকোনো সহায়তার জন্য
            মেসেজ দিন।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactDetails.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl flex items-start gap-4 hover:border-teal-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <div className="text-white font-bold text-lg mt-0.5">
                    {item.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 flex items-center gap-1">
                    <Clock size={12} />
                    <span>{item.subText}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Info Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 border border-slate-800">
              <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-teal-400" />
                জরুরি নোটিশ
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                রক্তদান বা অ্যাম্বুলেন্স সংক্রান্ত জরুরি সেবার জন্য আমাদের
                ওয়েবসাইটে দেয়া সরাসরি ফোন নম্বরে কল করার অনুরোধ করা হচ্ছে।
              </p>
            </div>
          </motion.div>

          {/* Right Side: Message Form */}
          <motion.div
            className="lg:col-span-7 bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">ধন্যবাদ!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা খুব শীঘ্রই আপনার
                  সাথে যোগাযোগ করব।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="আপনার নাম লিখুন"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold mb-2">
                      মোবাইল নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="০১৭০০-০০০০০"
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold mb-2">
                    বার্তা / মেসেজ *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="আপনার বার্তাটি বিস্তারিত লিখুন..."
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-teal-500/80 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 active:scale-[0.99] transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>মেসেজ পাঠান</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
