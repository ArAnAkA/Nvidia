import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Globe, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "ИИ и ускоренные вычисления",
    desc: "Платформа для обучения и инференса — от эксперимента до промышленного масштаба.",
  },
  {
    icon: Zap,
    title: "Графика и гейминг",
    desc: "Реалистичная визуализация, трассировка лучей и инструменты для создателей.",
  },
  {
    icon: Globe,
    title: "Omniverse и цифровые двойники",
    desc: "Единое пространство для 3D, симуляции и совместной работы команд.",
  },
  {
    icon: ShieldCheck,
    title: "Автономные системы",
    desc: "Надёжные решения для транспорта, робототехники и безопасности.",
  },
];

const highlights = [
  { title: "1993", desc: "год основания" },
  { title: "GPU + CUDA", desc: "ускорение вычислений" },
  { title: "ИИ-экосистема", desc: "модели, инструменты, инфраструктура" },
  { title: "Симуляции", desc: "цифровые двойники и визуализация" },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden pt-20 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid gap-16 lg:grid-cols-[1.05fr,0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary/90">
              Платформа ускоренных вычислений
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-[1.05]">
              Ускоряем реальность для мира ИИ, графики и науки
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              NVIDIA — лидер в области ускоренных вычислений. Мы соединяем аппаратные
              платформы и программные экосистемы, чтобы превращать идеи в рабочие решения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-primary text-black hover:bg-white hover:text-black font-bold text-lg px-8 py-6 h-auto transition-all shadow-lg hover:shadow-primary/25"
                >
                  Смотреть платформы
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-8 py-6 h-auto backdrop-blur-sm"
                >
                  О компании
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {["RTX", "CUDA", "Omniverse", "DRIVE", "NVIDIA AI Enterprise"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-zinc-900/70 px-4 py-1 text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <div className="text-lg font-semibold text-white">{item.title}</div>
                  <div className="text-xs tracking-wider text-zinc-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
            <div className="relative grid gap-6">
              <div className="glass-panel hover-glow rounded-3xl p-6">
                <div className="text-xs uppercase tracking-widest text-primary">Графика и RTX</div>
                <h3 className="mt-3 text-2xl font-display text-white">Реалтайм-рендеринг</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Трассировка лучей, DLSS и студийные инструменты для создателей контента.
                </p>
              </div>
              <div className="glass-panel hover-glow rounded-3xl p-6">
                <div className="text-xs uppercase tracking-widest text-primary">ИИ-платформа</div>
                <h3 className="mt-3 text-2xl font-display text-white">От эксперимента до масштаба</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Гибкая инфраструктура для обучения, инференса и оптимизации моделей.
                </p>
              </div>
              <div className="glass-panel hover-glow rounded-3xl p-6">
                <div className="text-xs uppercase tracking-widest text-primary">Omniverse</div>
                <h3 className="mt-3 text-2xl font-display text-white">Цифровые двойники</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  Совместная 3D-работа, симуляции и эксперименты в одном контуре.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-white">
                Ключевые направления
              </h2>
              <p className="mt-4 text-zinc-400 max-w-2xl">
                Мы объединяем аппаратные платформы, программные инструменты и экосистему
                партнёров, чтобы ускорять инновации в самых важных отраслях.
              </p>
            </div>
            <Link href="/products" className="text-sm font-semibold text-primary hover:text-white transition-colors">
              Все решения <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-white/10 p-8 rounded-2xl hover:border-primary/60 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-zinc-900 border border-white/10 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-8 md:p-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-accent/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
                Готовы ускорить проект?
              </h2>
              <p className="text-zinc-300 text-lg max-w-xl mb-8">
                Расскажите о задаче — подберём платформу и поможем сформировать план внедрения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-primary hover:text-black font-bold text-lg px-8 py-6 h-auto" asChild>
                  <a href="https://www.nvidia.com/en-us/" target="_blank" rel="noreferrer">
                    Связаться с командой <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Link href="/news">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 h-auto"
                  >
                    Читать новости
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative z-10 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="text-xs uppercase tracking-widest text-primary">Экосистема</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Аппаратные платформы, SDK и инструменты для полного цикла разработки.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="text-xs uppercase tracking-widest text-primary">Консалтинг</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Помогаем спроектировать инфраструктуру и оптимизировать производительность.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="text-xs uppercase tracking-widest text-primary">Поддержка</div>
                <p className="mt-2 text-sm text-zinc-300">
                  Эксперты, документация и лучшие практики для вашей команды.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
