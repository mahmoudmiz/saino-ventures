import * as React from "react";
import Slider from "@material-ui/core/Slider";
import { Trans } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
//styles
import * as styles from "./styles.module.scss";

// slider values
const currentValue = 200000; //change the current value here

const start = 0;
const end = 1000000;

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
            <Trans>Types d’investissements</Trans>
          </h5>
          <h3>
            <Trans>Lorem ipsum dolor</Trans>
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
              <h5>88K $</h5>
              <p>
                <Trans>montant investit actuel</Trans>
              </p>
            </div>
            <div>
              <h5>100K $</h5>
              <p>
                <Trans>Investissement min actuel</Trans>
              </p>
            </div>

            <div>
              <h5>90K $</h5>
              <p>
                <Trans>Investissement min actuel</Trans>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderRange}>
            <span>0</span>
            <span>{value === end ? "1M $" : `${value / 1000}k $`}</span>
            <span>1M $</span>
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
            <span className={styles.sliderText}>
              <Trans>objectif</Trans> <br />
              <Trans>phase</Trans> 1
            </span>
            <span className={styles.sliderText}>
              <Trans>objectif</Trans> <br />
              <Trans>phase</Trans> 1
            </span>
            <span className={styles.sliderText}>
              <Trans>objectif</Trans> <br />
              <Trans>phase</Trans> 1
            </span>
          </div>

          <Link to="/contact">
            <Trans>montant investit actuel</Trans>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Investment2;
