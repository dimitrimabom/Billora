import { TransactionHistory } from "@/components/history/transaction-history"
import { HistoryFilters } from "@/components/history/history-filters"
import { HistoryStats } from "@/components/history/history-stats"

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
        <p className="text-gray-600">Complete log of all your business transactions</p>
      </div>

      <HistoryStats />
      <HistoryFilters />
      <TransactionHistory />
    </div>
  )
}
