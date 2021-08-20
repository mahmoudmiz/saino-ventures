import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
//styles
import * as styles from "./styles.module.scss";

// assets
//import Video_ILLUSTRATION from "../../images/video.mp4";
import Video_ILLUSTRATION from "../../images/SAINO_ILLUSTRATION_04_mobile_02.mp4";

// markup
const Manifesto = () => {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <section id="manifesto" className={styles.manifesto}>
      <div className={styles.innerWrapper}>
        <div className={styles.manifestoBlock}>
          <h5>
            <Trans>Manifesto</Trans>
          </h5>
          <h3>
            <Trans>Architecture,DeFi et NFT's</Trans>
          </h3>
          <p>
            <Trans>Text manifesto 1</Trans>
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <video
            loop
            autoPlay
            muted
            playsInline
            src={Video_ILLUSTRATION}
            type="video/mp4"
          />

          <div /*className={styles.rightWrapper}*/>
            <div className={styles.manifestoBlock}>
              <h5>
                <Trans>Manifesto</Trans>
              </h5>
              <h3>
                <Trans>Intéropérabilité</Trans>
              </h3>
              <p>
                <Trans>Text manifesto 2</Trans>
              </p>
            </div>

            {/* only desktop*/}
            <div
              style={{ marginTop: "2rem" }}
              className={styles.desktopContainer}
            >
              <div className={styles.carouselItem}>
                <h3 style={{ fontSize: "8px", marginBottom: "0" }}>
                  <Trans>DLT</Trans>
                </h3>
                <p
                  style={{
                    fontSize: "9px",
                    lineHeight: "14px",
                    maxWidth: "440px",
                  }}
                >
                  <Trans>def 1</Trans>
                </p>
              </div>
              {/*
              <div className={styles.carouselItem}>
                <h3>DAG</h3>
                <p>
                  <Trans>def 2</Trans>
                </p>
              </div>
              */}
            </div>
          </div>
        </div>
        {/* only mobile*/}
        <div className={styles.mobileContainer}>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={70}
            totalSlides={1}
            visibleSlides={1}
          >
            <Slider className="sliderContainer">
              <Slide index={0} className="slide-1">
                <div className={styles.carouselItem}>
                  <h3 style={{ fontSize: "8px", marginBottom: "0" }}>
                    <Trans>DLT</Trans>
                  </h3>
                  <p style={{ fontSize: "9px", lineHeight: "14px" }}>
                    <Trans>def 1</Trans>
                  </p>
                </div>
              </Slide>
            </Slider>
            {/* <DotGroup className="dots" /> */}
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
