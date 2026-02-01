import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const MigrationButton: FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 left-6 z-[100] hidden md:block"
    >
      <motion.button
        onClick={() =>
          document
            .getElementById("discord-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 1)" }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-2 bg-royalGold/90 backdrop-blur-md text-dark px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
      >
        <Zap className="w-3.5 h-3.5 fill-current" />
        {t("hero.cta")}
      </motion.button>
    </motion.div>
  );
};

export default MigrationButton;
