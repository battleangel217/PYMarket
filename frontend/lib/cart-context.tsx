"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { CartItem } from "./types"

interface CartContextType {
  cart: CartItem[]
  addToCart: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: (products: any[]) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId: string, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) => prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = (products: any[]) => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId)
      return total + (product?.price || 0) * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
