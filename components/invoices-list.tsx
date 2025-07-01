import { Button } from "@/components/ui/button"
import { MoreHorizontal, Download, Eye } from "lucide-react"

export function InvoicesList() {
  const invoices = [
    {
      id: "INV-001",
      client: "Riverside Designs",
      amount: "€2,500,00",
      date: "2024-04-17",
      dueDate: "2024-05-17",
      status: "paid",
    },
    {
      id: "INV-002",
      client: "Horizon Solutions",
      amount: "€4,200,00",
      date: "2024-04-14",
      dueDate: "2024-05-14",
      status: "pending",
    },
    {
      id: "INV-003",
      client: "Stellar Innovations",
      amount: "€1,100,00",
      date: "2024-04-09",
      dueDate: "2024-05-09",
      status: "paid",
    },
    {
      id: "INV-004",
      client: "Pinnacle Enterprises",
      amount: "€3,150,00",
      date: "2024-03-28",
      dueDate: "2024-04-28",
      status: "overdue",
    },
  ]

  const getStatusBadge = (status: string) => {
    const baseClasses = "status-badge"
    switch (status) {
      case "paid":
        return `${baseClasses} status-paid`
      case "pending":
        return `${baseClasses} status-pending`
      case "overdue":
        return `${baseClasses} status-overdue`
      default:
        return baseClasses
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "paid":
        return "Payée"
      case "pending":
        return "En attente"
      case "overdue":
        return "En retard"
      default:
        return status
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Facture
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Échéance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{invoice.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{invoice.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-semibold">{invoice.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{new Date(invoice.date).toLocaleDateString("fr-FR")}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{new Date(invoice.dueDate).toLocaleDateString("fr-FR")}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(invoice.status)}>{getStatusText(invoice.status)}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
