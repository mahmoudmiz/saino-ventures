import * as React from "react";
import { Link } from "gatsby";

//components
import logo from "../../images/logo.svg";
import chevronDown from "../../images/chevron-down.svg";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

//assets
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import instgramIcon from "../../images/instgramIcon.svg";
import linkedIcon from "../../images/linkedIn.svg";

//styles
import * as styles from "./styles.module.scss";

// markup
const Header = () => {
  const inputRef = React.useRef(null);
  const handleCloseMenu = () => {
    inputRef.current.checked = false;
  };

  return (
    <header>
      <div className={styles.innerWrapper}>
        <nav>
          <div className={styles.mobileNavMenu}>
            <img src={logo} alt="saino ventures logo" className={styles.logo} />
            <input
              type="checkbox"
              id="navToggle"
              className={styles.toggleInput}
              ref={inputRef}
            />
            <label htmlFor="navToggle" className={styles.navButton}>
              <span className={styles.navIcon} />
            </label>

            <div className={styles.navBg} />

            <div className={styles.navMenu}>
              <div className={styles.navList}>
                <Link onClick={handleCloseMenu} to="#manifesto">
                  Manifesto
                </Link>
                <Link onClick={handleCloseMenu} to="#investment">
                  Investissements
                </Link>
                <Link onClick={handleCloseMenu} to="#investment2">
                  rising fund
                </Link>
                <Link onClick={handleCloseMenu} to="#team">
                  team
                </Link>
                <div className={styles.footerSocials}>
                  <img src={facebookIcon} alt="facebook" />
                  <img src={twitterIcon} alt="twitter" />
                  <img src={instgramIcon} alt="instgram" />
                  <img src={linkedIcon} alt="linkedin" />
                </div>
                <div className={styles.changeLanguage}>
                  <LanguageDropdown />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.desktopNavMenu}>
            <img src={logo} alt="saino ventures logo" className={styles.logo} />

            <div className={styles.navMenu}>
              <Link onClick={handleCloseMenu} to="#manifesto">
                Manifesto
              </Link>
              <Link onClick={handleCloseMenu} to="#investment">
                Investissements
              </Link>
              <Link onClick={handleCloseMenu} to="#investment2">
                rising fund
              </Link>
              <Link onClick={handleCloseMenu} to="#team">
                team
              </Link>
              <LanguageDropdown />
            </div>
          </div>
        </nav>

        <div className={styles.learnMore}>
          <Link to="#investment">
            <img src={chevronDown} alt="learn More" />
          </Link>
          <span>En savoir plus</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
