const products = [
    {
        "id": 1,
        "name": "Electronics Product 1",
        "price": 49.99,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 2,
        "name": "Electronics Product 2",
        "price": 60.36,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 3,
        "name": "Electronics Product 3",
        "price": 70.73,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 4,
        "name": "Electronics Product 4",
        "price": 81.1,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 5,
        "name": "Electronics Product 5",
        "price": 91.47,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 6,
        "name": "Electronics Product 6",
        "price": 101.84,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 7,
        "name": "Electronics Product 7",
        "price": 112.21,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 8,
        "name": "Electronics Product 8",
        "price": 122.58,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 9,
        "name": "Electronics Product 9",
        "price": 132.95,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 10,
        "name": "Electronics Product 10",
        "price": 143.32,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 11,
        "name": "Electronics Product 11",
        "price": 153.69,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 12,
        "name": "Electronics Product 12",
        "price": 164.06,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 13,
        "name": "Electronics Product 13",
        "price": 174.43,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 14,
        "name": "Electronics Product 14",
        "price": 184.8,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 15,
        "name": "Electronics Product 15",
        "price": 195.17,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 16,
        "name": "Electronics Product 16",
        "price": 205.54,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 17,
        "name": "Electronics Product 17",
        "price": 215.91,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 18,
        "name": "Electronics Product 18",
        "price": 226.28,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 19,
        "name": "Electronics Product 19",
        "price": 236.65,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 20,
        "name": "Electronics Product 20",
        "price": 247.02,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 21,
        "name": "Electronics Product 21",
        "price": 257.39,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 22,
        "name": "Electronics Product 22",
        "price": 267.76,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 23,
        "name": "Electronics Product 23",
        "price": 278.13,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 24,
        "name": "Electronics Product 24",
        "price": 288.5,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 25,
        "name": "Electronics Product 25",
        "price": 298.87,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 26,
        "name": "Electronics Product 26",
        "price": 309.24,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 27,
        "name": "Electronics Product 27",
        "price": 319.61,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 28,
        "name": "Electronics Product 28",
        "price": 329.98,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 29,
        "name": "Electronics Product 29",
        "price": 340.35,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 30,
        "name": "Electronics Product 30",
        "price": 350.72,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 31,
        "name": "Electronics Product 31",
        "price": 361.09,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 32,
        "name": "Electronics Product 32",
        "price": 371.46,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 33,
        "name": "Electronics Product 33",
        "price": 381.83,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 34,
        "name": "Electronics Product 34",
        "price": 392.2,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 35,
        "name": "Electronics Product 35",
        "price": 402.57,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 36,
        "name": "Electronics Product 36",
        "price": 412.94,
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 37,
        "name": "Electronics Product 37",
        "price": 423.31,
        "image": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    },
    {
        "id": 38,
        "name": "Electronics Product 38",
        "price": 433.68,
        "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Smart Control",
            "Fast Charging"
        ]
    },
    {
        "id": 39,
        "name": "Electronics Product 39",
        "price": 444.05,
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "4K Display",
            "HDR"
        ]
    },
    {
        "id": 40,
        "name": "Electronics Product 40",
        "price": 454.42,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
        "category": "electronics",
        "description": "Premium electronics product offering style, performance, and reliability.",
        "features": [
            "Bluetooth",
            "Long Battery",
            "Noise Cancellation"
        ]
    }
   
    
];



// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const cartSummary = document.getElementById('cart-summary');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const searchInput = document.getElementById('search-input');
const clearSearch = document.getElementById('clear-search');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    if (cartToggle) cartToggle.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            clearSearch.classList.add('hidden');
            renderProducts();
        });
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartSidebar && cartToggle && 
            !cartSidebar.contains(e.target) && 
            e.target !== cartToggle && 
            !cartToggle.contains(e.target)) {
            closeCartSidebar();
        }
    });

    // Handle checkout
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
}

// Render products
function renderProducts(productsToRender = products) {
    if (!productGrid) return;
    
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="font-bold text-lg">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})" 
                            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length > 0) {
        clearSearch.classList.remove('hidden');
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    } else {
        clearSearch.classList.add('hidden');
        renderProducts(products);
    }
}

// Cart functions
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
    
    updateLocalStorage();
    updateCartUI();
    showNotification(`${product.name} added to cart`);
    openCartSidebar();
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        const productName = cart[productIndex].name;
        cart.splice(productIndex, 1);
        updateLocalStorage();
        updateCartUI();
        showNotification(`${productName} removed from cart`);
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateLocalStorage();
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    if (!cartItems) return;
    
    // Update cart count
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    }
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-shopping-cart text-4xl mb-2"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        if (cartSummary) cartSummary.classList.add('hidden');
        return;
    }
    
    if (cartSummary) cartSummary.classList.remove('hidden');
    
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-start space-x-4 py-4 border-b border-gray-200">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
            <div class="flex-1">
                <h4 class="font-medium">${item.name}</h4>
                <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
                <div class="flex items-center mt-2">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" 
                            class="text-gray-500 hover:text-primary w-8 h-8 flex items-center justify-center border rounded">
                        <i class="fas fa-minus text-xs"></i>
                    </button>
                    <span class="mx-2 w-8 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" 
                            class="text-gray-500 hover:text-primary w-8 h-8 flex items-center justify-center border rounded">
                        <i class="fas fa-plus text-xs"></i>
                    </button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" 
                    class="text-gray-400 hover:text-red-500 p-1">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
    
    // Update subtotal and total
    if (cartSubtotal && cartTotal) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`; // Add shipping if needed
    }
}

// Cart sidebar functions
function toggleCart() {
    if (!cartSidebar || !cartOverlay) return;
    
    cartSidebar.classList.toggle('translate-x-full');
    cartOverlay.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

function openCartSidebar() {
    if (!cartSidebar || !cartOverlay) return;
    
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeCartSidebar() {
    if (!cartSidebar || !cartOverlay) return;
    
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Handle checkout
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Here you would typically redirect to a checkout page or show a checkout form
    alert('Proceeding to checkout!');
    // cart = [];
    // updateLocalStorage();
    // updateCartUI();
    // closeCartSidebar();
}

// Local storage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform translate-y-2 opacity-0 transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Trigger reflow
    void notification.offsetWidth;
    
    notification.classList.remove('translate-y-2', 'opacity-0');
    notification.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        notification.classList.remove('translate-y-0', 'opacity-100');
        notification.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;