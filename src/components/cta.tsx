import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <Card className="bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 rounded-3xl p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Pronto para Acelerar suas Vendas?
        </h2>
        <p className="text-xl mb-10 text-gray-300">
          Comece a encontrar leads de qualidade não em horas, mas em minutos.
        </p>
        <Button className="text-sm" size="lg" >
          Comece agora grátis
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </Card>
    </div>
  );
}
