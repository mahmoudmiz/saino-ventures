import * as React from "react";
import { Link } from "react-scroll";

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

  const [scrollNav, setScrollNav] = React.useState(false);

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <header>
      <div className={styles.innerWrapper}>
        <nav className={scrollNav ? styles.scrollActive : ""}>
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
                <Link
                  activeClass="active"
                  onClick={handleCloseMenu}
                  to="manifesto"
                  smooth="easeOutSine"
                  duration={2500}
                  exact="true"
                  offset={-140}
                >
                  Manifesto
                </Link>
                <Link
                  activeClass="active"
                  onClick={handleCloseMenu}
                  to="investment"
                  smooth="easeOutSine"
                  duration={2500}
                  exact="true"
                  offset={-140}
                >
                  Investissements
                </Link>
                <Link
                  activeClass="active"
                  onClick={handleCloseMenu}
                  to="investment2"
                  smooth="easeOutSine"
                  duration={2500}
                  exact="true"
                  offset={-140}
                >
                  rising fund
                </Link>
                <Link
                  onClick={handleCloseMenu}
                  to="team"
                  smooth="easeOutSine"
                  duration={2500}
                  exact="true"
                  offset={-140}
                >
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
              <Link
                onClick={handleCloseMenu}
                to="manifesto"
                smooth="easeOutSine"
                duration={2500}
                exact="true"
              >
                Manifesto
              </Link>
              <Link
                onClick={handleCloseMenu}
                to="investment"
                smooth="easeOutSine"
                duration={2000}
                exact="true"
              >
                Investissements
              </Link>
              <Link
                onClick={handleCloseMenu}
                to="investment2"
                smooth="easeOutSine"
                duration={2500}
                exact="true"
              >
                rising fund
              </Link>
              <Link
                onClick={handleCloseMenu}
                to="team"
                smooth="easeOutSine"
                duration={3000}
                exact="true"
              >
                team
              </Link>
              <LanguageDropdown />
            </div>
          </div>
        </nav>

        <div className={styles.learnMore}>
          <Link
            to="investment"
            smooth="easeOutSine"
            duration={2500}
            exact="true"
          >
            <img src={chevronDown} alt="learn More" />
          </Link>
          <span>En savoir plus</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
