// Mock Product Data
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "electronics",
    image: "/public/wireless-headphones.png",
    description: "Premium wireless headphones with noise cancellation",
    rating: 4.5,
    reviews: 128,
    stock: 45,
    vendor: "TechStore",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "electronics",
    image: "/public/smartwatch-lifestyle.png",
    description: "Feature-rich smartwatch with health tracking",
    rating: 4.7,
    reviews: 89,
    stock: 32,
    vendor: "TechStore",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    category: "electronics",
    image: "/portable-bluetooth-speaker.jpg",
    description: "Portable speaker with 360-degree sound",
    rating: 4.5,
    reviews: 167,
    stock: 41,
    vendor: "TechStore",
  },
  {
    id: 9,
    name: "4K Webcam",
    price: 149.99,
    category: "electronics",
    image: "/4k-webcam.png",
    description: "Ultra HD webcam with auto-focus and noise reduction",
    rating: 4.6,
    reviews: 94,
    stock: 28,
    vendor: "TechStore",
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 34.99,
    category: "electronics",
    image: "/wireless-ergonomic-mouse.jpg",
    description: "Ergonomic wireless mouse with precision tracking",
    rating: 4.4,
    reviews: 312,
    stock: 156,
    vendor: "TechStore",
  },
  {
    id: 11,
    name: "USB-C Hub",
    price: 49.99,
    category: "electronics",
    image: "/usb-c-hub-adapter.jpg",
    description: "7-in-1 USB-C hub with HDMI and card reader",
    rating: 4.3,
    reviews: 178,
    stock: 89,
    vendor: "TechStore",
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    price: 119.99,
    category: "electronics",
    image: "/rgb-mechanical-keyboard.jpg",
    description: "RGB mechanical keyboard with blue switches",
    rating: 4.8,
    reviews: 245,
    stock: 67,
    vendor: "TechStore",
  },
  {
    id: 13,
    name: "Portable SSD 1TB",
    price: 89.99,
    category: "electronics",
    image: "/portable-ssd-drive.jpg",
    description: "Fast portable SSD with USB 3.2 Gen 2",
    rating: 4.7,
    reviews: 156,
    stock: 43,
    vendor: "TechStore",
  },
  {
    id: 14,
    name: "Wireless Earbuds",
    price: 129.99,
    category: "electronics",
    image: "/wireless-earbuds-case.jpg",
    description: "True wireless earbuds with active noise cancellation",
    rating: 4.6,
    reviews: 289,
    stock: 78,
    vendor: "TechStore",
  },
  {
    id: 15,
    name: "Ring Light",
    price: 45.99,
    category: "electronics",
    image: "/led-ring-light-tripod.jpg",
    description: "LED ring light with tripod for content creation",
    rating: 4.5,
    reviews: 134,
    stock: 92,
    vendor: "TechStore",
  },
  {
    id: 16,
    name: "Power Bank 20000mAh",
    price: 39.99,
    category: "electronics",
    image: "/portable-power-bank.png",
    description: "High-capacity power bank with fast charging",
    rating: 4.4,
    reviews: 421,
    stock: 167,
    vendor: "TechStore",
  },
  {
    id: 17,
    name: "Gaming Headset",
    price: 89.99,
    category: "electronics",
    image: "/gaming-headset-microphone.jpg",
    description: "7.1 surround sound gaming headset with mic",
    rating: 4.7,
    reviews: 198,
    stock: 54,
    vendor: "TechStore",
  },
  {
    id: 18,
    name: "Tablet Stand",
    price: 24.99,
    category: "electronics",
    image: "/adjustable-tablet-stand.jpg",
    description: "Adjustable aluminum tablet and phone stand",
    rating: 4.3,
    reviews: 267,
    stock: 134,
    vendor: "TechStore",
  },
  {
    id: 19,
    name: "Smart LED Bulbs (4-Pack)",
    price: 54.99,
    category: "electronics",
    image: "/smart-led-light-bulbs.jpg",
    description: "WiFi-enabled color-changing LED bulbs",
    rating: 4.5,
    reviews: 312,
    stock: 89,
    vendor: "TechStore",
  },
  {
    id: 20,
    name: "Wireless Charging Pad",
    price: 29.99,
    category: "electronics",
    image: "/wireless-charging-pad.png",
    description: "Fast wireless charging pad for smartphones",
    rating: 4.4,
    reviews: 189,
    stock: 145,
    vendor: "TechStore",
  },

  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    category: "fashion",
    image: "/public/running-shoes.jpg",
    description: "Comfortable running shoes for all terrains",
    rating: 4.3,
    reviews: 256,
    stock: 78,
    vendor: "SportGear",
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 49.99,
    category: "fashion",
    image: "/laptop-backpack.png",
    description: "Durable backpack with laptop compartment",
    rating: 4.4,
    reviews: 92,
    stock: 67,
    vendor: "TravelPro",
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 29.99,
    category: "fashion",
    image: "/rolled-yoga-mat.jpg",
    description: "Non-slip yoga mat with carrying strap",
    rating: 4.6,
    reviews: 203,
    stock: 89,
    vendor: "SportGear",
  },
  {
    id: 21,
    name: "Leather Wallet",
    price: 39.99,
    category: "fashion",
    image: "/leather-bifold-wallet.jpg",
    description: "Genuine leather bifold wallet with RFID protection",
    rating: 4.5,
    reviews: 178,
    stock: 123,
    vendor: "StyleHub",
  },
  {
    id: 22,
    name: "Sunglasses",
    price: 79.99,
    category: "fashion",
    image: "/aviator-sunglasses.png",
    description: "Polarized aviator sunglasses with UV protection",
    rating: 4.6,
    reviews: 145,
    stock: 98,
    vendor: "StyleHub",
  },
  {
    id: 23,
    name: "Denim Jacket",
    price: 69.99,
    category: "fashion",
    image: "/blue-denim-jacket.jpg",
    description: "Classic blue denim jacket with button closure",
    rating: 4.4,
    reviews: 89,
    stock: 45,
    vendor: "StyleHub",
  },
  {
    id: 24,
    name: "Sneakers",
    price: 99.99,
    category: "fashion",
    image: "/white-sneakers.png",
    description: "Comfortable white sneakers for everyday wear",
    rating: 4.7,
    reviews: 234,
    stock: 67,
    vendor: "SportGear",
  },
  {
    id: 25,
    name: "Crossbody Bag",
    price: 54.99,
    category: "fashion",
    image: "/leather-crossbody-bag.png",
    description: "Stylish leather crossbody bag with adjustable strap",
    rating: 4.5,
    reviews: 167,
    stock: 89,
    vendor: "StyleHub",
  },
  {
    id: 26,
    name: "Baseball Cap",
    price: 24.99,
    category: "fashion",
    image: "/baseball-cap.png",
    description: "Adjustable cotton baseball cap",
    rating: 4.3,
    reviews: 312,
    stock: 156,
    vendor: "StyleHub",
  },
  {
    id: 27,
    name: "Fitness Tracker Band",
    price: 34.99,
    category: "fashion",
    image: "/fitness-tracker-wristband.jpg",
    description: "Waterproof fitness tracker with heart rate monitor",
    rating: 4.4,
    reviews: 198,
    stock: 112,
    vendor: "SportGear",
  },
  {
    id: 28,
    name: "Winter Scarf",
    price: 29.99,
    category: "fashion",
    image: "/knit-winter-scarf.jpg",
    description: "Soft knit winter scarf in multiple colors",
    rating: 4.6,
    reviews: 145,
    stock: 178,
    vendor: "StyleHub",
  },
  {
    id: 29,
    name: "Gym Duffle Bag",
    price: 44.99,
    category: "fashion",
    image: "/gym-duffle-bag.jpg",
    description: "Spacious gym duffle bag with shoe compartment",
    rating: 4.5,
    reviews: 123,
    stock: 67,
    vendor: "SportGear",
  },
  {
    id: 30,
    name: "Leather Belt",
    price: 34.99,
    category: "fashion",
    image: "/leather-belt.png",
    description: "Genuine leather belt with classic buckle",
    rating: 4.4,
    reviews: 234,
    stock: 145,
    vendor: "StyleHub",
  },
  {
    id: 31,
    name: "Sports Socks (6-Pack)",
    price: 19.99,
    category: "fashion",
    image: "/athletic-socks.jpg",
    description: "Moisture-wicking athletic socks",
    rating: 4.3,
    reviews: 289,
    stock: 234,
    vendor: "SportGear",
  },
  {
    id: 32,
    name: "Watch",
    price: 149.99,
    category: "fashion",
    image: "/analog-wristwatch.jpg",
    description: "Classic analog watch with leather strap",
    rating: 4.7,
    reviews: 167,
    stock: 54,
    vendor: "StyleHub",
  },

  {
    id: 4,
    name: "Coffee Maker",
    price: 129.99,
    category: "home-garden",
    image: "/public/modern-coffee-maker.png",
    description: "Programmable coffee maker with thermal carafe",
    rating: 4.6,
    reviews: 145,
    stock: 23,
    vendor: "HomeEssentials",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 39.99,
    category: "home-garden",
    image: "/modern-desk-lamp.png",
    description: "LED desk lamp with adjustable brightness",
    rating: 4.2,
    reviews: 73,
    stock: 54,
    vendor: "HomeEssentials",
  },
  {
    id: 33,
    name: "Throw Pillows (Set of 2)",
    price: 34.99,
    category: "home-garden",
    image: "/decorative-throw-pillows.png",
    description: "Decorative throw pillows with removable covers",
    rating: 4.5,
    reviews: 198,
    stock: 89,
    vendor: "HomeEssentials",
  },
  {
    id: 34,
    name: "Wall Clock",
    price: 44.99,
    category: "home-garden",
    image: "/modern-wall-clock.png",
    description: "Modern silent wall clock with large numbers",
    rating: 4.4,
    reviews: 156,
    stock: 67,
    vendor: "HomeEssentials",
  },
  {
    id: 35,
    name: "Candle Set (3-Pack)",
    price: 29.99,
    category: "home-garden",
    image: "/scented-candles.png",
    description: "Scented soy candles in glass jars",
    rating: 4.6,
    reviews: 234,
    stock: 123,
    vendor: "HomeEssentials",
  },
  {
    id: 36,
    name: "Kitchen Knife Set",
    price: 89.99,
    category: "home-garden",
    image: "/kitchen-knife-set-block.jpg",
    description: "Professional 15-piece kitchen knife set with block",
    rating: 4.7,
    reviews: 178,
    stock: 45,
    vendor: "HomeEssentials",
  },
  {
    id: 37,
    name: "Blender",
    price: 79.99,
    category: "home-garden",
    image: "/high-speed-blender.jpg",
    description: "High-speed blender for smoothies and soups",
    rating: 4.5,
    reviews: 267,
    stock: 56,
    vendor: "HomeEssentials",
  },
  {
    id: 38,
    name: "Bath Towel Set (4-Pack)",
    price: 49.99,
    category: "home-garden",
    image: "/fluffy-bath-towels.png",
    description: "Soft cotton bath towels in various colors",
    rating: 4.4,
    reviews: 312,
    stock: 98,
    vendor: "HomeEssentials",
  },
  {
    id: 39,
    name: "Vacuum Cleaner",
    price: 199.99,
    category: "home-garden",
    image: "/cordless-vacuum-cleaner.png",
    description: "Cordless stick vacuum with HEPA filter",
    rating: 4.6,
    reviews: 189,
    stock: 34,
    vendor: "HomeEssentials",
  },
  {
    id: 40,
    name: "Picture Frames (Set of 5)",
    price: 39.99,
    category: "home-garden",
    image: "/picture-frames.jpg",
    description: "Wooden picture frames in assorted sizes",
    rating: 4.3,
    reviews: 145,
    stock: 112,
    vendor: "HomeEssentials",
  },
  {
    id: 41,
    name: "Indoor Plant Pot Set",
    price: 34.99,
    category: "home-garden",
    image: "/ceramic-plant-pots.png",
    description: "Set of 3 ceramic plant pots with drainage",
    rating: 4.5,
    reviews: 223,
    stock: 89,
    vendor: "HomeEssentials",
  },
  {
    id: 42,
    name: "Bedding Set Queen",
    price: 79.99,
    category: "home-garden",
    image: "/bedding-comforter-set.jpg",
    description: "7-piece queen bedding set with comforter",
    rating: 4.6,
    reviews: 167,
    stock: 45,
    vendor: "HomeEssentials",
  },
  {
    id: 43,
    name: "Area Rug 5x7",
    price: 119.99,
    category: "home-garden",
    image: "/colorful-geometric-area-rug.png",
    description: "Modern geometric area rug for living room",
    rating: 4.4,
    reviews: 134,
    stock: 28,
    vendor: "HomeEssentials",
  },
  {
    id: 44,
    name: "Storage Baskets (Set of 3)",
    price: 44.99,
    category: "home-garden",
    image: "/woven-storage-baskets.jpg",
    description: "Woven storage baskets with handles",
    rating: 4.3,
    reviews: 198,
    stock: 76,
    vendor: "HomeEssentials",
  },
  {
    id: 45,
    name: "Air Purifier",
    price: 159.99,
    category: "home-garden",
    image: "/placeholder.svg?height=300&width=300",
    description: "HEPA air purifier for large rooms",
    rating: 4.7,
    reviews: 245,
    stock: 41,
    vendor: "HomeEssentials",
  },

  {
    id: 46,
    name: "The Midnight Library",
    price: 16.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Bestselling fiction novel by Matt Haig",
    rating: 4.8,
    reviews: 1245,
    stock: 156,
    vendor: "BookHaven",
  },
  {
    id: 47,
    name: "Atomic Habits",
    price: 18.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Life-changing guide to building good habits",
    rating: 4.9,
    reviews: 2134,
    stock: 234,
    vendor: "BookHaven",
  },
  {
    id: 48,
    name: "Project Hail Mary",
    price: 19.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Sci-fi thriller by Andy Weir",
    rating: 4.7,
    reviews: 987,
    stock: 123,
    vendor: "BookHaven",
  },
  {
    id: 49,
    name: "The Psychology of Money",
    price: 17.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Timeless lessons on wealth and happiness",
    rating: 4.8,
    reviews: 1567,
    stock: 189,
    vendor: "BookHaven",
  },
  {
    id: 50,
    name: "Where the Crawdads Sing",
    price: 15.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Coming-of-age mystery novel",
    rating: 4.6,
    reviews: 3421,
    stock: 267,
    vendor: "BookHaven",
  },
  {
    id: 51,
    name: "Educated: A Memoir",
    price: 16.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Powerful memoir by Tara Westover",
    rating: 4.7,
    reviews: 2345,
    stock: 178,
    vendor: "BookHaven",
  },
  {
    id: 52,
    name: "The Silent Patient",
    price: 14.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Gripping psychological thriller",
    rating: 4.5,
    reviews: 1876,
    stock: 145,
    vendor: "BookHaven",
  },
  {
    id: 53,
    name: "Sapiens",
    price: 21.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "A brief history of humankind",
    rating: 4.8,
    reviews: 3156,
    stock: 198,
    vendor: "BookHaven",
  },
  {
    id: 54,
    name: "The Four Agreements",
    price: 13.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Practical guide to personal freedom",
    rating: 4.7,
    reviews: 2789,
    stock: 234,
    vendor: "BookHaven",
  },
  {
    id: 55,
    name: "Becoming",
    price: 19.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Memoir by Michelle Obama",
    rating: 4.9,
    reviews: 4123,
    stock: 289,
    vendor: "BookHaven",
  },
  {
    id: 56,
    name: "The Alchemist",
    price: 14.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Inspiring tale of following your dreams",
    rating: 4.6,
    reviews: 5678,
    stock: 312,
    vendor: "BookHaven",
  },
  {
    id: 57,
    name: "Thinking, Fast and Slow",
    price: 20.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Groundbreaking work on decision-making",
    rating: 4.7,
    reviews: 1987,
    stock: 167,
    vendor: "BookHaven",
  },
  {
    id: 58,
    name: "The Subtle Art of Not Giving a F*ck",
    price: 16.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Counterintuitive approach to living a good life",
    rating: 4.5,
    reviews: 2456,
    stock: 201,
    vendor: "BookHaven",
  },
  {
    id: 59,
    name: "1984",
    price: 12.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Classic dystopian novel by George Orwell",
    rating: 4.8,
    reviews: 6789,
    stock: 345,
    vendor: "BookHaven",
  },
  {
    id: 60,
    name: "The 7 Habits of Highly Effective People",
    price: 18.99,
    category: "books",
    image: "/placeholder.svg?height=300&width=300",
    description: "Powerful lessons in personal change",
    rating: 4.7,
    reviews: 3421,
    stock: 223,
    vendor: "BookHaven",
  },
]

