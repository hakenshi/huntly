import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Acelerar suas Vendas?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Junte-se a centenas de empresas que já transformaram sua geração de leads
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-4 text-xl font-semibold shadow-xl hover:scale-105 transition-all">
            Começar Teste Grátis Agora
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Card>
      </div>
    </section>
  );
}
