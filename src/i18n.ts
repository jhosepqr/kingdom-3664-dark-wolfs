import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      hero: {
        title: "DARK WOLFS",
        subtitle: "KINGDOM 3664 • DOMINANCE & LOYALTY",
        description:
          "The most disciplined alliance in M3664. We fight with honor, we win with strategy. Join the elite.",
        cta: "APPLY FOR MIGRATION",
      },
      stats: {
        title: "(THE PROOF OF POWER)",
        power: "Total Power",
        kvk4: "KvK 4 Victory",
        kvk5: "KvK 5 Victory",
        migration: "Migration Status",
        gift: "Alliance Gift: Lvl 20",
        heavy: "Heavy Fighters Only",
        kvk4_val: "Royal Triumph",
        kvk5_val: "Star Dominance",
        open: "OPEN (T5/ACTIVE)",
        power_desc: "Elite Rank 1",
        kvk_desc: "Heroic Anthem Winners",
        strat_desc: "Strategy Masters",
      },
      council: {
        title: "THE IRON COUNCIL",
        subtitle: "High command of the Dark Wolfs",
        leadership: "Leadership",
        leadership_desc: "M3664 Lead & General Direction",
        the_council: "The Council",
        the_council_desc: "R4 Council & Strategic Decisions",
        war_strategy: "War Strategy",
        war_strategy_desc: "KvK and open field tactical planning",
        logistics: "Events & Logistics",
        logistics_desc: "Reward management and operations",
        discord: "JOIN OFFICIAL DISCORD",
        copyright: "© Kingdom 3664 • Dark Wolfs Dominion",
      },
    },
  },
  es: {
    translation: {
      hero: {
        title: "DARK WOLFS",
        subtitle: "REINO 3664 • DOMINIO Y LEALTAD",
        description:
          "La alianza más disciplinada de M3664. Luchamos con honor, ganamos con estrategia. Únete a la élite.",
        cta: "SOLICITAR MIGRACIÓN",
      },
      stats: {
        title: "(LA PRUEBA DEL PODER)",
        power: "Poder Total",
        kvk4: "Victoria KvK 4",
        kvk5: "Victoria KvK 5",
        migration: "Estado de Migración",
        gift: "Regalo de Alianza: Lvl 20",
        heavy: "Solo Guerreros Activos",
        kvk4_val: "Triunfo Real",
        kvk5_val: "Dominación Star",
        open: "ABIERTA (T5/ACTIVO)",
        power_desc: "Rango Elite 1",
        kvk_desc: "Ganadores Anthem Heroico",
        strat_desc: "Maestros Estrategas",
      },
      council: {
        title: "EL CONSEJO DE HIERRO",
        subtitle: "Alto mando de los Dark Wolfs",
        leadership: "Liderazgo",
        leadership_desc: "Líder M3664 y Dirección General",
        the_council: "El Consejo",
        the_council_desc: "Consejo R4 y Decisiones Estratégicas",
        war_strategy: "Estrategia de Guerra",
        war_strategy_desc: "Planificación táctica de KvK y campo abierto",
        logistics: "Eventos y Logística",
        logistics_desc: "Gestión de recompensas y operatividad",
        discord: "ÚNETE AL DISCORD OFICIAL",
        copyright: "© Reino 3664 • Dominio Dark Wolfs",
      },
    },
  },
  tr: {
    translation: {
      hero: {
        title: "DARK WOLFS",
        subtitle: "KRALLIK 3664 • HAKIMIYET VE SADAKAT",
        description:
          "M3664'ün en disiplinli ittifakı. Onurumuzla savaşır, stratejimizle kazanırız. Seçkinlere katılın.",
        cta: "GÖÇ BAŞVURUSU YAP",
      },
      stats: {
        title: "(GÜCÜN KANITI)",
        power: "Toplam Güç",
        kvk4: "KvK 4 Galibiyeti",
        kvk5: "KvK 5 Galibiyeti",
        migration: "Göç Durumu",
        gift: "İttifak Hediyesi: Seviye 20",
        heavy: "Sadece Aktif Savaşçılar",
        kvk4_val: "Kraliyet Zaferi",
        kvk5_val: "Yıldız Hakimiyeti",
        open: "AÇIK (T5/AKTIF)",
        power_desc: "Seçkin Kademe 1",
        kvk_desc: "Kahramanlık Marşı Galibi",
        strat_desc: "Strateji Ustaları",
      },
      council: {
        title: "DEMİR KONSEYİ",
        subtitle: "Dark Wolfs yüksek komutası",
        leadership: "Liderlik",
        leadership_desc: "M3664 Lideri ve Genel Yönetim",
        the_council: "Konsey",
        the_council_desc: "R4 Konseyi ve Stratejik Kararlar",
        war_strategy: "Savaş Stratejisi",
        war_strategy_desc: "KvK ve açık alan taktik planlama",
        logistics: "Etkinlikler ve Lojistik",
        logistics_desc: "Ödül yönetimi ve operasyonlar",
        discord: "RESMİ DISCORD'A KATIL",
        copyright: "© Krallık 3664 • Dark Wolfs Hakimiyeti",
      },
    },
  },
  ru: {
    translation: {
      hero: {
        title: "DARK WOLFS",
        subtitle: "КОРОЛЕВСТВО 3664 • ГОСПОДСТВО И ВЕРНОСТЬ",
        description:
          "Самый дисциплинированный альянс в M3664. Мы сражаемся с честью, мы побеждаем со стратегией. Присоединяйтесь к элите.",
        cta: "ПОДАТЬ ЗАЯВКУ НА МИГРАЦИЮ",
      },
      stats: {
        title: "(ДОКАЗАТЕЛЬСТВО СИЛЫ)",
        power: "Общая мощь",
        kvk4: "Победа в KvK 4",
        kvk5: "Победа в KvK 5",
        migration: "Статус миграции",
        gift: "Подарок альянса: ур. 20",
        heavy: "Только для активных бойцов",
        kvk4_val: "Королевский триумф",
        kvk5_val: "Звездное господство",
        open: "ОТКРЫТО (T5/АКТИВ)",
        power_desc: "Элитный Ранг 1",
        kvk_desc: "Победители Heroic Anthem",
        strat_desc: "Мастера Стратегии",
      },
      council: {
        title: "ЖЕЛЕЗНЫЙ СОВЕТ",
        subtitle: "Высшее командование Dark Wolfs",
        leadership: "Лидерство",
        leadership_desc: "Лидер M3664 и общее руководство",
        the_council: "Совет",
        the_council_desc: "Совет R4 и стратегические решения",
        war_strategy: "Военная стратегия",
        war_strategy_desc: "Тактическое планирование в КвК и поле",
        logistics: "События и логистика",
        logistics_desc: "Управление наградами и операциями",
        discord: "ВСТУПИТЬ В ОФИЦИАЛЬНЫЙ DISCORD",
        copyright: "© Королевство 3664 • Владения Dark Wolfs",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
