import * as React from "react";

//components
import logo from "../../images/logo.svg";
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import instgramIcon from "../../images/instgramIcon.svg";
import linkedIcon from "../../images/linkedIn.svg";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

//styles
import * as styles from "./styles.module.scss";

// markup
const Footer = () => {
  return (
    <footer id="footer">
      <div className={styles.innerWrapper}>
        <img
          src={logo}
          alt="saino ventures logo"
          className={styles.footerLogo}
        />

        <div className={styles.footerSocials}>
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <img src={instgramIcon} alt="instgram" />
          <img src={linkedIcon} alt="linkedin" />
        </div>
        <div className={styles.footerList}>
          <div className={styles.footerBlock}>
            <h5>Lorem ipsum </h5>
            <div className={styles.footerTile}>
              <p>Lorem ipsum Copy</p>
              <p>LOREM IPSUM IPSUM </p>
              <p>DOLOR LOREM</p>
              <p>LOREM Copy</p>
              <p>DOLOR LOREM IPSUM</p>
            </div>
          </div>
          {/* hidden on mobile */}
          <div className={`${styles.footerBlock} ${styles.mobileOnly}`}>
            <h5>Lorem ipsum </h5>
            <div className={styles.footerTile}>
              <p>Lorem ipsum Copy</p>
              <p>LOREM IPSUM IPSUM </p>
              <p>DOLOR LOREM</p>
              <p>LOREM Copy</p>
              <p>DOLOR LOREM IPSUM</p>
            </div>
          </div>
          {/* hidden on mobile */}
          <div className={`${styles.footerBlock} ${styles.mobileOnly}`}>
            <h5>Lorem ipsum </h5>
            <div className={styles.footerTile}>
              <p>Lorem ipsum Copy</p>
              <p>LOREM IPSUM IPSUM </p>
              <p>DOLOR LOREM</p>
              <p>LOREM Copy</p>
              <p>DOLOR LOREM IPSUM</p>
            </div>
          </div>
        </div>
        <div className={styles.languageDropdown}>
          <LanguageDropdown />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
