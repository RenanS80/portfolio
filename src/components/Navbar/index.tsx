import Logo from 'assets/images/logo.png';

import './style.css';

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__lang-option">
          <p>Português</p>
          <p>Inglês</p>
        </div>

        <div className="header__brand">
          <img src={Logo} alt="Renan Logo" />
        </div>

        <a href="#contact" role="button" className="btn btn--large btn--contact">Contato</a>
      </div>
    </header>
  );
}

export default Navbar;


