import { changeProjectSlide } from "./changeProjectSlide.js";
import { scrollReveal } from "./scrollReveal.js";
import { menuToggle } from "./menu.js";
import { changeSkillsCardsDescription } from "./changeSkillsCardsDescription.js";

changeProjectSlide();
scrollReveal();
menuToggle();

// Change Skills Description
changeSkillsCardsDescription(
    ".card.html",
    "<strong>HTML</strong> é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web. Sua estrutura é baseada em tags"
);

changeSkillsCardsDescription(
    ".card.css",
    "<strong>CSS</strong> é uma linguagem de estilo usada para estilizar os documentos HTML. Sua estrutura é baseada em id, classe e tag"
);

changeSkillsCardsDescription(
    ".card.javascript",
    "<strong>JavaScript</strong> é uma linguagem de programação que permite a implementação de itens complexos e dinâmicos em páginas web"
);

changeSkillsCardsDescription(
    ".card.sass",
    "<strong>SASS</strong> é uma linguagem de extensão do CSS (pré-processador). Seu objetivo é tornar o processo de desenvolvimento mais simples e eficiente"
);

changeSkillsCardsDescription(
    ".card.bootstrap",
    "<strong>Bootstrap</strong> é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples"
);

changeSkillsCardsDescription(
    ".card.react",
    "<strong>React</strong> é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web"
);

changeSkillsCardsDescription(
    ".card.figma",
    "<strong>Figma</strong> é uma ferramenta colaborativa para design vetorial de interfaces e protótipos"
);

changeSkillsCardsDescription(
    ".card.java",
    "<strong>Java</strong> é uma linguagem de programação orientada a objetos e é bastante utilizada no mercado para o desenvolvimento de aplicações web e mobile"
);









