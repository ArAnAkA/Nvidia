import { PageLayout } from "@/components/PageLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/schema";
import { useContactForm } from "@/hooks/use-nvidia";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const mutation = useContactForm();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <PageLayout>
      <div className="bg-zinc-900 py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold font-display text-white mb-4">Связаться с нами</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Есть вопросы или идея проекта? Напишите — обсудим и поможем подобрать решение.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">Главный офис</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div className="text-zinc-300">
                  <p className="font-semibold text-white">NVIDIA Corporation</p>
                  <p>2788 San Tomas Expressway</p>
                  <p>Santa Clara, CA 95051</p>
                  <p>США</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-zinc-300">+1 (408) 486-2000</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-zinc-300">info@nvidia.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-primary" />
                <p className="text-zinc-300">По будням, рабочие часы 8:00 - 02:00</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 bg-zinc-800 relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                alt="Карта местоположения"
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="shadow-lg" asChild>
                  <a
                    href="https://maps.google.com/?q=2788+San+Tomas+Expressway+Santa+Clara+CA+95051"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Открыть на карте
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white font-display mb-8">Отправить сообщение</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Имя</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ваше имя и фамилия"
                          {...field}
                          className="bg-zinc-800 border-zinc-700 text-white focus:border-primary focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Эл. почта</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@company.com"
                          type="email"
                          {...field}
                          className="bg-zinc-800 border-zinc-700 text-white focus:border-primary focus:ring-primary/20"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Чем можем помочь?"
                          className="min-h-[150px] bg-zinc-800 border-zinc-700 text-white focus:border-primary focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-black hover:bg-primary/90 font-bold text-lg h-12"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    "Отправляем..."
                  ) : (
                    <>
                      Отправить <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
