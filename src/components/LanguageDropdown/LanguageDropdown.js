import * as React from "react";
import { isMobile } from "react-device-detect";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";
import { Trans, useI18next, link } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

const LanguageDropdown = () => {
  const { languages, changeLanguage } = useI18next();
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <div className={styles.changeLanguage}>
      <button onClick={() => setShowOptions((prev) => !prev)}>
        {isMobile ? <Trans>language</Trans> : <Trans>languageMobile</Trans>}
      </button>
      <Collapse in={showOptions} collapsedSize={44}>
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
      </Collapse>
    </div>
  );
};

export default LanguageDropdown;
