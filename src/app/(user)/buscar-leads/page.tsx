import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { BuscarLeads } from "@/src/components/dashboard/buscar-leads";

export default function BuscarLeadsPage() {
  return (
    <DashboardShell pageName="Buscar Leads">
      <BuscarLeads />
    </DashboardShell>
  )
}
