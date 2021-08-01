import * as React from "react";
import { Link } from "react-scroll";

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
          <h3>Founded in 2021</h3>
          <h5>
            Saino
            <span> Ventures</span>
          </h5>
          <p>
            Asset management firm in <br />
            <span> Distributed Ledger Technologies</span>
          </p>
        </div>

        <div className={styles.learnMore}>
          <Link
            to="investment"
            smooth="easeOutSine"
            duration={2500}
            offset={-140}
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
