import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './style.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <p>@ 2022 - Renan Soares</p>

                <a href="mailto:renansoaresffc@gmail.com" className="footer__email">
                    <FontAwesomeIcon icon={faEnvelope} className="email-icon"></FontAwesomeIcon>
                    <p>renansoaresffc@gmail.com</p>
                </a>
            </div>
        </footer>
    );
}

export default Footer;


