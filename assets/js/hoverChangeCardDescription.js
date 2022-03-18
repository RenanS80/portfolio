export function hoverChangeCardDescription(nameCard, text) {
    let skillsText = document.getElementById('skills-text');

    document.querySelector(nameCard).addEventListener("mouseover", () => {
        skillsText.innerHTML = text;
    });

    document.querySelector(nameCard).addEventListener("mouseout", () => {
        skillsText.innerHTML = 'Passe o mouse sobre cada card para uma breve descrição';
    });
}
