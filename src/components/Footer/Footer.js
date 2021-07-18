import * as React from "react";
import { isMobile } from "react-device-detect";

//components
import logo from "../../images/logo.svg";
import facebookIcon from "../../images/facebookIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";
import instgramIcon from "../../images/instgramIcon.svg";
import linkedIcon from "../../images/linkedIn.svg";
import chevronIcon from "../../images/chevron-down-black.svg";

//styles
import * as styles from "./styles.module.scss";

// markup
const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <img src={logo} alt="saino ventures logo" className={styles.footerLogo} />

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
      </div>

      <button className={styles.changeLanguage}>
        <span>{isMobile ? "FR" : "LANGUE : FRANCAIS"}</span>
        <img src={chevronIcon} alt="chevronIcon" />
      </button>
    </footer>
  );
};

export default Footer;
