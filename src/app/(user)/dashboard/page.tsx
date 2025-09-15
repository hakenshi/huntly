import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { DashboardOverview } from "@/src/components/dashboard/dashboard-overview";

export default function DashboardPage() {
  return (
    <DashboardShell pageName="Dashboard">
      <DashboardOverview />
    </DashboardShell>
  )
}