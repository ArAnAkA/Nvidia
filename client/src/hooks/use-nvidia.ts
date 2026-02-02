import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// ============================================
// ПРОДУКТЫ
// ============================================
export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      const res = await fetch(api.products.list.path);
      if (!res.ok) throw new Error("Не удалось загрузить продукты");
      return api.products.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// НОВОСТИ
// ============================================
export function useNews() {
  return useQuery({
    queryKey: [api.news.list.path],
    queryFn: async () => {
      const res = await fetch(api.news.list.path);
      if (!res.ok) throw new Error("Не удалось загрузить новости");
      return api.news.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// ФОРМА ОБРАТНОЙ СВЯЗИ
// ============================================
export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const validated = api.contact.submit.input.parse(data);
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Не удалось отправить сообщение");
      }
      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      toast({
        title: "Сообщение отправлено",
        description: data.message,
        variant: "default",
        className: "bg-primary text-primary-foreground border-none shadow-lg"
      });
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
