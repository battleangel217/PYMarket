import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Your Campus <span className="text-primary">Marketplace</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
          Buy and sell products within your college community. Safe, easy, and built for students.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/signin">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
