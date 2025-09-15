import { Card, CardContent } from "@/components/ui/card";
import { Target, Search, BarChart3 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Como Funciona</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Três passos simples para transformar sua geração de leads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-colors">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">1. Defina Critérios</h3>
              <p className="text-gray-300 leading-relaxed">
                Configure os parâmetros do seu cliente ideal: setor, tamanho da empresa, localização
              </p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-colors">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">2. Discovery Automático</h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa IA busca e qualifica leads em tempo real baseado nos seus critérios
              </p>
            </CardContent>
          </Card>
          
          <Card className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-colors">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">3. Receba Leads Qualificados</h3>
              <p className="text-gray-300 leading-relaxed">
                Leads com score de qualidade direto no seu CRM ou dashboard
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
