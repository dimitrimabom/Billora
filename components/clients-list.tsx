import { Button } from "@/components/ui/button"
import { MoreHorizontal, Mail, Phone } from "lucide-react"

export function ClientsList() {
  const clients = [
    {
      id: 1,
      name: "Riverside Designs",
      email: "contact@riverside.com",
      phone: "+33 1 23 45 67 89",
      totalInvoices: 12,
      totalAmount: "€15,400",
    },
    {
      id: 2,
      name: "Horizon Solutions",
      email: "hello@horizon.com",
      phone: "+33 1 98 76 54 32",
      totalInvoices: 8,
      totalAmount: "€22,100",
    },
    {
      id: 3,
      name: "Stellar Innovations",
      email: "info@stellar.com",
      phone: "+33 1 11 22 33 44",
      totalInvoices: 15,
      totalAmount: "€31,750",
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {clients.map((client) => (
          <div key={client.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                {client.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                {client.phone}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Factures:</span>
                <span className="font-medium">{client.totalInvoices}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-600">Total:</span>
                <span className="font-semibold text-green-600">{client.totalAmount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
