import { PageLayout } from "@/components/PageLayout";
import { useProducts } from "@/hooks/use-nvidia";
import { Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const productLinks: Record<string, string> = {
  "GeForce RTX 40 Series": "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/",
  "NVIDIA RTX": "https://www.nvidia.com/en-us/technologies/rtx/",
};

const defaultProductLink = "https://www.nvidia.com/en-us/";

export default function Products() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <PageLayout>
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold font-display text-white mb-4">Платформы и продукты</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Аппаратные и программные решения для графики, ИИ и ускоренных вычислений.
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
            <h3 className="text-xl font-bold text-white">Не удалось загрузить продукты</h3>
            <p className="text-zinc-500">Пожалуйста, попробуйте позже.</p>
          </div>
        )}

        {products && products.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            Пока нет доступных продуктов.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-zinc-900/70 to-zinc-950 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col group"
            >
              <div className="aspect-video w-full bg-zinc-800 overflow-hidden relative">
                {product.imageUrl ? (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                    Нет изображения
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 font-display">{product.title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                <Button
                  className="w-full bg-white text-black hover:bg-primary hover:text-black font-bold group-hover:bg-primary transition-colors"
                  asChild
                >
                  <a
                    href={productLinks[product.title] ?? defaultProductLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
