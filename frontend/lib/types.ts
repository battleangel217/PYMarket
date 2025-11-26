export interface User {
  id: string
  email: string
  name: string
  role: "vendor" | "customer"
  walletBalance: number
  avatar?: string
  createdAt: Date
}

export interface Product {
  id: string
  vendorId: string
  vendorName: string
  name: string
  description: string
  price: number
  category: string
  image: string // Keep for backward compatibility
  images: string[] // Multiple images for slider
  stock: number
  sold: number
  createdAt: Date
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface Transaction {
  id: string
  userId: string
  amount: number
  type: "credit" | "debit"
  description: string
  createdAt: Date
}

export interface Order {
  id: string
  customerId: string
  vendorId: string
  products: { productId: string; quantity: number; price: number }[]
  total: number
  status: "pending" | "completed" | "cancelled"
  createdAt: Date
}

export type Category = "Electronics" | "Fashion" | "Books" | "Food" | "Services" | "Other"
