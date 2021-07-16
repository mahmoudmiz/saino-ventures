import * as React from "react";
import { Link } from "gatsby";

//components
import logo from "../../images/logo.svg";
import chevronDown from "../../images/chevron-down.svg";

//styles
import * as styles from "./styles.module.scss";

// markup
const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="saino ventures logo" />
        {/* <div>
          <Link to="#Manifesto">Manifesto</Link>
          <Link to="#Investissements">Investissements</Link>
          <Link to="#risingFund">rising fund</Link>
          <Link to="#team">team</Link>

          <div className="changeLanguage">FR</div>
        </div> */}
      </nav>
      <div className={styles.headerText}>
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
      </div>
      <div className={styles.learnMore}>
        <img src={chevronDown} alt="learn More" />
      </div>
    </header>
  );
};

export default Header;
