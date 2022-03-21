export function menuToggle() {
    let show = true;

    const brand = document.querySelector('.brand');
    const nav = document.querySelector("nav");
    const menuToggle = nav.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", () => {

        document.body.style.overflow = show ? "hidden" : "initial"          // tira a barra de rolagem    
        nav.classList.toggle("on", show)

        nav.classList.contains("on") ? brand.style.display = "none" : brand.style.display = "block";

        show = !show;
    })
}