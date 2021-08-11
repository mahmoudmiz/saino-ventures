import * as React from "react";
import Slider from "@material-ui/core/Slider";
import { Trans } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";

//styles
import * as styles from "./styles.module.scss";

// slider values
const currentValue = 50000; //change the current value here
const step1 = 200000;
const start = 0;
const end = 1000000;

const normalizeNumber = (number) => {
  if (number >= 1000000) {
    return `${number / 1000000}M`;
  } else {
    return `${number / 1000}K`;
  }
};
// markup
const Investment2 = () => {
  const [value, setValue] = React.useState(currentValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="investment2" className={styles.investment2}>
      <div className={styles.mainInnerWrapper}>
        <div className={styles.investment2Block}>
          <h5>
            <Trans>Key figures for</Trans>
          </h5>
          <h3>
            <Trans>Rising fund</Trans>
          </h3>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <h5>20</h5>
            <p>
              <Trans>place early investor restantes</Trans>
            </p>
          </div>
          <div className={styles.innerWrapper}>
            <div>
              <h5>{normalizeNumber(value)} $</h5>
              <p>
                <Trans>montant investit actuel</Trans>
              </p>
            </div>
            <div>
              <h5>{normalizeNumber(100000)} $</h5>
              <p>
                <Trans>Investissement min actuel</Trans>
              </p>
            </div>

            <div>
              <h5>{normalizeNumber(90000)} $</h5>
              <p>
                <Trans>Investissement min suivant</Trans>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderRange}>
            <span>0</span>
            <span
              className={styles.sliderRangeFloating}
              style={{
                left: `${(step1 / end) * 100}%`,
                transform: `translate(-${(step1 / end) * 100}%)`,
              }}
            >
              {normalizeNumber(200000)} $
            </span>
            <span>{normalizeNumber(1000000)} $</span>
          </div>

          <Slider
            disabled
            min={start}
            max={end}
            value={value}
            onChange={handleChange}
            className={styles.slider}
          />
          <div className={styles.underSliderWrapper}>
            <span
              style={{ textAlign: "left", marginTop: "1rem" }}
              className={styles.sliderText}
            >
              <Trans>lancement</Trans> <br />
              <Trans>phase</Trans> 0
            </span>
            <span
              style={{
                marginTop: "1rem",
                position: "absolute",
                left: `${(step1 / end) * 100}%`,
                transform: `translate(-${(step1 / end) * 100}%)`,
              }}
              className={styles.sliderText}
            >
              <Trans>objectif</Trans> <br />
              <Trans>phase</Trans> 1
            </span>
            <span
              style={{ textAlign: "right", marginTop: "1rem" }}
              className={styles.sliderText}
            >
              <Trans>objectif</Trans> <br />
              <Trans>phase</Trans> 2
            </span>
          </div>

          <Link to="/investorform">
            <Trans>Je souhaite être early investor</Trans>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Investment2;
