import { useState } from 'react';
import './style.css';

function Tab() {

    const [toggleCourse, setToggleCourse] = useState(1);

    const toggleTab = (index: number) => {
        setToggleCourse(index);
    }

    return (

        <div className="tab">
            <div className="tab__item">
                <h3
                    className={toggleCourse === 1 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(1)}
                >
                    Udemy
                </h3>
                <div className={toggleCourse === 1 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Desenvolvimento Web</h4>
                            <span>34h</span>
                        </div>
                        <span className="platform">Full Stack</span>
                        <p className="tab__item--description">
                            Desenvolvimento de sites e sistemas web utilizando HTML, CSS, Bootstrap 3, JavaScript, JQuery, PHP, POO e MySQL.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3
                    className={toggleCourse === 2 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(2)}
                >
                    Fundação Bradesco
                </h3>
                <div className={toggleCourse === 2 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Implementação de Banco de Dados</h4>
                            <span>15h</span>
                        </div>
                        <span className="platform">Banco de Dados</span>
                        <p className="tab__item--description">
                            Criação do banco de dados, relacionamento entre tabelas, funções e procedimentos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3
                    className={toggleCourse === 3 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(3)}
                >
                    DevSuperior
                </h3>
                <div className={toggleCourse === 3 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Bootcamp Spring-React <span>(cursando)</span></h4>
                            <span>240h</span>
                        </div>
                        <span className="platform">Full Stack</span>
                        <p className="tab__item--description">
                            Desenvolvimento de aplicações Full stack utilizando Spring Framework, React e ferramentas como Postman, JUnit,
                            Docker, CI/CD, Axios, Typescript, Apex Charts, entre outros.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3
                    className={toggleCourse === 4 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(4)}
                >
                    Coursera
                </h3>
                <div className={toggleCourse === 4 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Google UX Design <span>(cursando)</span></h4>
                            <span>100h</span>
                        </div>
                        <span className="platform">UX Design</span>
                        <p className="tab__item--description">
                            Fundamentos de user experience, design entre plataformas, acessibilidade, design sprints, Figma, wireframes, protótipos de alta fidelidade, entre outros.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3
                    className={toggleCourse === 5 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(5)}
                >
                    Udemy
                </h3>
                <div className={toggleCourse === 5 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Bootstrap 5</h4>
                            <span>17h</span>
                        </div>
                        <span className="platform">Front-end</span>
                        <p className="tab__item--description">
                            Criação de projetos responsivos (mobile first) utilizando todos os componentes do Bootstrap, integrar outras
                            bibliotecas e recursos do framework, customização de componentes.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab__item">
                <h3
                    className={toggleCourse === 6 ? "tab__item--category active" : "tab__item--category"}
                    onClick={() => toggleTab(6)}
                >
                    Cubos Academy
                </h3>
                <div className={toggleCourse === 6 ? "tab__item--panel active" : "tab__item--panel"}>
                    <div className="tab__item--info">
                        <div className="tab__item--title">
                            <h4>Minicurso UX/UI Design</h4>
                            <span>6h</span>
                        </div>
                        <span className="platform">UX Design</span>
                        <p className="tab__item--description">
                            Métodos de pesquisa quantitativos e qualitativos, Card Sorting, Teste de Usabilidade e Teste A/B.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Tab;


