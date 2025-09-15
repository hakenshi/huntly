"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

export function AnalyticsCharts() {
  const leadsByMonth = [
    { month: "Jan", leads: 180, qualified: 45 },
    { month: "Fev", leads: 220, qualified: 58 },
    { month: "Mar", leads: 190, qualified: 52 },
    { month: "Abr", leads: 280, qualified: 72 },
    { month: "Mai", leads: 320, qualified: 89 },
    { month: "Jun", leads: 290, qualified: 78 }
  ];

  const topSources = [
    { source: "LinkedIn", leads: 1247, percentage: 43.8 },
    { source: "Google Search", leads: 892, percentage: 31.3 },
    { source: "Website", leads: 456, percentage: 16.0 },
    { source: "Referências", leads: 252, percentage: 8.9 }
  ];

  const industryBreakdown = [
    { industry: "Tecnologia", count: 892, color: "bg-blue-500" },
    { industry: "E-commerce", count: 654, color: "bg-green-500" },
    { industry: "Saúde", count: 432, color: "bg-red-500" },
    { industry: "Educação", count: 321, color: "bg-purple-500" },
    { industry: "Finanças", count: 287, color: "bg-yellow-500" },
    { industry: "Outros", count: 261, color: "bg-gray-500" }
  ];

  return (
    <div className="space-y-6">

      <Card>
        <CardHeader>
          <CardTitle>Score de Qualidade dos Leads</CardTitle>
          <CardDescription className="text-white/70">Distribuição dos leads por faixa de score da IA</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <div className="text-2xl font-bold text-blue-500">342</div>
              <div className="text-sm text-white/70">Score 90-100</div>
              <div className="text-xs text-blue-500 mt-1">Alta Prioridade</div>
            </div>
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <div className="text-2xl font-bold text-yellow-500">567</div>
              <div className="text-sm text-white/70">Score 70-89</div>
              <div className="text-xs text-yellow-500 mt-1">Boa Qualidade</div>
            </div>
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">423</div>
              <div className="text-sm text-white/70">Score 50-69</div>
              <div className="text-xs text-purple-400 mt-1">Média Qualidade</div>
            </div>
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <div className="text-2xl font-bold text-gray-500">189</div>
              <div className="text-sm text-white/70">Score 0-49</div>
              <div className="text-xs text-gray-500 mt-1">Baixa Prioridade</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Evolução de Leads</CardTitle>
          <CardDescription className="text-white/70">Leads totais vs qualificados nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leadsByMonth.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-white">{data.month}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Total: {data.leads}</span>
                    <span className="text-sm text-white/70">Qualificados: {data.qualified}</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full relative"
                      style={{ width: `${(data.leads / 320) * 100}%` }}
                    >
                      <div
                        className="bg-yellow-400 h-2 rounded-full absolute top-0 left-0"
                        style={{ width: `${(data.qualified / data.leads) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Principais Fontes de Leads</CardTitle>
            <CardDescription className="text-white/70">De onde vêm seus melhores leads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="font-medium text-white">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">{source.leads}</p>
                    <p className="text-sm text-green-500">{source.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leads por Setor</CardTitle>
            <CardDescription className="text-white/70">Distribuição dos leads por indústria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {industryBreakdown.map((industry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${industry.color} rounded-full`} />
                    <span className="font-medium text-white">{industry.industry}</span>
                  </div>
                  <Badge className="bg-gray-800/50 border-gray-700 text-white">{industry.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
