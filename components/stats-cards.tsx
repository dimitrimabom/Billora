export function StatsCards() {
  const stats = [
    {
      title: "Total Clients",
      value: "45",
      icon: "👥",
    },
    {
      title: "Pending",
      value: "€12,340,00",
      icon: "⏳",
    },
    {
      title: "Paid",
      value: "€8,750,00",
      icon: "✅",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="stat-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
