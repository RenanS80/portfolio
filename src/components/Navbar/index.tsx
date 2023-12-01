import { useState } from "react";
import Logo from "assets/images/logo.png";
import "./style.css";

function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="header__brand">
          <img src={Logo} alt="Renan Logo" />
        </div>

        <div className={mobileToggle ? "menu-section on" : "menu-section"} onClick={() => setMobileToggle(!mobileToggle)}>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <div>
              <ul>
                <li className="header__lang-option">
                  <a href="/">Português</a>
                </li>
                <li className="header__lang-option">
                  <a href="/">Inglês</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <a href="#contact" role="button" className="btn btn--large btn--contact">Contato</a>
                </li>
              </ul>
            </div>
            
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
