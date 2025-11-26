"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { useAuth } from "@/lib/auth-context"
import { mockProducts } from "@/lib/mock-data"
import { ShoppingCart, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = mockProducts.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/home">
            <Button>Back to Home</Button>
          </Link>
        </main>
      </div>
    )
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} item(s) added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Slider */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[500px] object-cover rounded-t-lg"
                />

                {/* Navigation Arrows - Only show if multiple images */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex ? "w-8 bg-primary" : "w-2 bg-white/50"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {images.length > 1 && (
                <div className="p-4 flex gap-2 overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Product Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <Badge variant="secondary">{product.category}</Badge>
              </div>
            </div>

            <p className="text-3xl font-bold mb-4">${product.price}</p>

            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Stock Available</p>
                  <p className="text-2xl font-bold">{product.stock}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">Total Sold</p>
                  <p className="text-2xl font-bold">{product.sold}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Vendor</p>
                <p className="text-lg font-semibold">{product.vendorName}</p>
              </CardContent>
            </Card>

            {user?.role === "customer" && (
              <>
                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={product.stock === 0}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
