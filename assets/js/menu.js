export function menuToggle() {
    let show = true;

    const brand = document.querySelector(".brand");
    const nav = document.querySelector("nav");
    const navList = document.querySelectorAll(".nav-list li a");
    const menuToggle = nav.querySelector(".menu-toggle");
    const body = document.querySelector("body");

    menuToggle.addEventListener("click", () => {

        body.style.overflow = show ? "hidden" : "initial"          // tira a barra de rolagem    
        nav.classList.toggle("on", show)

        nav.classList.contains("on") ? brand.style.display = "none" : brand.style.display = "block";

        show = !show;
    });

    // Voltar ao estado inicial ao clicar sobre um item do menu (recolhe o toggle)
    navList.forEach((item) => {
        item.addEventListener("click", () => {
            body.style.overflow = "initial";
            nav.classList.toggle("on", show);
            brand.style.display = "block";

            show = !show;
        })
    })

}