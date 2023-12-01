import { useState } from "react";
import { I18N_STORAGE_KEY } from "utils/lang";
import { i18n } from "translate/i18n";

import Logo from "assets/images/logo.png";
import "./style.css";

function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const handleSelectChange = (event: any) => {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location.reload();
  }

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
              <select onChange={handleSelectChange} value={language!}>
                <option value="pt-BR">Português</option>
                <option value="en-US">Inglês</option>
              </select>
            </div>

            <div>
              <ul>
                <li>
                  <a href="#contact" role="button" className="btn btn--large btn--contact">{i18n.t('navbar.contact')}</a>
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
