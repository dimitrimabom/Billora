"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiHome, FiFileText, FiUsers, FiClock, FiSettings, FiBarChart3 } from "react-icons/fi"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: FiHome },
  { name: "Invoices", href: "/dashboard/invoices", icon: FiFileText },
  { name: "Clients", href: "/dashboard/clients", icon: FiUsers },
  { name: "History", href: "/dashboard/history", icon: FiClock },
  { name: "Analytics", href: "/dashboard/analytics", icon: FiBarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <FiFileText className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gray-900">InvoicePro</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
