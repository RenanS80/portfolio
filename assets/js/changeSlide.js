export function changeSlide() {

    let slides = document.querySelectorAll('.project .slide-container .slide')
    let radio = document.querySelectorAll('.project .slide-container .radio-slide')
    let index = 0;
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');

    prevSlide.addEventListener('click', () => {
        slides[index].classList.remove('active')
        radio[index].removeAttribute('checked')
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active')
        radio[index].setAttribute('checked', 'checked')
    });

    nextSlide.addEventListener('click', () => {
        slides[index].classList.remove('active')
        radio[index].removeAttribute('checked')
        index = (index + 1) % slides.length;
        slides[index].classList.add('active')
        radio[index].setAttribute('checked', 'checked')
    });
}