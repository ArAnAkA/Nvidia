import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Таблица продуктов
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // например: "Игры", "ИИ"
  imageUrl: text("image_url"),
});

// Таблица новостей
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url"),
  url: text("url"),
});

// Таблица сообщений
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Схемы
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertNewsSchema = createInsertSchema(news).omit({ id: true });
export const insertContactSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  email: z.string().email("Укажите корректный email"),
  message: z.string().min(5, "Введите сообщение"),
});

// Типы
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type NewsItem = typeof news.$inferSelect;
export type InsertNewsItem = z.infer<typeof insertNewsSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;
