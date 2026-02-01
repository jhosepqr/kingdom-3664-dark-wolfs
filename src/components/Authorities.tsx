import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  MessageSquare,
  Sword,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Authorities: FC = () => {
  const { t } = useTranslation();

  const council = [
    {
      role: t("council.leadership"),
      members: ["BADO", "YÜZBAŞI"],
      icon: ShieldCheck,
      desc: t("council.leadership_desc"),
    },
    {
      role: t("council.the_council"),
      members: ["HAKAN", "CROM", "BARBA"],
      icon: MessageSquare,
      desc: t("council.the_council_desc"),
    },
    {
      role: t("council.war_strategy"),
      members: ["Elite Tacticians"],
      icon: Sword,
      desc: t("council.war_strategy_desc"),
    },
    {
      role: t("council.logistics"),
      members: ["Support Team"],
      icon: Calendar,
      desc: t("council.logistics_desc"),
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-dark to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
            THE{" "}
            <span className="text-royalGold gold-glow underline decoration-neonCyan/30 underline-offset-4">
              {t("council.title").replace("THE ", "")}
            </span>
          </h2>
          <p className="text-slate-400 mt-4 uppercase text-sm tracking-widest">
            {t("council.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {council.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.15)",
                borderColor: "rgba(212, 175, 55, 0.4)",
              }}
              className="glass-card p-8 group border border-white/5 bg-gradient-to-br from-white/10 to-transparent flex items-start gap-6"
            >
              <div className="p-4 rounded-xl bg-royalGold/10 border border-royalGold/20 group-hover:bg-royalGold/20 transition-colors">
                <c.icon className="w-8 h-8 text-royalGold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                  {c.role}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {c.members.map((m, i) => (
                    <span
                      key={i}
                      className="bg-neonCyan/10 border border-neonCyan/20 text-neonCyan text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm italic">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="discord-section"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <button className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 hover:shadow-indigo-500/50 uppercase tracking-widest text-lg">
            {t("council.discord")}
            <ExternalLink className="w-6 h-6" />
          </button>
          <p className="mt-6 text-slate-500 text-xs tracking-widest uppercase">
            {t("council.copyright")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Authorities;
