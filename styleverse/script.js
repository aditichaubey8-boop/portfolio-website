let cart = 0;
let total = 0;

const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");
const totalPrice = document.getElementById("total-price");
const cartItems = document.getElementById("cart-items");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cart++;
        total += 1000;

        cartCount.innerText = cart;
        cartItems.innerText = "Products in Cart: " + cart;
        totalPrice.innerText = total;

        button.innerText = "✔ Added";
        button.style.background = "#22c55e";

        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.background = "#8b5cf6";
        }, 1000);
    });
});

const cartIcon = document.querySelector(".cart");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");

cartIcon.addEventListener("click", () => {
    cartPopup.style.display = "block";
});

closeCart.addEventListener("click", () => {
    cartPopup.style.display = "none";
});

const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
    alert("Order placed successfully! 🎉");
    cart = 0;
    total = 0;

    cartCount.innerText = 0;
    cartItems.innerText = "Products in Cart: 0";
    totalPrice.innerText = 0;

    cartPopup.style.display = "none";
});