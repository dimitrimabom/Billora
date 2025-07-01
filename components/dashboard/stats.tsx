import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FiDollarSign, FiUsers, FiFileText, FiTrendingUp } from "react-icons/fi"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: FiDollarSign,
    color: "text-green-600",
  },
  {
    title: "Active Clients",
    value: "2,350",
    change: "+180.1% from last month",
    icon: FiUsers,
    color: "text-blue-600",
  },
  {
    title: "Invoices Sent",
    value: "12,234",
    change: "+19% from last month",
    icon: FiFileText,
    color: "text-purple-600",
  },
  {
    title: "Conversion Rate",
    value: "89.2%",
    change: "+4.75% from last month",
    icon: FiTrendingUp,
    color: "text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
