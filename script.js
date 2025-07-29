const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart`);
}
