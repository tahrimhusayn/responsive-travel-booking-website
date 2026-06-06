
// Password Eye

document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.querySelector(".pswrd-group input");
    const showIcon = document.querySelector(".fa-eye");
    const hideIcon = document.querySelector(".fa-eye-slash");
  
    // Show password when clicking the show icon
    showIcon.addEventListener("click", () => {
      passwordInput.type = "text"; // Change input type to text
      showIcon.classList.add("hide"); // Hide the show icon
      hideIcon.classList.remove("hide"); // Show the hide icon
    });
  
    // Hide password when clicking the hide icon
    hideIcon.addEventListener("click", () => {
      passwordInput.type = "password"; 
      hideIcon.classList.add("hide"); 
      showIcon.classList.remove("hide"); 
    });
  });

//Submit FORM

document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get user input
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementsById('signupPassword').value;

      // Simple validation check
      if (firstName && lastName && email && password) {
          // Store user data in localStorage
          localStorage.setItem('userFirstName', firstName);
          localStorage.setItem('userLastName', lastName);
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userPassword', password);

          // Redirect to login page

          window.location.href = 'lanpg.html';
      } else {
          alert('Please fill out all fields.');
      }
  });
});


  // header section js

  const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

$(document).ready(function() {

  $(`[unique-script-id="w-w-dm-id"] .btn-box`).click(function() {
    $(this).parent().children(".overlay").show();

  });


  $(`[unique-script-id="w-w-dm-id"] .close`).click(function() {
    $(`[unique-script-id="w-w-dm-id"] .overlay`).hide();
  });
});

function openSignUp() {
  window.location.href = 'signupPage.html'; 
}

function openLogin() {
  window.location.href = 'loginPage.html'; 
}

function openGallery() {
  window.location.href = 'gallery.html'; 
}

function openDestination() {
  window.location.href = 'destinations.html'; 
}

function openContact_Us() {
  window.location.href = 'contactUs.html'; 
}

function openBookings() {
  window.location.href = 'booking.html'; 
}

function openlanpg(){
  window.location.href = 'lanpg.html'; 
}

function openProductPage(){
  window.location.href = 'tourProductPage.html';
}

function openCartPage() {
  window.location.href = 'tourCart.html';
}

