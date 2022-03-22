export function changeProjectSlide() {

    let slides = document.querySelectorAll("#project .slide-container .slide")
    let index = 0;
    const prevSlide = document.getElementById("prev-slide");
    const nextSlide = document.getElementById("next-slide");

    prevSlide.addEventListener("click", () => {
        slides[index].classList.remove("active")
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active")
    });

    nextSlide.addEventListener("click", () => {
        slides[index].classList.remove("active")
        index = (index + 1) % slides.length;
        slides[index].classList.add("active")
    });
}