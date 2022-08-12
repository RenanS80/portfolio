import Navbar from 'components/Navbar';
import SocialMediaIcon from 'components/SocialMediaIcon';
import { social } from 'data/social';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
    </>
  );
}

export default App;
