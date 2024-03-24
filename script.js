const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchItems.classList.remove('active');
    cartItem.classList.remove('active');
}

const cartItem = document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItems.classList.remove('active');
}

const searchItems = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchItems.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchItems.classList.remove('active');
    cartItem.classList.remove('active');
}
