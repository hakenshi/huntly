import DashboardShell from "@/src/components/dashboard/dashboard-shell";
import { AnalyticsCharts } from "@/src/components/dashboard/analytics-charts";

export default function AnalyticsPage() {
  return (
    <DashboardShell pageName="Analytics">
      <AnalyticsCharts />
    </DashboardShell>
  )
}
