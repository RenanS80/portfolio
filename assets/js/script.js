// PORTFÓLIO SLIDE
let slides = document.querySelectorAll('.portfolio .slide-container .slide')
let radio = document.querySelectorAll('.portfolio .slide-container .radio-slide')
let index = 0;
var counter = 1;

function nextSlide() {
    slides[index].classList.remove('active')
    radio[index].removeAttribute('checked')
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
    radio[index].setAttribute('checked', 'checked')
}

function prevSlide() {
    slides[index].classList.remove('active')
    radio[index].removeAttribute('checked')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
    radio[index].setAttribute('checked', 'checked')
}

