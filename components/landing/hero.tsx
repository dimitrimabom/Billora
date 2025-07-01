import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiArrowRight, FiPlay } from "react-icons/fi"

export function LandingHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Invoice
            <span className="text-primary block">Management Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your business with our comprehensive invoicing solution. Create, send, and track invoices while
            managing clients and analyzing your financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Free Trial
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              <FiPlay className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Company A</div>
              <div className="text-2xl font-bold text-gray-400">Company B</div>
              <div className="text-2xl font-bold text-gray-400">Company C</div>
              <div className="text-2xl font-bold text-gray-400">Company D</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
