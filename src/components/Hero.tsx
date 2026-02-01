import type { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-neonCyan/20 blur-[60px] rounded-full animate-pulse-slow"></div>
        <img
          src="https://ml.globenewswire.com/Resource/Download/ddb302b3-700d-4ed9-8b18-6d1fa6c2ca13"
          alt="Dark Wolfs Logo"
          className="w-48 md:w-64 h-auto relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter italic">
          <span className="text-white">KINGDOM 3664:</span> <br />
          <span className="text-neonCyan neon-glow underline decoration-royalGold/50 underline-offset-8">
            THE DARK WOLFS DOMINION
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed italic">
          "Una hermandad forjada en el fuego de la traición y bautizada en la
          gloria de la victoria. <br />
          <span className="text-royalGold">
            No aceptamos menos que la excelencia.
          </span>
          "
        </p>

        <motion.button
          onClick={() =>
            document
              .getElementById("discord-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-royalGold text-dark font-bold py-4 px-10 rounded-full text-xl shadow-[0_0_15px_rgba(212, 175, 55, 0.2)] transition-all uppercase tracking-widest border-2 border-royalGold hover:bg-transparent hover:text-royalGold"
        >
          SOLICITAR MIGRACIÓN
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
