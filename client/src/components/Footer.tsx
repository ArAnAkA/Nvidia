import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-display">NVIDIA</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Информационный проект о технологиях ускоренных вычислений, графике и ИИ.
              Вдохновлён работой NVIDIA с 1993 года.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Компания</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary transition-colors">
                  Пресс-центр
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Платформы</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GeForce RTX
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvidia.com/en-us/technologies/rtx/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  NVIDIA RTX
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvidia.com/en-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Дата-центры
                </a>
              </li>
              <li>
                <a
                  href="https://www.nvidia.com/en-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ИИ и обучение
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Связаться</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NVIDIA"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/NVIDIA"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/nvidia/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/nvidia/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@NVIDIA"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-zinc-500">
            © 2026 Информационный сайт NVIDIA (учебный проект). Не является официальным сайтом.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="https://www.nvidia.com/en-us/about-nvidia/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 hover:text-white"
            >
              Политика конфиденциальности
            </a>
            <a
              href="https://www.nvidia.com/en-us/about-nvidia/terms-of-service/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 hover:text-white"
            >
              Условия использования
            </a>
            <a
              href="https://www.nvidia.com/en-gb/about-nvidia/cookie-policy/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 hover:text-white"
            >
              Настройки cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
