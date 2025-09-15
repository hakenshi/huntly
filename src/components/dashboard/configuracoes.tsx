"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Badge } from "@/src/components/ui/badge";
import {
  User,
  Mail,
  Bell,
  Shield,
  CreditCard,
  Zap,
  Settings,
  Key,
  Database
} from "lucide-react";

export function Configuracoes() {
  return (
    <div className="space-y-6">

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-500" />
            <span>Segurança</span>
          </CardTitle>
          <CardDescription className="text-white/70">Mantenha sua conta segura</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-medium text-white">2FA Ativo</div>
              <div className="text-sm text-white/70">Autenticação em duas etapas</div>
            </div>
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <Key className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="font-medium text-white">Senha Forte</div>
              <div className="text-sm text-white/70">Última alteração: 30 dias</div>
            </div>
            <div className="text-center p-4 border border-gray-800/80 rounded-lg">
              <Settings className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="font-medium text-white">Sessões Ativas</div>
              <div className="text-sm text-white/70">2 dispositivos conectados</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-500" />
              <span>Perfil</span>
            </CardTitle>
            <CardDescription className="text-white/70">Informações da sua conta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Nome</label>
              <Input defaultValue="Felipe Kafka" className="bg-zinc-800/50 border-zinc-700 text-white" />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">E-mail</label>
              <Input defaultValue="felipe@huntly.com" className="bg-zinc-800/50 border-zinc-700 text-white" />
            </div>
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Empresa</label>
              <Input defaultValue="Huntly" className="bg-zinc-800/50 border-zinc-700 text-white" />
            </div>
            <Button variant="gradient">Salvar Alterações</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-yellow-500" />
              <span>Notificações</span>
            </CardTitle>
            <CardDescription className="text-white/70">Configure como você quer ser notificado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Novos leads encontrados</p>
                <p className="text-sm text-white/70">Receba notificações quando novos leads forem qualificados</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ativo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Respostas de e-mail</p>
                <p className="text-sm text-white/70">Notificações quando leads responderem seus e-mails</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ativo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Relatórios semanais</p>
                <p className="text-sm text-white/70">Resumo semanal da performance das campanhas</p>
              </div>
              <Badge className="bg-gray-800/50 border-gray-700 text-white">Inativo</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-purple-500" />
              <span>Plano e Cobrança</span>
            </CardTitle>
            <CardDescription className="text-white/70">Gerencie sua assinatura</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-white">Plano Atual</p>
                <p className="text-sm text-white/70">Pro - R$ 297/mês</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ativo</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Leads utilizados este mês</span>
                <span className="text-white">2.847 / 5.000</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '57%' }}></div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Alterar Plano</Button>
              <Button variant="outline">Ver Faturas</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="h-5 w-5 text-yellow-400" />
              <span>API e Integrações</span>
            </CardTitle>
            <CardDescription className="text-white/70">Conecte o Huntly com suas ferramentas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-white/80 mb-2 block">Chave da API</label>
              <div className="flex space-x-2">
                <Input defaultValue="hnt_sk_1234567890abcdef" type="password" className="bg-zinc-800/50 border-zinc-700 text-white" />
                <Button variant="outline">Copiar</Button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-800/80 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-medium text-white">Gmail</p>
                    <p className="text-sm text-white/70">Sincronização de e-mails</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Conectado</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-800/80 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-medium text-white">CRM</p>
                    <p className="text-sm text-white/70">Exportação automática de leads</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">Conectar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
