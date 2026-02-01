import type { FC } from "react";
import { motion } from "framer-motion";
import { Shield, Star, Users, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const Stats: FC = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      icon: Shield,
      label: t('stats.power'),
      value: "+5,183M",
      color: "text-neonCyan",
      shadow: "shadow-neonCyan/20",
    },
    {
      icon: Trophy,
      label: t('stats.kvk4'),
      value: t('stats.kvk4_val'),
      color: "text-royalGold",
      shadow: "shadow-royalGold/20",
    },
    {
      icon: Star,
      label: t('stats.kvk5'),
      value: t('stats.kvk5_val'),
      color: "text-neonCyan",
      shadow: "shadow-neonCyan/20",
    },
    {
      icon: Users,
      label: t('stats.migration'),
      value: t('stats.open'),
      color: "text-red-500",
      shadow: "shadow-red-500/20",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold italic text-royalGold gold-glow uppercase tracking-widest">
            {t('stats.title')}
          </h2>
          <div className="w-24 h-1 bg-royalGold mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(212, 175, 55, 0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`glass-card p-8 flex flex-col items-center text-center group border-t-2 ${stat.color === "text-neonCyan" ? "border-t-neonCyan/50" : stat.color === "text-red-500" ? "border-t-red-500/50" : "border-t-royalGold/50"}`}
            >
              <stat.icon
                className={`w-10 h-10 mb-4 ${stat.color} group-hover:scale-110 transition-transform`}
              />
              <span className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                {stat.label}
              </span>
              <span className={`text-2xl md:text-3xl font-black ${stat.color}`}>
                {stat.value}
              </span>
              <p className="text-[10px] mt-2 text-slate-500 uppercase">
                {stat.label === t('stats.migration')
                  ? t('stats.heavy')
                  : t('stats.gift')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
