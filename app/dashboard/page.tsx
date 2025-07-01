import { DashboardStats } from "@/components/dashboard/stats"
import { RecentInvoices } from "@/components/dashboard/recent-invoices"
import { RecentClients } from "@/components/dashboard/recent-clients"
import { RevenueChart } from "@/components/dashboard/revenue-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <RecentInvoices />
      </div>

      <RecentClients />
    </div>
  )
}
