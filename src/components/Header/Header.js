import * as React from "react";
import { Link } from "react-scroll";
import { Trans } from "gatsby-plugin-react-i18next";

//components
import chevronDown from "../../images/chevron-down.svg";
import Nav from "../Nav/Nav";

//styles
import * as styles from "./styles.module.scss";

// markup
const Header = () => {
  return (
    <header>
      <div className={styles.innerWrapper}>
        <Nav isHomePage />

        <div className={styles.headerText}>
          <h3>
            <Trans>Founded in 2021</Trans>
          </h3>
          <h5>
            Saino
            <span> Ventures</span>
          </h5>
          <p>
            <Trans>Asset management firm in</Trans>
            <br />
            <span>
              {" "}
              <Trans>Distributed Ledger Technologies</Trans>
            </span>
          </p>
        </div>

        <Link
          to="investment"
          smooth="easeOutSine"
          duration={2500}
          offset={-140}
        >
          <div className={styles.learnMore}>
            <span className={styles.learnMoreButton}>
              <img src={chevronDown} alt="learn More" />
            </span>
            <span>
              <Trans>En savoir plus</Trans>
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
