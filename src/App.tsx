import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { social } from 'data/social';
import { skill } from 'data/skill';
import { project } from 'data/project';

import Navbar from 'components/Navbar';
import Title from 'components/Title';
import SkillCard from 'components/SkillCard';
import Tab from 'components/Tab';
import SocialMediaIcon from 'components/SocialMediaIcon';
import ProjectSlider from 'components/ProjectSlider';
import Form from 'components/Form';
import Footer from 'components/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Profile from 'assets/images/profile.jpg';
import StrokeEffect from 'assets/images/stroke-effect.svg';
import DownloadIcon from 'assets/images/download.svg';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__title">
            <h2>Olá, mundo</h2>
            <h1>Sou Renan Soares</h1>
            <p>Analista de Sistemas Jr</p>
          </div>

          <a href="#about" role="button" className="btn--about">
            Sobre mim
            <FontAwesomeIcon icon={faChevronDown} className="arrow-down"></FontAwesomeIcon>
          </a>

          <div className="hero__social-media">

            {
              social.map(item => (
                <SocialMediaIcon
                  key={item.id}
                  social={item}
                />
              ))
            }

          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about__image">
            <img className="stroke-e" src={StrokeEffect} alt="Background" />
            <img className="renan" src={Profile} alt="Renan" />
          </div>

          <div className="about__info">
            <Title order="01" text="Sobre mim" />

            <div className="about__text">
              <p>Meu nome é Renan Soares, moro no Rio de Janeiro e sou graduando em Sistemas de Informação na Universidade Federal Fluminense (UFF).</p>
              <p>Sempre gostei da parte visual dos websites, o que me estimulou a dar uma atenção especial ao desenvolvimento front-end em meus estudos.
                Após concluir o meu primeiro curso online, tive a certeza que iria seguir na área.</p>
              <p>Acredito que uma interface bem construída - cuja experiência do usuário é o foco - é a chave para um produto/serviço de sucesso.
                Por conta disso, também tenho estudado técnicas de UX e UI para aplicar no âmbito profissional.</p>
            </div>
            <a href={require('assets/cv/curriculum.pdf')} className="btn btn--large btn--blue mt-40" role="button" download>
              Download CV
              <img src={DownloadIcon} alt="Download" />
            </a>
          </div>
        </div>
      </section>

      <section className="skill">
        <div className="container">
          <Title order="02" text="Conhecimentos" />
          <div className="skill__cards__container">

            {skill.map(card => (
              <div key={card.id}>
                <SkillCard skill={card} />
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="certification">
        <div className="container">
          <Title order="03" text="Certificações" />
          <Tab />
        </div>
      </section>

      <section className="project">
        <div className="container">
          <Title order="04" text="Projetos" />
          <ProjectSlider slides={project} />
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <Title order="05" text="Contato" />
          <div className="contact__content">
            <div className="contact__info">
              <p>Você pode me enviar uma mensagem ou me encontrar nas <a
                href="https://www.instagram.com/renan_soaresf/"
                target="_blank"
                rel="noreferrer">
                redes sociais
              </a> e <a
                href="https://www.linkedin.com/in/renansoaresf/"
                target="_blank"
                rel="noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="contact__form">
              <Form />
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
