"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User } from "./types"

interface AuthContextType {
  user: User | null
  signup: (name: string, email: string, password: string, role: "customer" | "vendor") => Promise<{ success: boolean }>
  login: (email: string, password: string) => Promise<{ success: boolean; user: User | null }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DUMMY_USERS: User[] = []

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedUsers = localStorage.getItem("dummy_users")

    if (storedUsers) {
      DUMMY_USERS.push(...JSON.parse(storedUsers))
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signup = async (name: string, email: string, password: string, role: "customer" | "vendor") => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if user already exists
    const existingUser = DUMMY_USERS.find((u) => u.email === email)
    if (existingUser) {
      return { success: false }
    }

    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}`,
      name,
      email,
      role,
      walletBalance: 0,
    }

    DUMMY_USERS.push(newUser)
    localStorage.setItem("dummy_users", JSON.stringify(DUMMY_USERS))

    return { success: true }
  }

  const login = async (email: string, password: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    const storedUsers = localStorage.getItem("dummy_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    const foundUser = users.find((u: User) => u.email === email)

    if (foundUser) {
      setUser(foundUser)
      localStorage.setItem("user", JSON.stringify(foundUser))
      return { success: true, user: foundUser }
    }

    return { success: false, user: null }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, signup, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
