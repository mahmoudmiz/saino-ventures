import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//styles
import * as styles from "./styles.module.scss";

// markup
const Insight = () => {
  const matches = useMediaQuery("(max-width:500px)");

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
          <CarouselProvider
            naturalSlideWidth={250}
            naturalSlideHeight={matches ? 90 : 160}
            totalSlides={3}
            visibleSlides={matches ? 1 : 2}
          >
            <Slider className="sliderContainer">
              <Slide index={0} className="slide-1">
                <div className={styles.carouselItem}>
                  <h5>
                    <Trans>Insight 01</Trans>
                  </h5>
                  <h3>
                    <Trans>DLT</Trans>
                  </h3>
                  <p>
                    <Trans>Insight text 1</Trans>
                  </p>
                </div>
              </Slide>
              <Slide index={1} className="slide-2">
                <div className={styles.carouselItem}>
                  <h5>
                    <Trans>Insight 02</Trans>
                  </h5>
                  <h3>
                    <Trans>Incubateur</Trans>
                  </h3>
                  <p>
                    <Trans>Insight text 2</Trans>
                  </p>
                </div>
              </Slide>
              <Slide index={2} className="slide-3">
                <div className={styles.carouselItem}>
                  <h5>
                    <Trans>Croissance</Trans>
                  </h5>
                  <h3>
                    <Trans>Lorem ipsum dolor</Trans>
                  </h3>
                  <p>
                    <Trans>Insight text 3</Trans>
                  </p>
                </div>
              </Slide>
            </Slider>
            <DotGroup className="dots" />
          </CarouselProvider>
        </div>

        {/* desktop*/}
        <div className={styles.cardsList}>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 01</Trans>
            </h5>
            <h3>
              <Trans>DLT</Trans>
            </h3>
            <p>
              <Trans>Insight text 1</Trans>
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 02</Trans>
            </h5>
            <h3>
              <Trans>Incubateur</Trans>
            </h3>
            <p>
              <Trans>Insight text 2</Trans>
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>
              <Trans>Insight 03</Trans>
            </h5>
            <h3>
              <Trans>Croissance</Trans>
            </h3>
            <p>
              <Trans>Insight text 3</Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
