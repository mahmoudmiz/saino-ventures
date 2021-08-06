import * as React from "react";
import { Link } from "react-scroll";
import { navigate } from "gatsby";
import { animateScroll } from "react-scroll";
import { Trans } from "gatsby-plugin-react-i18next";

//components
import logo from "../../images/logo.svg";
import logoWhiteBg from "../../images/logo-white-bg.svg";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

//assets
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import instgramIcon from "../../images/instgramIcon.svg";
import linkedIcon from "../../images/linkedIn.svg";

//styles
import * as styles from "./styles.module.scss";

// markup
const Nav = ({ whiteBackground, isHomePage }) => {
  const inputRef = React.useRef(null);
  const handleNavigation = (route) => {
    if (inputRef.current.checked) {
      inputRef.current.checked = false;
    }

    if (!isHomePage) {
      navigate(`/#${route}`);
    }
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

  const handleLogoscrollUp = () => {
    if (!isHomePage) {
      navigate(`/`);
    }
    animateScroll.scrollToTop({ smooth: "easeInSine", duration: 3000 });
  };

  return (
    <div className={` ${whiteBackground ? styles.whiteBackground : ""}`}>
      <nav className={scrollNav ? styles.scrollActive : ""}>
        <div className={styles.mobileNavMenu}>
          <img
            onClick={handleLogoscrollUp}
            src={
              whiteBackground && (!scrollNav || inputRef.current.checked)
                ? logoWhiteBg
                : logo
            }
            alt="saino ventures logo"
            className={styles.logo}
          />
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
                onClick={() => handleNavigation("manifesto")}
                to="manifesto"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                Manifesto
              </Link>
              <Link
                onClick={() => handleNavigation("investment")}
                to="investment"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>Investissements</Trans>
              </Link>
              <Link
                onClick={() => handleNavigation("investment2")}
                to="investment2"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>rising fund</Trans>
              </Link>
              <Link
                onClick={() => handleNavigation("team")}
                to="team"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>team nav</Trans>
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
          <div className={styles.innerWrapperDesktopNav}>
            <img
              onClick={handleLogoscrollUp}
              src={whiteBackground && !scrollNav ? logoWhiteBg : logo}
              alt="saino ventures logo"
              className={styles.logo}
            />

            <div className={styles.navMenu}>
              <Link
                onClick={() => handleNavigation("manifesto")}
                to="manifesto"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                Manifesto
              </Link>
              <Link
                onClick={() => handleNavigation("investment")}
                to="investment"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>Investissements</Trans>
              </Link>
              <Link
                onClick={() => handleNavigation("investment2")}
                to="investment2"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>rising fund</Trans>
              </Link>
              <Link
                onClick={() => handleNavigation("team")}
                to="team"
                smooth="easeOutSine"
                duration={2500}
                offset={-140}
              >
                <Trans>team nav</Trans>
              </Link>
              <LanguageDropdown
                whiteBackground={whiteBackground && !scrollNav}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
