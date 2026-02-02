import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Главная" },
    { href: "/products", label: "Продукты" },
    { href: "/news", label: "Новости" },
    { href: "/about", label: "О компании" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-primary group-hover:bg-white transition-colors duration-300">
            {/* Упрощённый SVG-логотип (абстрактный глаз/спираль) */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-black fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white font-display">
              NVIDIA
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-400">
              ускоренные вычисления
            </span>
          </div>
        </Link>

        {/* Навигация (десктоп) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-zinc-400"}`}>
              {link.label}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-black font-bold" asChild>
            <a href="https://www.nvidia.com/en-us/" target="_blank" rel="noreferrer">
              Связаться
            </a>
          </Button>
        </div>

        {/* Кнопка мобильного меню */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-lg font-medium ${location === link.href ? "text-primary" : "text-zinc-400"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full bg-primary text-black font-bold mt-4" asChild>
                <a href="https://www.nvidia.com/en-us/" target="_blank" rel="noreferrer">
                  Связаться
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
