import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { LeadsTable } from "@/src/components/dashboard/leads-table";

export default function MeusLeadsPage() {
  return (
    <DashboardShell pageName="Meus Leads">
      <LeadsTable />
    </DashboardShell>
  )
}
