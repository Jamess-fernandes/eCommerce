const products = [
    // Electronics (40 products)
    { id: 1, name: "Wireless Noise-Cancelling Headphones", price: 249.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", category: "electronics", description: "Premium wireless headphones with active noise cancellation.", features: ["Active Noise Cancellation", "30h Battery", "Bluetooth 5.0"] },
    { id: 2, name: "Smart Watch Pro", price: 299.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", category: "electronics", description: "Advanced smartwatch with health monitoring.", features: ["Heart Rate Monitor", "GPS", "7-day Battery"] },
    { id: 3, name: "Wireless Earbuds Pro", price: 179.99, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop", category: "electronics", description: "True wireless earbuds with active noise cancellation.", features: ["Active Noise Cancellation", "24h Battery", "Wireless Charging"] },
    { id: 4, name: "4K Smart TV 55\"", price: 699.99, image: "https://images.unsplash.com/photo-1605020420470-9b7c52052ac6?w=400&h=300&fit=crop", category: "electronics", description: "Crystal clear 4K resolution with smart features.", features: ["4K UHD", "Smart TV", "HDR"] },
    { id: 5, name: "Gaming Console", price: 499.99, image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=400&h=300&fit=crop", category: "electronics", description: "Next-gen gaming console with 4K gaming.", features: ["4K Gaming", "1TB SSD", "4K Blu-ray"] },
    { id: 6, name: "Bluetooth Speaker", price: 129.99, image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop", category: "electronics", description: "Portable waterproof Bluetooth speaker.", features: ["20h Playtime", "IPX7 Waterproof", "Stereo Sound"] },
    { id: 7, name: "E-Reader", price: 149.99, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop", category: "electronics", description: "Paper-like display for comfortable reading.", features: ["6.8\" Display", "Weeks of Battery", "Adjustable Light"] },
    { id: 8, name: "Fitness Tracker", price: 79.99, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=300&fit=crop", category: "electronics", description: "Track your fitness goals in style.", features: ["Heart Rate", "Sleep Tracking", "Water Resistant"] },

    // Smartphones (20 products)
    { id: 41, name: "Galaxy S22 Ultra 5G", price: 1199.99, image: "https://images.unsplash.com/photo-1647427019277-3f1ab0d5e9e7?w=400&h=300&fit=crop", category: "smartphones", description: "Flagship smartphone with S Pen.", features: ["6.8\" AMOLED", "108MP Camera", "5000mAh"] },
    { id: 42, name: "iPhone 14 Pro", price: 999.99, image: "https://images.unsplash.com/photo-1663499482523-1c0c7b39694f?w=400&h=300&fit=crop", category: "smartphones", description: "Pro camera system and Dynamic Island.", features: ["A16 Bionic", "48MP Camera", "Always-On Display"] },
    { id: 43, name: "Google Pixel 7 Pro", price: 899.99, image: "https://images.unsplash.com/photo-1665454456309-8044a3d1d3d9?w=400&h=300&fit=crop", category: "smartphones", description: "The most helpful phone.", features: ["Google Tensor G2", "50MP Camera", "30W Fast Charging"] },

    // Laptops (25 products)
    { id: 61, name: "MacBook Pro 16\" M2", price: 2499.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop", category: "laptops", description: "Powerful laptop for professionals.", features: ["M2 Pro Chip", "16.2\" Display", "32GB RAM"] },
    { id: 62, name: "Dell XPS 15", price: 1799.99, image: "https://images.unsplash.com/photo-1593642702821-8a615e6b0a01?w=400&h=300&fit=crop", category: "laptops", description: "Stunning 4K display in a compact design.", features: ["12th Gen i9", "32GB RAM", "1TB SSD"] },

    // Home & Kitchen (30 products)
    { id: 86, name: "Air Fryer XL", price: 129.99, image: "https://images.unsplash.com/photo-1608900938232-5d5c0b72cee3?w=400&h=300&fit=crop", category: "home", description: "Large capacity air fryer.", features: ["6.5QT Capacity", "6-in-1 Functions", "Digital Display"] },
    { id: 87, name: "Stand Mixer", price: 349.99, image: "https://images.unsplash.com/photo-1578474849013-78f79787798c?w=400&h=300&fit=crop", category: "home", description: "Powerful stand mixer for baking.", features: ["5.5QT Bowl", "10 Speeds", "3 Attachments"] },

    // Fashion (40 products)
    { id: 116, name: "Men's Casual Sneakers", price: 89.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", category: "fashion", description: "Comfortable and stylish sneakers.", features: ["Breathable Mesh", "Cushioned Insole", "Rubber Outsole"] },
    { id: 117, name: "Women's Winter Coat", price: 149.99, image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=300&fit=crop", category: "fashion", description: "Warm winter coat with faux fur.", features: ["Water Resistant", "Faux Fur Lining", "Multiple Pockets"] },

    // Beauty & Personal Care (25 products)
    { id: 156, name: "Ceramic Hair Dryer", price: 79.99, image: "https://images.unsplash.com/photo-1600334129128-685c5582aa35?w=400&h=300&fit=crop", category: "beauty", description: "Professional hair dryer.", features: ["1875W Power", "3 Heat Settings", "Ionic Technology"] },
    { id: 157, name: "Electric Toothbrush", price: 129.99, image: "https://images.unsplash.com/photo-1606811846749-e48d9fe2c1c2?w=400&h=300&fit=crop", category: "beauty", description: "Sonic electric toothbrush.", features: ["3 Modes", "Pressure Sensor", "2-Minute Timer"] },

    // Sports & Outdoors (20 products)
    { id: 181, name: "Yoga Mat", price: 49.99, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop", category: "sports", description: "Non-slip yoga mat.", features: ["6mm Thick", "Non-Slip Surface", "Eco-friendly"] },
    { id: 182, name: "Running Shoes", price: 119.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", category: "sports", description: "Lightweight running shoes.", features: ["Cushioned Sole", "Breathable Mesh", "Shock Absorption"] }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    const cartToggle = document.getElementById('cart-toggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', toggleCart);
    }

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (!e.target.closest('#cart-sidebar') && !e.target.closest('#cart-toggle') && cartSidebar) {
            cartSidebar.classList.add('translate-x-full');
        }
    });
}

// Render products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="bg-white rounded-lg overflow-hidden shadow-md product-card transition-all duration-300">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-2 line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-primary font-bold text-xl">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})" 
                            class="bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md transition-colors text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ 
            ...product, 
            quantity: quantity 
        });
    }

    updateCartUI();
    updateLocalStorage();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartUI();
        updateLocalStorage();
        showNotification('Item removed from cart');
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="text-center py-12 text-gray-500">
                    <i class="fas fa-shopping-cart text-4xl mb-4 opacity-20"></i>
                    <p>Your cart is empty</p>
                </div>`;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="flex items-center py-3 border-b">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium">${item.name}</h4>
                        <p class="text-primary font-semibold">$${item.price.toFixed(2)}</p>
                        <div class="flex items-center mt-1">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" 
                                    class="text-gray-500 hover:text-primary">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="mx-2">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" 
                                    class="text-gray-500 hover:text-primary">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" 
                            class="text-gray-400 hover:text-red-500 ml-2">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            `).join('');
        }
    }

    if (cartSubtotal) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        updateLocalStorage();
    }
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('translate-x-full');
    }
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce z-50';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleCart = toggleCart;