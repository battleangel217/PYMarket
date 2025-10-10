// // Authentication Management
// class AuthManager {
//   constructor() {
//     this.user = this.loadUser()
//   }

//   loadUser() {
//     const saved = localStorage.getItem("pymarket_user")
//     return saved ? JSON.parse(saved) : null
//   }

//   saveUser(user) {
//     localStorage.setItem("pymarket_user", JSON.stringify(user))
//     this.user = user
//     this.updateAuthUI()
//   }

//   login() {
//     // Mock login - replace with actual API call
//     const user = localStorage.getItem('user')
//     console.log(user)
//     this.saveUser(user)
//     return user
//   }

//   signup() {
//     // Mock signup - replace with actual API call
//     const user = localStorage('data')
//     this.saveUser(user)
//     return user
//   }

//   logout() {
//     localStorage.removeItem("access_token")
//     localStorage.removeItem("refresh_token")

//     this.user = null
//     this.updateAuthUI()
//     window.location.href = "index.html"
//   }

//   isAuthenticated() {
//     return this.user !== null
//   }

//   getUser() {
//     return this.user
//   }

//   isVendor() {
//     return this.user && this.user.role === "vendor"
//   }

//   updateAuthUI() {
//     const authButtons = document.querySelector(".auth-buttons")
//     const userMenu = document.querySelector(".user-menu")

//     if (this.isAuthenticated()) {
//       if (authButtons) authButtons.style.display = "none"
//       if (userMenu) {
//         userMenu.style.display = "block"
//         const userName = userMenu.querySelector(".user-name")
//         if (userName) userName.textContent = this.user.username
//       }
//     } else {
//       if (authButtons) authButtons.style.display = "flex"
//       if (userMenu) userMenu.style.display = "none"
//     }
//   }

//   requireAuth() {
//     if (!this.isAuthenticated()) {
//       window.location.href = "login.html"
//       return false
//     }
//     return true
//   }

//   requireVendor() {
//     if (!this.requireAuth()) return false
//     if (!this.isVendor()) {
//       alert("Access denied. Vendor account required.")
//       window.location.href = "/"
//       return false
//     }
//     return true
//   }
// }

// // Initialize auth manager
// const authManager = new AuthManager()

// // Update UI on page load
// document.addEventListener("DOMContentLoaded", () => {
//   authManager.updateAuthUI()
// })



async function fetchProfile() {
    const accessToken = localStorage.getItem('access_token');
    
    const response = await fetch('http://127.0.0.1:8000/auth/profile/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      userprofile(data);

    } else if (response.status === 401) {
      // Token expired, try to refresh
      await refreshAccessToken();
      return fetchProfile(); // retry
    } else {
      alert('Error fetching profile');
    }
  }

  fetchProfile();

async function userprofile(data) {
  const usermenu = document.querySelector('.user-menu');
  const authButtons = document.querySelector(".auth-buttons");
  if (data){
    usermenu.style.display = "block"
    authButtons.style.display = "none"

    const username = usermenu.querySelector('.user-name');
    username.textContent = data.username
  }else{
    authButtons.style.display = "flex";
    usermenu.style.display = "none";
  }
}
  