import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi"

const transactions = [
  {
    id: "TXN-001",
    type: "invoice_paid",
    description: "Invoice #INV-001 paid by Riverside Designs",
    amount: 2500.0,
    date: "2024-04-17T10:30:00Z",
    status: "completed",
  },
  {
    id: "TXN-002",
    type: "invoice_created",
    description: "Invoice #INV-002 created for Horizon Solutions",
    amount: 4200.0,
    date: "2024-04-14T14:15:00Z",
    status: "pending",
  },
  {
    id: "TXN-003",
    type: "client_added",
    description: "New client Stellar Innovations added",
    amount: 0,
    date: "2024-04-12T09:45:00Z",
    status: "completed",
  },
  {
    id: "TXN-004",
    type: "payment_received",
    description: "Payment received from Pinnacle Enterprises",
    amount: 1100.0,
    date: "2024-04-09T16:20:00Z",
    status: "completed",
  },
]

export function TransactionHistory() {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "invoice_paid":
      case "payment_received":
        return <FiArrowDownLeft className="h-4 w-4 text-green-600" />
      case "invoice_created":
        return <FiArrowUpRight className="h-4 w-4 text-blue-600" />
      default:
        return <FiArrowUpRight className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Completed
          </Badge>
        )
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-full">{getTransactionIcon(transaction.type)}</div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {transaction.amount > 0 && (
                  <span className="font-semibold">€{transaction.amount.toLocaleString()}</span>
                )}
                {getStatusBadge(transaction.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
