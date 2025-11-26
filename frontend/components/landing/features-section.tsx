import { ShoppingBag, TrendingUp, Wallet, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Shopping",
    description: "Browse products from fellow students and buy with confidence",
  },
  {
    icon: TrendingUp,
    title: "Vendor Dashboard",
    description: "Track sales, manage inventory, and grow your business",
  },
  {
    icon: Wallet,
    title: "Secure Wallet",
    description: "Safe and easy payments with integrated wallet system",
  },
  {
    icon: Shield,
    title: "Campus Community",
    description: "Trade within your trusted college community",
  },
]

export function FeaturesSection() {
  return (
    <section className="container py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Built specifically for college students to buy and sell safely
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
