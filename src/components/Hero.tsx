import type { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Target, Zap } from "lucide-react";

const Hero: FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanline"></div>
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-neonCyan/5 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-royalGold/5 blur-[80px] md:blur-[120px] rounded-full"></div>
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full"
      >
        {/* Superior Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12"
        >
          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-neonCyan"></div>
          <span className="text-neonCyan text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.5em] uppercase whitespace-nowrap">
            Est. 2024 • M3664 Elite
          </span>
          <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-neonCyan"></div>
        </motion.div>

        {/* Logo Container with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 md:mb-16 flex items-center justify-center group"
        >
          {/* Rotating Tech Rings - Resized for mobile */}
          <div className="absolute w-48 h-48 md:w-72 md:h-72 border border-neonCyan/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-56 h-56 md:w-80 md:h-80 border-t-2 border-r-2 border-royalGold/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          <div className="relative z-10">
            <div className="absolute inset-0 bg-neonCyan/20 blur-[40px] md:blur-[80px] rounded-full group-hover:bg-neonCyan/40 transition-colors duration-700"></div>
            <img
              src="https://ml.globenewswire.com/Resource/Download/ddb302b3-700d-4ed9-8b18-6d1fa6c2ca13"
              alt="Dark Wolfs Logo"
              className="w-40 md:w-64 h-auto relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] md:drop-shadow-[0_0_50px_rgba(34,211,238,0.6)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Cinematic Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-2"
        >
          <h1 className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-8 leading-none">
            <span className="text-4xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-2xl">
              DARK WOLFS
            </span>
            <span className="text-gradient-gold gold-glow uppercase text-xl md:text-5xl font-black italic tracking-tight leading-normal">
              {t("hero.subtitle")}
            </span>
          </h1>
        </motion.div>

        {/* Description with Tech Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative max-w-2xl mx-auto mb-8 md:mb-12 px-4"
        >
          <p className="text-sm md:text-xl text-slate-300 font-light leading-relaxed italic uppercase tracking-wide">
            {t("hero.description")}
          </p>
          <div className="absolute -left-2 md:-left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neonCyan to-transparent opacity-50"></div>
          <div className="absolute -right-2 md:-right-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neonCyan to-transparent opacity-50"></div>
        </motion.div>

        {/* Premium Action Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-8 md:gap-10"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("discord-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-royalGold text-dark font-black py-4 px-8 md:py-5 md:px-12 rounded-sm text-lg md:text-xl transition-all uppercase tracking-widest overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              {t("hero.cta")}
              <Zap className="w-5 h-5 fill-current" />
            </span>
          </motion.button>

          <div className="flex gap-12 md:gap-16 text-slate-400">
            <div className="flex flex-col items-center">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-neonCyan mb-2" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
                Honor
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-neonCyan mb-2" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase opacity-70">
                Strategy
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
