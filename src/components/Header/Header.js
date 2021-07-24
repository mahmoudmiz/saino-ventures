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

              <LanguageDropdown />
            </div>
          </div>
        </nav>
        {/* <div className={styles.headerText}>
        <span className={styles.headerText__1}>Fondé en 2020 Dubai - UAE</span>
        <div className={styles.headerText__2}>
          <span>Capital</span>
          <span>for</span>
          <div>
            Growth
            <span className={styles.headerText__3}>
              LOREM IPSUM <br />
              <strong>
                Distributed Ledger <br />
              </strong>
              Technologie
            </span>
          </div>
        </div>
      </div> */}
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
