// Navbar Toggle for Mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Thumbnail Image Switching
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        // Add active class to the clicked thumbnail
        thumbnail.classList.add('active');

        // Change the main image source
        mainImage.src = thumbnail.src;
    });
});

// Quantity Selector
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityDisplay = document.getElementById('quantity');
let quantity = 0;

decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

const cartItems = [
    { name: 'Hunza Tour', price: 23000 },
    { name: 'Skardu Adventure', price: 18000 }
];


// Add to Cart Functionality
const addToCartBtn = document.querySelector('.add-to-cart');

addToCartBtn.addEventListener('click', () => {
//const productName =Button.getElementById('data-name');
// const productprice =Button.getElementById('data-price');
    if (quantity > 0) {
        alert(`Successfully added ${quantity} person(s) to the cart!`);
    } else {
        alert('Please select at least one person to add to the cart.');
    }
});



function openlanpg() {
    window.location.href = 'lanpg.html'; 
}

function openGallery() {
     window.location.href = 'gallery.html';
}

function openDestination() {
    window.location.href = 'destinations.html';
}

function openBookings() {
    window.location.href = 'booking.html';
}

function openSignUp() {
    window.location.href = 'signupPage.html';
}

function openLogin() {
    window.location.href = 'loginPage.html'; 
  }

  function openContact_Us() {
    window.location.href = 'contactUs.html'; 
  }

  function openCartPage() {
    window.location.href = 'tourCart.html';
  }



