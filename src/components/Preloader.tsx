import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
    >
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-blob w-[350px] h-[350px] bg-teal-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Brand Logo Icon */}
        <div className="relative">
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur-md opacity-70"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />

          <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-emerald-400 to-cyan-300 font-black text-3xl">
              ম
            </span>
            <Sparkles className="absolute -top-1.5 -right-1.5 w-4 h-4 text-teal-400 animate-pulse" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            My <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Barisal</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-1">
            ডিজিটাল সেবা পোর্টাল
          </p>
        </div>

        {/* Progress Bar Loader */}
        <div className="w-48 h-1.5 bg-slate-900 rounded-full border border-slate-800 overflow-hidden mt-2">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}