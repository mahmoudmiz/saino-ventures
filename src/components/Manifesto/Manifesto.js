import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//styles
import * as styles from "./styles.module.scss";

// assets
import placeholder from "../../images/placeholder.png";

// markup
const Manifesto = () => {
  return (
    <section id="manifesto" className={styles.manifesto}>
      <div className={styles.manifestoBlock}>
        <h5>Manifesto</h5>
        <h3>Lorem ipsum dolor</h3>
        <p>
          A l’heure actuelle, nous en sommes encore au stade du développement
          des protocoles des futures DLT de demain qui devront potentiellement
          constituer des normes à l’échelles internationales. Nous investissons
          donc principalement sur des projets de type protocole. Nous estimons
          également que la DeFi (finance décentralisé) ainsi que les plateformes
          NFTs sont les premières applications des smart contract ayant un
          véritable impact et un pouvoir disruptif indéniable.
        </p>
        <span className={styles.textbg}>manifesto</span>
      </div>
      <img
        src={placeholder}
        className={styles.manifestoAsset}
        alt="manifestoAsset"
      />

      <div className={styles.manifestoBlock}>
        <h5>Manifesto</h5>
        <h3>Lorem ipsum dolor</h3>
        <p>
          A l’heure actuelle, nous en sommes encore au stade du développement
          des protocoles des futures DLT de demain qui devront potentiellement
          constituer des normes à l’échelles internationales. Nous investissons
          donc principalement sur des projets de type protocole. Nous estimons
          également que la DeFi (finance décentralisé) ainsi que les plateformes
          NFTs sont les premières applications des smart contract ayant un
          véritable impact et un pouvoir disruptif indéniable.
        </p>
      </div>

      <div className={styles.container}>
        <Carousel autoPlay>
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
    </section>
  );
};

export default Manifesto;
