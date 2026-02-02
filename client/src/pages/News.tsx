import { PageLayout } from "@/components/PageLayout";
import { useNews } from "@/hooks/use-nvidia";
import { Loader2, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function News() {
  const { data: newsItems, isLoading, error } = useNews();
  const featured = newsItems?.[0];
  const rest = newsItems?.slice(1) ?? [];
  const fallbackImage = "/images/server-rack.jpg";

  return (
    <PageLayout>
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold font-display text-white mb-4">Пресс-центр</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Свежие новости, обновления и анонсы о технологиях NVIDIA.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <AlertCircle className="w-12 h-12 text-destructive mb-4" />
            <h3 className="text-xl font-bold text-white">Не удалось загрузить новости</h3>
          </div>
        )}

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 grid gap-8 lg:grid-cols-[1.2fr,0.8fr] items-center border border-white/10 rounded-3xl overflow-hidden bg-zinc-900/40"
          >
            <div className="aspect-[16/9] w-full bg-zinc-800 overflow-hidden">
              <img
                src={
                  featured.imageUrl ||
                  fallbackImage
                }
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col gap-4">
              <div className="text-xs uppercase tracking-widest text-primary">Главная новость</div>
              <div className="flex items-center text-xs text-zinc-400 font-semibold tracking-wider uppercase">
                <Calendar className="w-3 h-3 mr-2" />
                {featured.date}
              </div>
              <h2 className="text-3xl font-display text-white leading-tight">{featured.title}</h2>
              <p className="text-zinc-300 leading-relaxed">{featured.summary}</p>
              <div className="pt-4">
                {featured.url ? (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors"
                  >
                    Читать полностью <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    Читать полностью <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {newsItems && newsItems.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            Пока нет новостей.
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col h-full border border-white/10 rounded-xl overflow-hidden hover:bg-zinc-900/40 transition-colors group"
              >
                <div className="aspect-[16/9] w-full bg-zinc-800 overflow-hidden">
                  <img
                    src={
                      item.imageUrl ||
                      fallbackImage
                    }
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-primary font-semibold mb-3 tracking-wider uppercase">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                    {item.summary}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-primary hover:text-white transition-colors inline-flex items-center"
                      >
                        Читать полностью <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-500">Подробности скоро</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
