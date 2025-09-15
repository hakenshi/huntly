import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { Campanhas } from "@/src/components/dashboard/campanhas";

export default function CampanhasPage() {
  return (
    <DashboardShell pageName="Campanhas">
      <Campanhas />
    </DashboardShell>
  )
}
