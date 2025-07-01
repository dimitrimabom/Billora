export function RecentInvoices() {
  const invoices = [
    {
      id: 1,
      client: "Riverside Designs",
      amount: "€2,500,00",
      date: "April 17, 2024",
      status: "paid",
    },
    {
      id: 2,
      client: "Horizon Solutions",
      amount: "€4,200,00",
      date: "April 14, 2024",
      status: "pending",
    },
    {
      id: 3,
      client: "Stellar Innovations",
      amount: "€1,100,00",
      date: "April 9, 2024",
      status: "paid",
    },
    {
      id: 4,
      client: "Pinnacle Enterprises",
      amount: "€3,150,00",
      date: "March 28, 2024",
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
        return "Paid"
      case "pending":
        return "Pending"
      case "overdue":
        return "Overdue"
      default:
        return status
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900">Recent Invoices</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{invoice.client}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-semibold">{invoice.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{invoice.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(invoice.status)}>{getStatusText(invoice.status)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
