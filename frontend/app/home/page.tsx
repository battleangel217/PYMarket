"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"
import { mockProducts } from "@/lib/mock-data"
import type { Category } from "@/lib/types"
import { Search, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

const categories: Category[] = ["Electronics", "Fashion", "Books", "Food", "Services", "Other"]

export default function HomePage() {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All")

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddToCart = (productId: string) => {
    addToCart(productId, 1)
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Welcome to Campus Market</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your trusted marketplace for buying and selling within the college community
          </p>
        </section>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">{selectedCategory === "All" ? "All Products" : selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col">
                <Link href={`/product/${product.id}`}>
                  <CardHeader className="p-0 cursor-pointer">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform"
                    />
                  </CardHeader>
                </Link>
                <CardContent className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Link href={`/product/${product.id}`} className="hover:underline">
                      <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                    </Link>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">${product.price}</p>
                      <p className="text-xs text-muted-foreground">{product.stock} in stock</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">by</p>
                      <p className="text-sm font-medium">{product.vendorName}</p>
                    </div>
                  </div>
                </CardContent>
                {user.role === "customer" && (
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(product.id)}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
