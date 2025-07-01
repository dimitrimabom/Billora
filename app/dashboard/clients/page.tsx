import { ClientsTable } from "@/components/clients/clients-table"
import { CreateClientButton } from "@/components/clients/create-client-button"
import { ClientsFilters } from "@/components/clients/clients-filters"

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600">Manage your client relationships</p>
        </div>
        <CreateClientButton />
      </div>

      <ClientsFilters />
      <ClientsTable />
    </div>
  )
}
