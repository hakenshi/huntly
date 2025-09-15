import { Card, CardContent, CardDescription, CardHeader } from "@/src/components/ui/card";
import { Filter, Database, BarChart3 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 py-20 sm:py-40 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Tudo que você precisa para <br className="hidden sm:block" /> encontrar e converter leads
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Huntly combina o poder da IA com uma base de dados compreensiva para te ajudar a impulsionar suas vendas e fechar negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          <Card className="w-full max-w-72 h-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-6 sm:mt-10 mb-3 sm:mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <Filter className="text-orange-400" size={28} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2 text-sm sm:text-base">Filtragem Inteligente</p>
                  <span className="text-xs sm:text-sm">Encontre leads precisos com mais de 50 filtros avançados: setor, faturamento, localização, tecnologias e sinais de crescimento.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="w-full max-w-72 h-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-6 sm:mt-10 mb-3 sm:mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <Database className="text-orange-400" size={28} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2 text-sm sm:text-base">Base de Dados Atualizada</p>
                  <span className="text-xs sm:text-sm">Acesse milhões de contatos verificados e informações atualizadas de empresas em tempo real para máxima precisão.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="w-full max-w-72 h-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-6 sm:mt-10 mb-3 sm:mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <BarChart3 className="text-orange-400" size={28} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2 text-sm sm:text-base">Analytics Inteligente</p>
                  <span className="text-xs sm:text-sm">Dashboard completo com métricas de performance, qualidade de leads e taxas de conversão para otimizar seus resultados.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
