export function changeSkillsCardDescription(cardName, text) {

    let skillsText = document.getElementById("skills-text");

    document.querySelector(cardName).addEventListener("mouseover", () => {
        skillsText.innerHTML = text;
    });

    document.querySelector(cardName).addEventListener("mouseout", () => {
        skillsText.innerHTML = "Passe o mouse sobre cada card para uma breve descrição";
    });
}
