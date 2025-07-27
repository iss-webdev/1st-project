const hamMenu = document.querySelector('.ham-menu');
const navMenu = document.querySelector('.nav-menu');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

console.log('hello')
