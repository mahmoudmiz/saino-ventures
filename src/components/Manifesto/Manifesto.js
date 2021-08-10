import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Trans } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

// assets
//import Video_ILLUSTRATION from "../../images/video.mp4";
import Video_ILLUSTRATION from "../../images/SAINO_ILLUSTRATION_NEW.mp4";
// markup
const Manifesto = () => {
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
            playsinline
            src={Video_ILLUSTRATION}
            type="video/mp4"
          />

          <div className={styles.rightWrapper}>
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
          <Carousel selectedItem={0} showThumbs={false}>
            <div className={styles.carouselItem}>
              <h3 style={{ fontSize: "8px", marginBottom: "0" }}>
                <Trans>DLT</Trans>
              </h3>
              <p style={{ fontSize: "9px", lineHeight: "14px" }}>
                <Trans>def 1</Trans>
              </p>
            </div>
            {/*
            <div className={styles.carouselItem}>
              <h3>DLT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h3>DLT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
