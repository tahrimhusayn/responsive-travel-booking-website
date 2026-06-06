// DOM Elements
const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const clearCartButton = document.getElementById("clear-cart");
const checkoutButton = document.getElementById("checkout");

// Load Cart from Local Storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render Cart Items
function renderCart() {
    cartItemsElement.innerHTML = ""; // Clear previous items
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.name}</strong><br>
            Price: $${item.price} × ${item.quantity}
        `;
        cartItemsElement.appendChild(li);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price

    // Save cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add Item to Cart
function addToCart(id, name, price) {
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        // Increase quantity if the item is already in the cart
        existingItem.quantity += 1;
    } else {
        // Add new item to the cart
        cart.push({ id, name, price, quantity: 1 });
    }

    // Update cart display
    renderCart();
}

// Clear Cart
clearCartButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is already empty!");
        return;
    }

    if (confirm("Are you sure you want to clear the cart?")) {
        cart = []; // Clear cart array
        renderCart();
    }
});

// Checkout Process
checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out!");
        return;
    }

    alert("Thank you for your purchase! 🎉 Your tours are booked.");
    cart = []; // Clear cart after checkout
    renderCart();
});

// Initialize Cart Rendering
renderCart();
