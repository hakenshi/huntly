"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { 
  Play, 
  Pause, 
  Square,
  BarChart3,
  Users,
  Mail,
  Calendar,
  Plus,
  Settings
} from "lucide-react";

export function Campanhas() {
  const campanhas = [
    {
      id: 1,
      nome: "Startups de Tecnologia - SP",
      status: "Ativa",
      leadsEncontrados: 127,
      emailsEnviados: 89,
      respostas: 12,
      conversoes: 3,
      criadaEm: "3 dias atrás",
      proximaExecucao: "Em 2 horas"
    },
    {
      id: 2,
      nome: "E-commerce - Brasil",
      status: "Pausada",
      leadsEncontrados: 89,
      emailsEnviados: 45,
      respostas: 8,
      conversoes: 2,
      criadaEm: "1 semana atrás",
      proximaExecucao: "Pausada"
    },
    {
      id: 3,
      nome: "SaaS B2B - Rio de Janeiro",
      status: "Finalizada",
      leadsEncontrados: 203,
      emailsEnviados: 156,
      respostas: 28,
      conversoes: 7,
      criadaEm: "2 semanas atrás",
      proximaExecucao: "Concluída"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativa": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pausada": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Finalizada": return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ativa": return <Play className="h-4 w-4" />;
      case "Pausada": return <Pause className="h-4 w-4" />;
      case "Finalizada": return <Square className="h-4 w-4" />;
      default: return <Square className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Suas Campanhas</h2>
          <p className="text-white/70">Gerencie suas campanhas de busca e outreach</p>
        </div>
        <Button variant="gradient">
          <Plus className="mr-2 h-4 w-4" />
          Nova Campanha
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">3</div>
            <div className="text-sm text-white/70">Campanhas Ativas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">419</div>
            <div className="text-sm text-white/70">Leads Encontrados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">290</div>
            <div className="text-sm text-white/70">E-mails Enviados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">12</div>
            <div className="text-sm text-white/70">Conversões</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {campanhas.map((campanha) => (
          <Card key={campanha.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {getStatusIcon(campanha.status)}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{campanha.nome}</CardTitle>
                    <CardDescription className="text-white/70">
                      Criada {campanha.criadaEm} • Próxima execução: {campanha.proximaExecucao}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(campanha.status)}>
                    {campanha.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="font-semibold text-white">{campanha.leadsEncontrados}</p>
                    <p className="text-sm text-white/70">Leads</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <div>
                    <p className="font-semibold text-white">{campanha.emailsEnviados}</p>
                    <p className="text-sm text-white/70">E-mails</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-purple-500" />
                  <div>
                    <p className="font-semibold text-white">{campanha.respostas}</p>
                    <p className="text-sm text-white/70">Respostas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-green-400" />
                  <div>
                    <p className="font-semibold text-white">{campanha.conversoes}</p>
                    <p className="text-sm text-white/70">Conversões</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800/80">
                <div className="text-sm text-white/70">
                  Taxa de conversão: <span className="text-green-500">{((campanha.conversoes / campanha.leadsEncontrados) * 100).toFixed(1)}%</span>
                </div>
                <div className="flex space-x-2">
                  {campanha.status === "Ativa" && (
                    <Button size="sm" variant="outline">
                      <Pause className="h-4 w-4 mr-1" />
                      Pausar
                    </Button>
                  )}
                  {campanha.status === "Pausada" && (
                    <Button size="sm" variant="gradient">
                      <Play className="h-4 w-4 mr-1" />
                      Retomar
                    </Button>
                  )}
                  <Button size="sm" variant="outline">Ver Detalhes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
