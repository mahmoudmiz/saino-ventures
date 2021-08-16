import * as React from "react";
import { isMobile } from "react-device-detect";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";
import { Trans, useI18next } from "gatsby-plugin-react-i18next";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import chevronDown from "../../images/chevron-down.svg";
import chevronDownBlack from "../../images/chevron-down-black.svg";

//styles
import * as styles from "./styles.module.scss";

const LanguageDropdown = ({ whiteBackground }) => {
  const { languages, changeLanguage } = useI18next();
  const [showOptions, setShowOptions] = React.useState(false);

  const matches = useMediaQuery("(min-width:768px)");

  return (
    <ClickAwayListener onClickAway={() => setShowOptions(false)}>
      <Collapse in={showOptions} collapsedSize={40}>
        <div
          className={`${styles.changeLanguage} ${
            showOptions ? styles.active : ""
          } ${whiteBackground ? styles.whiteBackground : ""}`}
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <button>
            {isMobile ? <Trans>language</Trans> : <Trans>languageMobile</Trans>}
          </button>
          <img
            src={
              whiteBackground
                ? chevronDownBlack
                : matches
                ? chevronDown
                : chevronDownBlack
            }
            alt="chevron down"
          />

          <Fade in={showOptions}>
            <div className={styles.languagesList}>
              {languages.map((lng) => (
                <span
                  key={lng}
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                >
                  {lng}
                </span>
              ))}
            </div>
          </Fade>
        </div>
      </Collapse>
    </ClickAwayListener>
  );
};

export default LanguageDropdown;