const categories = [
  { id: "electronics", name: "Electronics", image: "public/electronics-components.png" },
  { id: "fashion", name: "Fashion", image: "public/diverse-fashion-collection.png" },
  { id: "home-garden", name: "Home & Garden", image: "public/lush-home-garden.png" },
  { id: "books", name: "Books", image: "public/stack-of-diverse-books.png" },
]

console.log("[v0] products.js loaded")
console.log("[v0] Total products:", mockProducts.length)
console.log("[v0] Categories:", categories.length)

// Product Functions
function getProducts(filters = {}) {
  console.log("[v0] getProducts called with filters:", filters)
  let filtered = [...mockProducts]

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category)
  }

  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice)
  }

  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice)
  }

  if (filters.search) {
    const search = filters.search.toLowerCase()
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search),
    )
  }

  if (filters.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (filters.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price)
  } else if (filters.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  console.log("[v0] Returning", filtered.length, "products")
  return filtered
}

function getProductById(id) {
  const product = mockProducts.find((p) => p.id === Number.parseInt(id))
  console.log("[v0] getProductById called with id:", id, "found:", product)
  return product
}

function getCategories() {
  console.log("[v0] getCategories called, returning", categories.length, "categories")
  return categories
}

function getCategoryBySlug(slug) {
  const category = categories.find((c) => c.id === slug)
  console.log("[v0] getCategoryBySlug called with slug:", slug, "found:", category)
  return category
}

