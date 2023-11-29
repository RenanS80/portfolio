import { useState } from 'react';

import { project } from 'data/project';
import { Project } from 'types/Project';

import Github from 'assets/images/github.svg';
import Demo from 'assets/images/link.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './style.css';

type Props = {
    slides: Project[];
}

function ProjectSlider({ slides }: Props) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            {project.map((slide, index) => (
                <div className={index === current ? "project-slider slider--active" : "project-slider"} key={index}>
                    <a href={slide.demoUrl} target="_blank" rel="noreferrer" className={slide.demoUrl.length <= 0 ? "project-slider__image inactive" : "project-slider__image"}>
                        {slide.demoUrl.length <= 0 ? <span></span> : ''}
                        <img src={slide.image} alt={slide.name} />
                    </a>

                    <div className="project-slider__info">
                        <h4>{slide.name}</h4>
                        <div className="project-slider__description">
                            <p>{slide.description}</p>
                        </div>

                        <div className="project-slider__tech-external-links">
                            {slide.technologies.map((tech, index) => (
                                <div key={index} className="project-slider__tech">
                                    <p>{tech}</p>
                                </div>
                            ))}

                            <div className="project-slider__external-links">
                                <a href={slide.githubUrl} target="_blank" rel="noreferrer">
                                    <img src={Github} alt="Repositório" />
                                </a>

                                {slide.demoUrl.length <= 0 ? '' :
                                    <a href={slide.demoUrl} target="_blank" rel="noreferrer">
                                        <img src={Demo} alt="Demonstração" />
                                    </a>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="controls">
                <FontAwesomeIcon icon={faArrowLeft} className="controls__arrow-left" onClick={prevSlide}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faArrowRight} className="controls__arrow-right" onClick={nextSlide}></FontAwesomeIcon>
            </div>
        </>
    );
}

export default ProjectSlider;


