"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Mail, 
  Phone, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MousePointer,
  CheckCircle
} from "lucide-react";

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
            <Users className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent className="text-white">
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-white/70">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12.5%
              </span>
              vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Target className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent className="text-white">
            <div className="text-2xl font-bold">18.2%</div>
            <p className="text-xs text-white/70">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +2.1%
              </span>
              vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Qualificados</CardTitle>
            <CheckCircle className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent className="text-white">
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-white/70">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.3%
              </span>
              vs. mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent className="text-white">
            <div className="text-2xl font-bold">R$ 4.2k</div>
            <p className="text-xs text-white/70">
              <span className="text-red-500 flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -3.2%
              </span>
              vs. mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Atividade Recente e Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Campanhas Ativas</CardTitle>
            <CardDescription className="text-white/70">Suas campanhas de busca de leads em andamento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-800/80 rounded-lg">
              <div>
                <p className="font-medium text-white">Startups de Tecnologia - SP</p>
                <p className="text-sm text-white/70">Criada há 3 dias</p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ativa</Badge>
                <p className="text-sm text-white/70 mt-1">127 leads encontrados</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-800/80 rounded-lg">
              <div>
                <p className="font-medium text-white">E-commerce - Brasil</p>
                <p className="text-sm text-white/70">Criada há 1 semana</p>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Pausada</Badge>
                <p className="text-sm text-white/70 mt-1">89 leads encontrados</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 border border-gray-800/80 rounded-lg">
              <div>
                <p className="font-medium text-white">SaaS B2B - Rio de Janeiro</p>
                <p className="text-sm text-white/70">Criada há 2 semanas</p>
              </div>
              <div className="text-right">
                <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">Finalizada</Badge>
                <p className="text-sm text-white/70 mt-1">203 leads encontrados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance de Contato</CardTitle>
            <CardDescription className="text-white/70">Métricas dos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white">E-mails Enviados</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">1,847</p>
                <p className="text-xs text-green-500">+15.2%</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-white">Taxa de Abertura</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">24.3%</p>
                <p className="text-xs text-green-500">+2.1%</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MousePointer className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-white">Taxa de Clique</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">8.7%</p>
                <p className="text-xs text-red-500">-1.3%</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white">Ligações Realizadas</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">342</p>
                <p className="text-xs text-green-500">+8.9%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leads Recentes */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Leads Recentes</CardTitle>
            <CardDescription className="text-white/70">Últimos leads qualificados pela IA</CardDescription>
          </div>
          <Button variant="outline" size="sm">Ver Todos</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-800/80 rounded-lg hover:bg-gray-900/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-blue-400 font-semibold">TI</span>
                </div>
                <div>
                  <p className="font-medium text-white">TechInova Solutions</p>
                  <p className="text-sm text-white/70">contato@techinova.com.br</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Alta Prioridade</Badge>
                <p className="text-sm text-white/70 mt-1">Score: 92/100</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-800/80 rounded-lg hover:bg-gray-900/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-400 font-semibold">EC</span>
                </div>
                <div>
                  <p className="font-medium text-white">EcoCommerce Brasil</p>
                  <p className="text-sm text-white/70">vendas@ecocommerce.com.br</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Média Prioridade</Badge>
                <p className="text-sm text-white/70 mt-1">Score: 78/100</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-800/80 rounded-lg hover:bg-gray-900/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-semibold">DS</span>
                </div>
                <div>
                  <p className="font-medium text-white">DataSync Analytics</p>
                  <p className="text-sm text-white/70">comercial@datasync.com.br</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Alta Prioridade</Badge>
                <p className="text-sm text-white/70 mt-1">Score: 89/100</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Próximas Ações */}
      <Card>
        <CardHeader>
          <CardTitle>Próximas Ações Recomendadas</CardTitle>
          <CardDescription className="text-white/70">Sugestões da IA para otimizar seus resultados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-950/20 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <p className="font-medium text-white">Agendar follow-up com TechInova Solutions</p>
                <p className="text-sm text-white/70">Lead com alta probabilidade de conversão</p>
              </div>
              <Button size="sm" variant="gradient">Agendar</Button>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-yellow-950/20 rounded-lg">
              <Target className="h-5 w-5 text-yellow-500" />
              <div className="flex-1">
                <p className="font-medium text-white">Otimizar campanha "E-commerce - Brasil"</p>
                <p className="text-sm text-white/70">Taxa de conversão abaixo da média</p>
              </div>
              <Button size="sm" >Otimizar</Button>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-green-950/20 rounded-lg">
              <Mail className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <p className="font-medium text-white">Criar sequência de e-mails para leads qualificados</p>
                <p className="text-sm text-white/70">127 leads aguardando primeiro contato</p>
              </div>
              <Button size="sm" >Criar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
