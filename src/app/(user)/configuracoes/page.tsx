import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { Configuracoes } from "@/src/components/dashboard/configuracoes";

export default function ConfiguracoesPage() {
  return (
    <DashboardShell pageName="Configurações">
      <Configuracoes />
    </DashboardShell>
  )
}
