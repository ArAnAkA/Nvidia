import { db } from "./db";
import {
  products,
  news,
  contactMessages,
  type InsertContactMessage,
  type ContactMessage,
  type Product,
  type NewsItem,
  type InsertProduct,
  type InsertNewsItem
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  getNews(): Promise<NewsItem[]>;
  createNews(news: InsertNewsItem): Promise<NewsItem>;
  submitContactForm(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  private getDb() {
    if (!db) {
      throw new Error("База данных не инициализирована.");
    }
    return db;
  }

  async getProducts(): Promise<Product[]> {
    return await this.getDb().select().from(products);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await this.getDb()
      .insert(products)
      .values(product)
      .returning();
    return newProduct;
  }

  async getNews(): Promise<NewsItem[]> {
    return await this.getDb().select().from(news);
  }

  async createNews(newsItem: InsertNewsItem): Promise<NewsItem> {
    const [newItem] = await this.getDb()
      .insert(news)
      .values(newsItem)
      .returning();
    return newItem;
  }

  async submitContactForm(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await this.getDb()
      .insert(contactMessages)
      .values(message)
      .returning();
    return newMessage;
  }
}

export class MemoryStorage implements IStorage {
  private productsStore: Product[] = [];
  private newsStore: NewsItem[] = [];
  private contactStore: ContactMessage[] = [];
  private productId = 1;
  private newsId = 1;
  private contactId = 1;

  async getProducts(): Promise<Product[]> {
    return this.productsStore;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const newProduct: Product = {
      id: this.productId++,
      title: product.title,
      description: product.description,
      category: product.category,
      imageUrl: product.imageUrl ?? null,
    };
    this.productsStore.push(newProduct);
    return newProduct;
  }

  async getNews(): Promise<NewsItem[]> {
    return this.newsStore;
  }

  async createNews(newsItem: InsertNewsItem): Promise<NewsItem> {
    const newItem: NewsItem = {
      id: this.newsId++,
      title: newsItem.title,
      summary: newsItem.summary,
      date: newsItem.date,
      imageUrl: newsItem.imageUrl ?? null,
      url: newsItem.url ?? null,
    };
    this.newsStore.push(newItem);
    return newItem;
  }

  async submitContactForm(message: InsertContactMessage): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      id: this.contactId++,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: new Date(),
    };
    this.contactStore.push(newMessage);
    return newMessage;
  }
}

const useMemoryStorage = !db;

export const storage: IStorage = useMemoryStorage
  ? new MemoryStorage()
  : new DatabaseStorage();

if (useMemoryStorage) {
  console.warn("DATABASE_URL не задан: используется встроенное хранилище в памяти.");
}
