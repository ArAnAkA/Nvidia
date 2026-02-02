import { PageLayout } from "@/components/PageLayout";
import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Гейминг",
    desc: "GeForce — платформа для игр и творчества, которая задаёт стандарт качества графики.",
    img: "/images/about-gaming.jpg",
  },
  {
    title: "Дата-центры",
    desc: "Платформы для ускорения ИИ, научных расчётов и корпоративных инфраструктур.",
    img: "/images/about-datacenter.jpg",
  },
  {
    title: "Автомобильная индустрия",
    desc: "NVIDIA DRIVE помогает создавать безопасные автономные решения для транспорта.",
    img: "/images/about-automotive.jpg",
  },
];

const milestones = [
  {
    title: "1993",
    desc: "Основание компании и фокус на ускорении графики.",
  },
  {
    title: "1999",
    desc: "Революция GPU и рост рынка ПК-гейминга.",
  },
  {
    title: "Сегодня",
    desc: "ИИ, визуализация и автономные системы как ядро стратегии.",
  },
];

export default function About() {
  return (
    <PageLayout>
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold font-display text-white mb-4">О NVIDIA</h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Основанная в 1993 году, NVIDIA стала пионером ускоренных вычислений и современной графики.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display text-primary mb-6">История и подход</h2>
            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p>
                В 1999 году NVIDIA ускорила рост рынка ПК-гейминга, переопределила компьютерную графику
                и запустила новую эпоху параллельных вычислений с появлением GPU.
              </p>
              <p>
                Сегодня GPU-ускорение ИИ открывает следующую эру вычислений: от роботов и цифровых
                двойников до автономного транспорта и научных симуляций.
              </p>
              <p>
                NVIDIA всё чаще называют компанией ускоренных вычислений для ИИ — и это отражает
                нашу стратегию на ближайшие годы.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {milestones.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="text-lg font-bold text-white">{item.title}</div>
                  <div className="text-xs tracking-wider text-zinc-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src="/images/about-hero.jpg"
              alt="Инженерные системы NVIDIA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Ключевые направления</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 font-display">{area.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
