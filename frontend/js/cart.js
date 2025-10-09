// Cart Management
class CartManager {
  constructor() {
    this.cart = this.loadCart()
    this.addSampleData()
  }

  loadCart() {
    const saved = localStorage.getItem("pymarket_cart")
    return saved ? JSON.parse(saved) : []
  }

  saveCart() {
    localStorage.setItem("pymarket_cart", JSON.stringify(this.cart))
    this.updateCartBadge()
    this.dispatchCartUpdate()
  }

  addToCart(product, quantity = 1) {
    const existingItem = this.cart.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      })
    }

    this.saveCart()
    return true
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId)
    this.saveCart()
  }

  updateQuantity(productId, quantity) {
    const item = this.cart.find((item) => item.id === productId)
    if (item) {
      item.quantity = Math.max(1, quantity)
      this.saveCart()
    }
  }

  getCart() {
    return this.cart
  }

  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0)
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  clearCart() {
    this.cart = []
    this.saveCart()
  }

  updateCartBadge() {
    const badge = document.querySelector(".cart-badge")
    if (badge) {
      const count = this.getCartCount()
      badge.textContent = count
      badge.style.display = count > 0 ? "block" : "none"
    }
  }

  dispatchCartUpdate() {
    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: { cart: this.cart },
      }),
    )
  }

  addSampleData() {
    // Only add sample data if cart is empty
    if (this.cart.length === 0) {
      const sampleProducts = [
        {
          id: 1,
          name: "Premium Wireless Headphones",
          price: 299.99,
          image: "public/wireless-headphones.png",
          quantity: 1,
        },
        {
          id: 3,
          name: "Running Shoes - Pro Series",
          price: 129.99,
          image: "public/running-shoes.jpg",
          quantity: 2,
        },
        {
          id: 5,
          name: "Smart Coffee Maker",
          price: 199.99,
          image: "public/modern-coffee-maker.png",
          quantity: 1,
        },
      ]

      sampleProducts.forEach((product) => {
        this.cart.push(product)
      })

      this.saveCart()
    }
  }
}

// Initialize cart manager
const cartManager = new CartManager()

// Update badge on page load
document.addEventListener("DOMContentLoaded", () => {
  cartManager.updateCartBadge()
})
