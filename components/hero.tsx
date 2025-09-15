import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ArrowRight, BrainIcon, Play, TargetIcon, Zap } from "lucide-react";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section id="hero" className="px-6 py-32 pt-30 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <Badge className="bg-primary/50 border border-primary font-bold py-1 px-2 mb-5" >
            <Zap className="mr-2 h-4 w-4" />
            <p>Ferramenta Movida por IA</p>
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Encontre Leads de Qualidade {" "}
          <span className="text-orange-500">10x Mais rápido</span> com IA
        </h1>
    
        <p className="text-md md:text-lg text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          O huntly utiliza machine learning avançado para identificar, qualificar e priorizar leads automaticamente. {" "}
          Pare de perder tempo com buscas manuais e comece a fechar mais negócios hoje mesmo.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <Button variant={"gradient"} className="rounded-full hover:scale-105 transition-transform">
            Comece agora grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant={"ghost"} className="text-white hover:bg-transparent hover:text-white rounded-full hover:scale-105 transition-transform">
            <Play className="mr-2 h-5 w-5" />
            Ver Demo
          </Button>
        </div>
        <div className="cotainer mx-auto flex justify-between">
          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
            <CardHeader className="flex justify-center mt-10 mb-5">
              <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                <TargetIcon className="text-orange-400" size={32} />
              </span>
            </CardHeader>
            <CardDescription>
              <div className="text-white">
                <p className="font-bold mb-2">Buscas precisas</p> {" "}
                <span>A nossa ferramenta encontrará para você o cliente ideal.</span>
              </div>
            </CardDescription>
            </CardContent>
          </Card>
          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
            <CardHeader className="flex justify-center mt-10 mb-5">
              <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                <BrainIcon className="text-orange-400" size={32} />
              </span>
            </CardHeader>
            <CardDescription>
              <div className="text-white">
                <p className="font-bold mb-2">Qualificação Inteligente</p> {" "}
                <span>O huntly qualifica os leads com qualidade e precicisão para você.</span>
              </div>
            </CardDescription>
            </CardContent>
          </Card>
          <Card className="size-72 bg-gradient-to-tl from-gray-900/40 to-transparent border border-gray-800/40 hover:scale-105 text-white transition-transform cursor-pointer">
            <CardContent>
            <CardHeader className="flex justify-center mt-10 mb-5">
              <span className="bg-orange-400/20 w-fit p-2 rounded-full">
                <TargetIcon className="text-orange-400" size={32} />
              </span>
            </CardHeader>
            <CardDescription>
              <div className="text-white">
                <p className="font-bold mb-2">Customização</p> {" "}
                <span>Customize sua experiência com os perfis da pré prontos da ferramenta, ou crie um seu.</span>
              </div>
            </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
