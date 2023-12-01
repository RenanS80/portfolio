import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { i18n } from './translate/i18n'; 

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

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__title">
            <h2>{i18n.t('hero.hello')}</h2>
            <h1>{i18n.t('hero.name')}</h1>
            <p>{i18n.t('hero.role')}</p>
          </div>

          <a href="#about" role="button" className="btn--about">
            {i18n.t('hero.aboutBtn')}
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
            <Title order="01" text={i18n.t('about.title')} />

            <div className="about__text">
              <p>{i18n.t('about.p1')}</p>
              <p>{i18n.t('about.p2')}</p>
              <p>{i18n.t('about.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skill">
        <div className="container">
          <Title order="02" text={i18n.t('about.title')} />
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
          <Title order="03" text={i18n.t('certifications.title')} />
          <Tab />
        </div>
      </section>

      <section className="project">
        <div className="container">
          <Title order="04" text={i18n.t('projects.title')} />
          <ProjectSlider slides={project} />
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <Title order="05" text={i18n.t('contact.title')} />
          <div className="contact__content">
            <div className="contact__info">
              <p>{i18n.t('contact.subtitle')} <a href="https://www.linkedin.com/in/renansoaresf/" target="_blank" rel="noreferrer"> LinkedIn</a>
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
