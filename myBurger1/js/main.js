let burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burgerMenu');
burger.addEventListener('click', ()=>{
   burger.classList.toggle('burger-active');
   burgerMenu.classList.toggle('burgerMenuActive');
});