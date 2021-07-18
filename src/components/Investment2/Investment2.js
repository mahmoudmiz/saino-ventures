import * as React from "react";
import Slider from "@material-ui/core/Slider";

//styles
import * as styles from "./styles.module.scss";

// slider values
const currentValue = 200000;
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
      <div className={styles.investment2Block}>
        <h5>Types d’investissements</h5>
        <h3>Lorem ipsum dolor sit amet consectetur adipis elit.</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h5>20</h5>
          <p>place early investor restantes</p>
        </div>
        <div className={styles.innerWrapper}>
          <div>
            <h5>88K $</h5>
            <p>montant investit actuel</p>
          </div>
          <div>
            <h5>100K $</h5>
            <p>Investissement min actuel</p>
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
          min={start}
          max={end}
          value={value}
          onChange={handleChange}
          className={styles.slider}
        />
        <span className={styles.sliderText}>
          objectif <br />
          phase 1
        </span>
      </div>
    </section>
  );
};

export default Investment2;
