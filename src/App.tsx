import Profile from 'assets/images/profile.jpg';
import DownloadIcon from 'assets/images/download-icon.svg';

import Navbar from 'components/Navbar';
import SocialMediaIcon from 'components/SocialMediaIcon';
import { social } from 'data/social';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import SkillCard from 'components/SkillCard';
import { skill } from 'data/skill';
import Title from 'components/Title';
import Tab from 'components/Tab';

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__title">
            <h2>Olá, mundo</h2>
            <h1>Sou Renan Soares</h1>
            <p>Dev front-end Jr</p>
          </div>

          <a href="#about" role="button" className="btn-about">
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
            <img src={Profile} alt="Renan" />
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
            <a href={require('assets/cv/curriculum.pdf')} className="btn btn--download" role="button" download>
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

      <section className="course">
        <div className="container">
          <Title order="03" text="Cursos" />
          <Tab />
        </div>
      </section>
    </>
  );
}

export default App;
