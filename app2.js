const carouselSlide = document.querySelector('.caruosel-slide');
const caruoselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = caruoselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
});