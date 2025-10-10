// Wallet Manager
class WalletManager {
  constructor() {
    this.storageKey = "pymarket_wallet"
    this.init()
  }

  init() {
    const wallet = this.getWallet()
    if (!wallet) {
      this.saveWallet({
        balance: 0,
        transactions: [],
      })
    }
  }

  getWallet() {
    const wallet = localStorage.getItem(this.storageKey)
    return wallet ? JSON.parse(wallet) : null
  }

  saveWallet(wallet) {
    localStorage.setItem(this.storageKey, JSON.stringify(wallet))
    this.updateWalletDisplay()
  }

  getBalance() {
    const wallet = this.getWallet()
    return wallet ? wallet.balance : 0
  }

  addMoney(amount, description = "Deposit") {
    const wallet = this.getWallet()
    wallet.balance += amount
    wallet.transactions.unshift({
      id: Date.now(),
      type: "credit",
      amount: amount,
      description: description,
      date: new Date().toISOString(),
      balance: wallet.balance,
    })
    this.saveWallet(wallet)
    return true
  }

  withdraw(amount, description = "Withdrawal") {
    const wallet = this.getWallet()
    if (wallet.balance < amount) {
      return false
    }
    wallet.balance -= amount
    wallet.transactions.unshift({
      id: Date.now(),
      type: "debit",
      amount: amount,
      description: description,
      date: new Date().toISOString(),
      balance: wallet.balance,
    })
    this.saveWallet(wallet)
    return true
  }

  getTransactions() {
    const wallet = this.getWallet()
    return wallet ? wallet.transactions : []
  }

  updateWalletDisplay() {
    const walletBalanceElements = document.querySelectorAll(".wallet-balance")
    const balance = this.getBalance()
    walletBalanceElements.forEach((el) => {
      el.textContent = `$${balance.toFixed(2)}`
    })
  }
}

// Create global wallet manager instance
const walletManager = new WalletManager()
