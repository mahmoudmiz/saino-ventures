import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { Link } from "react-scroll";
import { navigate } from "gatsby";
import { animateScroll } from "react-scroll";

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

        {/*<div className={styles.footerSocials}>
          <img src={facebookIcon} alt="facebook" />
          <img src={twitterIcon} alt="twitter" />
          <img src={instgramIcon} alt="instgram" />
          <img src={linkedIcon} alt="linkedin" />
        </div>*/}
        <div className={styles.footerList}>
          <div className={styles.footerBlock}>
            <h5><Trans>Company</Trans></h5>
            <div className={styles.footerTile}>

              <p><Trans>Manifesto</Trans></p>
              <p><Trans>Investissements</Trans></p>
              <p><Trans>rising fund</Trans></p>
              <p><Trans>team nav</Trans></p>
            </div>
          </div>
          {/* hidden on mobile */}
          <div className={`${styles.footerBlock} ${styles.mobileOnly}`}>
            <h5>Support</h5>
            <div className={styles.footerTile}>
              <p><Trans>Contact</Trans></p>
              <p><Trans>Je souhaite être early investor</Trans></p>
              <p><Trans>General terms and conditions of use</Trans></p>
              <p><Trans>Privacy declaration</Trans></p>
            </div>
          </div>
          {/* hidden on mobile */}
          <div className={`${styles.footerBlock} ${styles.mobileOnly}`}>
            <h5><Trans>Siège social</Trans></h5>
            <div className={styles.footerTile}>
              <p>Tortola VG 1110, British Virgin Islands</p>
              <p>Email: contact@sainoventures.com</p>
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
