import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Trans } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

// markup
const Insight = () => {
  return (
    <section id="insight" className={styles.insight}>
      <div className={styles.innerWrapper}>
        <div className={styles.insightHeader}>
          <Trans>Explore</Trans>

          <h1>
            <Trans>our insight</Trans>
          </h1>
        </div>

        {/* mobile*/}
        <div className={styles.carouselWrapper}>
          <Carousel selectedItem={0} showThumbs={false}>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Insight 01</Trans>
              </h5>
              <h3>
                <Trans>Lorem ipsum dolor</Trans>
              </h3>
              <p>
                <Trans>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Insight 01</Trans>
              </h5>
              <h3>
                {" "}
                <Trans>Lorem ipsum dolor</Trans>
              </h3>
              <p>
                <Trans>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Insight 01</Trans>
              </h5>
              <h3>
                <Trans>Lorem ipsum dolor</Trans>
              </h3>
              <p>
                <Trans>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Trans>
              </p>
            </div>
          </Carousel>
        </div>

        {/* desktop*/}
        <div className={styles.cardsList}>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 01</Trans>
            </h5>
            <h3>
              <Trans>Lorem ipsum dolor</Trans>
            </h3>
            <p>
              <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Trans>
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 01</Trans>
            </h5>
            <h3>
              <Trans>Lorem ipsum dolor</Trans>
            </h3>
            <p>
              <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Trans>
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 01</Trans>
            </h5>
            <h3>
              <Trans>Lorem ipsum dolor</Trans>
            </h3>
            <p>
              <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
