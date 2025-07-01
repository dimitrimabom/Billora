import { InvoicesTable } from "@/components/invoices/invoices-table"
import { CreateInvoiceButton } from "@/components/invoices/create-invoice-button"
import { InvoicesFilters } from "@/components/invoices/invoices-filters"

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
          <p className="text-gray-600">Manage all your invoices in one place</p>
        </div>
        <CreateInvoiceButton />
      </div>

      <InvoicesFilters />
      <InvoicesTable />
    </div>
  )
}
