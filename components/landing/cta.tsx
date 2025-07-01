import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi"

export function LandingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to streamline your invoicing?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses that trust InvoicePro to manage their invoicing and grow their revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Free Trial
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-4">No credit card required • 14-day free trial</p>
      </div>
    </section>
  )
}
