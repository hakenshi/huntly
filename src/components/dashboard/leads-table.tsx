"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  ExternalLink,
  Star,
  Calendar,
  Building,
  MapPin
} from "lucide-react";

export function LeadsTable() {
  const leads = [
    {
      id: 1,
      company: "TechInova Solutions",
      contact: "Carlos Silva",
      email: "carlos@techinova.com.br",
      phone: "(11) 99999-9999",
      industry: "Tecnologia",
      location: "São Paulo, SP",
      score: 92,
      status: "Novo",
      lastContact: "Hoje",
      revenue: "R$ 2-5M",
      employees: "50-100",
      priority: "Alta"
    },
    {
      id: 2,
      company: "EcoCommerce Brasil",
      contact: "Ana Santos",
      email: "ana@ecocommerce.com.br",
      phone: "(21) 88888-8888",
      industry: "E-commerce",
      location: "Rio de Janeiro, RJ",
      score: 78,
      status: "Contatado",
      lastContact: "2 dias atrás",
      revenue: "R$ 1-2M",
      employees: "20-50",
      priority: "Média"
    },
    {
      id: 3,
      company: "DataSync Analytics",
      contact: "Roberto Lima",
      email: "roberto@datasync.com.br",
      phone: "(11) 77777-7777",
      industry: "Analytics",
      location: "São Paulo, SP",
      score: 89,
      status: "Qualificado",
      lastContact: "1 semana atrás",
      revenue: "R$ 5-10M",
      employees: "100-200",
      priority: "Alta"
    },
    {
      id: 4,
      company: "HealthTech Innovations",
      contact: "Maria Oliveira",
      email: "maria@healthtech.com.br",
      phone: "(31) 66666-6666",
      industry: "Saúde",
      location: "Belo Horizonte, MG",
      score: 65,
      status: "Em Negociação",
      lastContact: "3 dias atrás",
      revenue: "R$ 500K-1M",
      employees: "10-20",
      priority: "Baixa"
    },
    {
      id: 5,
      company: "EduPlatform Digital",
      contact: "João Costa",
      email: "joao@eduplatform.com.br",
      phone: "(85) 55555-5555",
      industry: "Educação",
      location: "Fortaleza, CE",
      score: 83,
      status: "Proposta Enviada",
      lastContact: "5 dias atrás",
      revenue: "R$ 1-2M",
      employees: "30-50",
      priority: "Alta"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Novo": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Contatado": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Qualificado": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Em Negociação": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Proposta Enviada": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta": return "text-red-500";
      case "Média": return "text-yellow-500";
      case "Baixa": return "text-gray-500";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription className="text-white/70">Refine sua busca por leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                <Input placeholder="Buscar por empresa, contato ou email..." className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros Avançados
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Seus Leads ({leads.length})</CardTitle>
          <CardDescription className="text-white/70">Lista completa dos seus leads qualificados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="border border-gray-800/80 rounded-lg p-4 hover:bg-gray-900/50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {lead.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white">{lead.company}</h3>
                        <p className="text-sm text-white/70">{lead.contact}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(lead.score / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-white">{lead.score}/100</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-white/60" />
                        <span className="text-white/70">{lead.industry} • {lead.employees} funcionários</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-white/60" />
                        <span className="text-white/70">{lead.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-white/60" />
                        <span className="text-white/70">Último contato: {lead.lastContact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
                    <div className="flex flex-col items-start lg:items-end space-y-2">
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(lead.priority)}`}>
                        {lead.priority} Prioridade
                      </span>
                      <span className="text-sm text-white/70">
                        Receita: {lead.revenue}
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Ligar
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ver Perfil
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">5</div>
            <div className="text-sm text-white/70">Total de Leads</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-500">3</div>
            <div className="text-sm text-white/70">Alta Prioridade</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-500">81.4</div>
            <div className="text-sm text-white/70">Score Médio</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400">R$ 9.5M</div>
            <div className="text-sm text-white/70">Receita Potencial</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
