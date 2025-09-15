import { Card, CardContent, CardDescription, CardHeader } from "@/src/components/ui/card";
import { Filter, Database, BarChart3 } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="px-6 py-40 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Tudo que você precisa para <br /> encontrar e converter leads</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Huntly combina o poder da IA com uma base de dados compreensiva para te ajudar a impulsionar suas vendas e fechar negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-10 mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <Filter className="text-orange-400" size={32} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2">Filtragem Inteligente</p>
                  <span>Encontre leads precisos com mais de 50 filtros avançados: setor, faturamento, localização, tecnologias e sinais de crescimento.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-10 mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <Database className="text-orange-400" size={32} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2">Base de Dados Atualizada</p>
                  <span>Acesse milhões de contatos verificados e informações atualizadas de empresas em tempo real para máxima precisão.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
              <CardHeader className="flex justify-center mt-10 mb-5">
                <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                  <BarChart3 className="text-orange-400" size={32} />
                </span>
              </CardHeader>
              <CardDescription>
                <div className="text-white text-center">
                  <p className="font-bold mb-2">Analytics Inteligente</p>
                  <span>Dashboard completo com métricas de performance, qualidade de leads e taxas de conversão para otimizar seus resultados.</span>
                </div>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
