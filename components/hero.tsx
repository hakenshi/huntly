import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 py-32 pt-40 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
    
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Encontre Leads de{" "}
          <span className="gradient bg-clip-text text-transparent">
            Qualidade
          </span>{" "}
          Automaticamente
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Nossa discovery engine busca e qualifica leads automaticamente, 
          economizando horas de pesquisa manual para sua equipe de marketing.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <Button variant={"gradient"} className="rounded-full hover:scale-105 transition-transform">
            <Play className="mr-2 h-5 w-5" />
            Ver Demo
          </Button>
        </div>

        {/* <Card className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
          <CardContent className="p-2">
            <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <span className="text-white/80 text-xl">Assista ao Demo</span>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
}
