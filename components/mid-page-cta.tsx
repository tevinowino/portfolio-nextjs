import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function MidPageCTA() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
          Let's Build Your Future-Ready Business
        </h2>
        <p className="text-xl text-white/90 mb-8 text-pretty">
          Ready to transform your technology challenges into competitive advantages? Let's discuss how we can help you
          scale smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-teal hover:bg-gray-100 text-lg px-8 py-4">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-teal text-lg px-8 py-4 bg-transparent"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
