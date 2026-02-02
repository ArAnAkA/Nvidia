import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Продукты
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  // Новости
  app.get(api.news.list.path, async (req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  // Форма обратной связи
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.submitContactForm(input);
      // В реальном приложении здесь отправили бы письмо на почту
      res.json({ success: true, message: "Спасибо! Ваше сообщение отправлено." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Начальные данные
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const productsList = await storage.getProducts();
  if (productsList.length === 0) {
    await storage.createProduct({
      title: "GeForce RTX 40 Series",
      description: "Сверхбыстро для игр и творчества. На архитектуре NVIDIA Ada Lovelace.",
      category: "Игры",
      imageUrl: "/images/gpu-card.jpg"
    });
    await storage.createProduct({
      title: "NVIDIA RTX",
      description: "Платформа RTX для профессиональной визуализации, рендеринга и создания контента в реальном времени.",
      category: "Профессиональная графика",
      imageUrl: "/images/processor-chip.jpg"
    });
    await storage.createProduct({
      title: "NVIDIA AI",
      description: "Платформа для ИИ, которая ускоряет обучение и инференс от дата-центров до автономных систем.",
      category: "ИИ",
      imageUrl: "/images/server-rack.jpg"
    });
    await storage.createProduct({
      title: "Платформа CUDA",
      description: "Параллельные вычисления и программная модель для ускорения задач на GPU.",
      category: "Вычисления",
      imageUrl: "/images/processor-chip.jpg"
    });
    await storage.createProduct({
      title: "NVIDIA Omniverse",
      description: "Платформа для совместной 3D-работы, цифровых двойников и симуляции.",
      category: "ПО",
      imageUrl: "/images/robot-arm.jpg"
    });
    await storage.createProduct({
      title: "NVIDIA DRIVE",
      description: "Платформа полного цикла для транспорта: от разработки до развертывания.",
      category: "Авто",
      imageUrl: "/images/autonomous-car.jpg"
    });
  }

  const newsList = await storage.getNews();
  if (newsList.length === 0) {
    await storage.createNews({
      title: "Mercedes-Benz представила новый S-Class на NVIDIA DRIVE AV с архитектурой L4-ready",
      summary: "Новый S-Class строится на NVIDIA DRIVE AV и поддерживает архитектуру L4-ready для автономного вождения.",
      date: "29 января 2026",
      imageUrl: "https://blogs.nvidia.com/wp-content/uploads/2026/01/mb-s-class-2026-1280x855.jpg",
      url: "https://blogs.nvidia.com/blog/mercedes-benz-l4-s-class-drive-av-platform/"
    });
    await storage.createNews({
      title: "NVIDIA и CoreWeave усиливают сотрудничество для ускорения строительства AI-фабрик",
      summary: "Компании расширили партнерство, чтобы ускорить развертывание AI-фабрик и углубить инфраструктурную интеграцию.",
      date: "26 января 2026",
      imageUrl: "/images/server-rack.jpg",
      url: "https://nvidianews.nvidia.com/news/nvidia-and-coreweave-strengthen-collaboration-to-accelerate-buildout-of-ai-factories"
    });
    await storage.createNews({
      title: "NVIDIA и Lilly запускают совместную AI-лабораторию для поиска лекарств",
      summary: "Лаборатория нацелена на ускорение исследований в биофарме с помощью ИИ и инфраструктуры NVIDIA.",
      date: "12 января 2026",
      imageUrl: "/images/processor-chip.jpg",
      url: "https://nvidianews.nvidia.com/news/nvidia-and-lilly-announce-co-innovation-lab-to-reinvent-drug-discovery-in-the-age-of-ai"
    });
    await storage.createNews({
      title: "Multi-Agent Warehouse AI: командный слой для умных складов",
      summary: "Технический блог описывает MAIW Blueprint — многопользовательскую AI-систему для управления операциями склада.",
      date: "9 января 2026",
      imageUrl: "/images/robot-arm.jpg",
      url: "https://developer.nvidia.com/blog/multi-agent-warehouse-ai-command-layer-enables-operational-excellence-and-supply-chain-intelligence/"
    });
  }
}
