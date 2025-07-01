import {
  FileText,
  Users,
  BarChart3,
  Clock,
  Shield,
  Smartphone,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Professional Invoices",
    description: "Create beautiful, professional invoices with customizable templates and branding.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Organize and manage all your client information in one centralized location.",
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description: "Get insights into your business performance with detailed reports and analytics.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Track time spent on projects and automatically convert to billable hours.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security and regular backups.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your invoices and manage your business from anywhere, on any device.",
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage your business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you streamline your invoicing process and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
