import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FiMail, FiPhone } from "react-icons/fi"

const recentClients = [
  {
    id: "1",
    name: "John Doe",
    company: "Riverside Designs",
    email: "john@riverside.com",
    phone: "+33 1 23 45 67 89",
    totalInvoices: 5,
    totalAmount: 12500,
  },
  {
    id: "2",
    name: "Jane Smith",
    company: "Horizon Solutions",
    email: "jane@horizon.com",
    phone: "+33 1 98 76 54 32",
    totalInvoices: 3,
    totalAmount: 8400,
  },
  {
    id: "3",
    name: "Bob Johnson",
    company: "Stellar Innovations",
    email: "bob@stellar.com",
    phone: "+33 1 11 22 33 44",
    totalInvoices: 7,
    totalAmount: 15600,
  },
]

export function RecentClients() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentClients.map((client) => (
            <div key={client.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={client.name} />
                  <AvatarFallback>
                    {client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{client.name}</p>
                  <p className="text-sm text-muted-foreground">{client.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-semibold">€{client.totalAmount.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{client.totalInvoices} invoices</p>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <FiMail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <FiPhone className="h-4 w-4" />
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
