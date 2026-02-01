import type { FC } from "react";
import { motion } from "framer-motion";
import { Shield, Star, Users, Trophy } from "lucide-react";

const statsData = [
  {
    icon: Shield,
    label: "Poder Total",
    value: "+5,183M",
    color: "text-neonCyan",
    shadow: "shadow-neonCyan/20",
  },
  {
    icon: Trophy,
    label: "KvK 4 Victory",
    value: "Triunfo Real",
    color: "text-royalGold",
    shadow: "shadow-royalGold/20",
  },
  {
    icon: Star,
    label: "KvK 5 Victory",
    value: "Dominación Star",
    color: "text-neonCyan",
    shadow: "shadow-neonCyan/20",
  },
  {
    icon: Users,
    label: "Migration Status",
    value: "OPEN (T5/ACTIVE)",
    color: "text-red-500",
    shadow: "shadow-red-500/20",
  },
];

const Stats: FC = () => {
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
            (La Prueba del Poder)
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
                {stat.label === "Migration Status"
                  ? "Heavy Fighters Only"
                  : "Alliance Gift: Lvl 20"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
