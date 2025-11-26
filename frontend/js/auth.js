// Authentication Management
class AuthManager {
  constructor() {
    this.user = this.loadUser()
  }

  loadUser() {
    const saved = localStorage.getItem("pymarket_user")
    return saved ? JSON.parse(saved) : null
  }

  saveUser(user) {
    localStorage.setItem("pymarket_user", JSON.stringify(user))
    this.user = user
    this.updateAuthUI()
  }

  login(email, password) {
    // Mock login - replace with actual API call
    const user = {
      id: Date.now(),
      email: email,
      name: email.split("@")[0],
      role: "buyer",
    }
    this.saveUser(user)
    return user
  }

  signup(email, password, role, businessName = null, username = null) {
    // Mock signup - replace with actual API call
    const user = {
      id: Date.now(),
      email: email,
      name: username || email.split("@")[0],
      username: username || email.split("@")[0],
      role: role,
      businessName: businessName,
    }
    this.saveUser(user)
    return user
  }

  logout() {
    localStorage.removeItem("pymarket_user")
    this.user = null
    this.updateAuthUI()
    window.location.href = "/"
  }

  isAuthenticated() {
    return this.user !== null
  }

  getUser() {
    return this.user
  }

  isVendor() {
    return this.user && this.user.role === "vendor"
  }

  updateAuthUI() {
    const authButtons = document.querySelector(".auth-buttons")
    const userMenu = document.querySelector(".user-menu")

    if (this.isAuthenticated()) {
      if (authButtons) authButtons.style.display = "none"
      if (userMenu) {
        userMenu.style.display = "block"
        const userName = userMenu.querySelector(".user-name")
        if (userName) userName.textContent = this.user.name
      }
    } else {
      if (authButtons) authButtons.style.display = "flex"
      if (userMenu) userMenu.style.display = "none"
    }
  }

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = "login.html"
      return false
    }
    return true
  }

  requireVendor() {
    if (!this.requireAuth()) return false
    if (!this.isVendor()) {
      alert("Access denied. Vendor account required.")
      window.location.href = "/"
      return false
    }
    return true
  }
}

// Initialize auth manager
const authManager = new AuthManager()

// Update UI on page load
document.addEventListener("DOMContentLoaded", () => {
  authManager.updateAuthUI()
})
