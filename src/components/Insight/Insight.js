import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//styles
import * as styles from "./styles.module.scss";

// markup
const Insight = () => {
  return (
    <section id="insight" className={styles.insight}>
      <div className={styles.insightHeader}>
        Explore
        <h1>our insight</h1>
      </div>

      <Carousel autoPlay>
        <div className={styles.carouselItem}>
          <h5>Insight 01</h5>
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={styles.carouselItem}>
          <h5>Insight 01</h5>
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={styles.carouselItem}>
          <h5>Insight 01</h5>
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default Insight;