// Render Functions
function renderProductCard(product) {
  return `
    <div class="card product-card">
      <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit;">
        <img src="${product.image}" alt="${product.name}" class="product-card-img">
      </a>
      <div class="product-card-body">
        <h3 class="card-title">
          <a href="product-detail.html?id=${product.id}" style="text-decoration: none; color: inherit;">
            ${product.name}
          </a>
        </h3>
        <div class="product-rating">
          ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
          <span class="text-muted">(${product.reviews})</span>
        </div>
        <p class="card-text">${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-card-footer">
          <button class="btn btn-primary" style="width: 100%;" onclick="event.preventDefault(); event.stopPropagation(); addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `
}

function renderCategoryCard(category) {
  return `
    <a href="categories.html?category=${category.id}" class="card" style="text-decoration: none; color: inherit;">
      <img src="${category.image}" alt="${category.name}" class="card-img">
      <div class="card-body">
        <h3 class="card-title text-center">${category.name}</h3>
      </div>
    </a>
  `
}

// Helper function to add product to cart
function addToCart(productId) {
  console.log("[v0] addToCart called with productId:", productId)
  const product = getProductById(productId)
  console.log("[v0] Found product:", product)

  if (product) {
    // Check if cartManager exists (from cart.js)
    if (window.cartManager && window.cartManager.addToCart) {
      console.log("[v0] Adding to cart via cartManager")
      window.cartManager.addToCart(product, 1)
      showNotification(`${product.name} added to cart!`)
    } else {
      console.error("[v0] cartManager not found or doesn't have addToCart method")
      alert(`${product.name} added to cart!`)
    }
  } else {
    console.error("[v0] Product not found for ID:", productId)
  }
}

// Show notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `alert alert-${type}`
  notification.textContent = message
  notification.style.position = "fixed"
  notification.style.top = "20px"
  notification.style.right = "20px"
  notification.style.zIndex = "9999"
  notification.style.minWidth = "250px"
  notification.style.padding = "1rem"
  notification.style.borderRadius = "0.5rem"
  notification.style.backgroundColor = type === "success" ? "#10b981" : "#ef4444"
  notification.style.color = "white"
  notification.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

console.log("[v0] products.js functions defined")
console.log("[v0] cartManager available:", typeof window.cartManager !== "undefined")
