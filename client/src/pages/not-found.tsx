import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-white font-display">Страница не найдена</h1>
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Запрошенная страница не существует. Возможно, она была перемещена или удалена.
          </p>

          <div className="mt-8">
            <Link href="/">
              <Button className="w-full bg-primary text-black hover:bg-white hover:text-black font-bold">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
