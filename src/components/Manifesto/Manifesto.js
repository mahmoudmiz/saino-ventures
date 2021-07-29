import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//styles
import * as styles from "./styles.module.scss";

// assets
import SAINO_ILLUSTRATION from "../../images/SAINO_ILLUSTRATION.svg";

// markup
const Manifesto = () => {
  return (
    <section id="manifesto" className={styles.manifesto}>
      <div className={styles.innerWrapper}>
        <div className={styles.manifestoBlock}>
          <h5>Manifesto</h5>
          <h3>Lorem ipsum dolor</h3>
          <p>
            A l’heure actuelle, nous en sommes encore au stade du développement
            des protocoles des futures DLT de demain qui devront potentiellement
            constituer des normes à l’échelles internationales. Nous
            investissons donc principalement sur des projets de type protocole.
            Nous estimons également que la DeFi (finance décentralisé) ainsi que
            les plateformes NFTs sont les premières applications des smart
            contract ayant un véritable impact et un pouvoir disruptif
            indéniable.
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <img
            src={SAINO_ILLUSTRATION}
            className={styles.manifestoAsset}
            alt="manifestoAsset"
          />
          <div className={styles.rightWrapper}>
            <div className={styles.manifestoBlock}>
              <h5>Manifesto</h5>
              <h3>Lorem ipsum dolor</h3>
              <p>
                A l’heure actuelle, nous en sommes encore au stade du
                développement des protocoles des futures DLT de demain qui
                devront potentiellement constituer des normes à l’échelles
                internationales. Nous investissons donc principalement sur des
                projets de type protocole. Nous estimons également que la DeFi
                (finance décentralisé) ainsi que les plateformes NFTs sont les
                premières applications des smart contract ayant un véritable
                impact et un pouvoir disruptif indéniable.
              </p>
            </div>

            {/* only desktop*/}
            <div className={styles.desktopContainer}>
              <div className={styles.carouselItem}>
                <h3>DLT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className={styles.carouselItem}>
                <h3>DLT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* only mobile*/}
        <div className={styles.mobileContainer}>
          <Carousel selectedItem={0} showThumbs={false}>
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
            <div className={styles.carouselItem}>
              <h3>DLT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
