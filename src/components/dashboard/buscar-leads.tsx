"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Badge } from "@/src/components/ui/badge";
import { 
  Search, 
  Filter, 
  Target,
  Building,
  Users,
  DollarSign,
  Zap
} from "lucide-react";

export function BuscarLeads() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-orange-500" />
            <span>Busca Inteligente de Leads</span>
          </CardTitle>
          <CardDescription className="text-white/70">Configure os parâmetros para encontrar leads qualificados</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Setor/Indústria</label>
              <Input placeholder="Ex: Tecnologia, E-commerce, SaaS..." />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Localização</label>
              <Input placeholder="Ex: São Paulo, Brasil, América Latina..." />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Tamanho da Empresa</label>
              <Input placeholder="Ex: 10-50, 50-200, 200+ funcionários..." />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Faturamento</label>
              <Input placeholder="Ex: R$ 1-5M, R$ 5-10M, R$ 10M+..." />
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros Avançados
            </Button>
            <Button variant="gradient" size="lg">
              <Search className="mr-2 h-4 w-4" />
              Buscar Leads
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-lg font-bold">Precisão IA</div>
            <div className="text-sm text-white/70">Score de qualificação automático</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Building className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-lg font-bold">50+ Filtros</div>
            <div className="text-sm text-white/70">Segmentação avançada</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-lg font-bold">Milhões de Leads</div>
            <div className="text-sm text-white/70">Base atualizada em tempo real</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Buscas Recentes</CardTitle>
          <CardDescription className="text-white/70">Suas últimas configurações de busca</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Building className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium">Startups de Tecnologia - SP</p>
                  <p className="text-sm text-white/70">10-50 funcionários • R$ 1-5M faturamento</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">127 leads</Badge>
                <Button size="sm" variant="outline">Repetir</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium">E-commerce - Brasil</p>
                  <p className="text-sm text-white/70">20-100 funcionários • R$ 2-10M faturamento</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">89 leads</Badge>
                <Button size="sm" variant="outline">Repetir</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
