import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FiEye, FiDownload, FiMoreHorizontal } from "react-icons/fi"

const recentInvoices = [
  {
    id: "INV-001",
    client: "Riverside Designs",
    amount: 3000.0,
    status: "paid",
    dueDate: "2024-05-17",
  },
  {
    id: "INV-002",
    client: "Horizon Solutions",
    amount: 5040.0,
    status: "sent",
    dueDate: "2024-05-14",
  },
  {
    id: "INV-003",
    client: "Stellar Innovations",
    amount: 1320.0,
    status: "paid",
    dueDate: "2024-05-09",
  },
]

export function RecentInvoices() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>
      case "sent":
        return <Badge className="bg-blue-100 text-blue-800">Sent</Badge>
      case "overdue":
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentInvoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">{invoice.id}</p>
                <p className="text-sm text-muted-foreground">{invoice.client}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold">€{invoice.amount.toLocaleString()}</span>
                {getStatusBadge(invoice.status)}
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <FiEye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FiDownload className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FiMoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
