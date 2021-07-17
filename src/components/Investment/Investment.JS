import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//styles
import * as styles from "./styles.module.scss";

//assets
import chevronDown from "../../images/chevron-down-black.svg";

const ListItem = ({ children, title }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className={styles.listItem}>
      <div className={styles.listItemTile}>
        <h5>{title}</h5>
        <img
          src={chevronDown}
          alt="chevronDown"
          className={showMore ? styles.active : null}
          onClick={() => setShowMore((prev) => !prev)}
        />
      </div>

      {showMore && <div className={styles.listItemContent}>{children}</div>}
    </div>
  );
};

const listDetails = [
  {
    title: "TGE",
    details: `Investissement au plus tôt. Une seed permet potentiellement d’obtenir le token au meilleur prix.`,
  },
  {
    title: "VESTING",
    details: `Investissement au plus tôt. Une seed permet potentiellement d’obtenir le token au meilleur prix.`,
  },
  {
    title: "DEX",
    details: `Investissement au plus tôt. Une seed permet potentiellement d’obtenir le token au meilleur prix.`,
  },
  {
    title: "CEX",
    details: `Investissement au plus tôt. Une seed permet potentiellement d’obtenir le token au meilleur prix.`,
  },
  {
    title: "DEX",
    details: `Investissement au plus tôt. Une seed permet potentiellement d’obtenir le token au meilleur prix.`,
  },
];

// markup
const Investment = () => {
  return (
    <section id="investment" className={styles.investment}>
      <div className={styles.investmentBlock}>
        <h5>Types d’investissements</h5>
        <h3>Lorem ipsum dolor sit amet consectetur adipis elit.</h3>
        <span className={styles.textbg}>investisseme</span>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel autoPlay>
          <div className={styles.carouselItem}>
            <h5>Seed</h5>
            <h3>
              Ipsum dolor <br />
              LOREM IPSUM DOLOR
            </h3>
            <p>
              Investissement au plus tôt. Une seed permet potentiellement
              d’obtenir le token au meilleur prix. De plus, ce sont des sales
              fortement exclusives, elle ne sont souvent accessibles qu’à une
              très faible minorité de fonds d’investissement. Les retour sur
              investissement potentiels sont hors catégories. Le risque est par
              contre beaucoup plus important ainsi que le vesting.
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>Seed</h5>
            <h3>
              Ipsum dolor <br />
              LOREM IPSUM DOLOR
            </h3>
            <p>
              Investissement au plus tôt. Une seed permet potentiellement
              d’obtenir le token au meilleur prix. De plus, ce sont des sales
              fortement exclusives, elle ne sont souvent accessibles qu’à une
              très faible minorité de fonds d’investissement. Les retour sur
              investissement potentiels sont hors catégories. Le risque est par
              contre beaucoup plus important ainsi que le vesting.
            </p>
          </div>
          <div className={styles.carouselItem}>
            <h5>Seed</h5>
            <h3>
              Ipsum dolor <br />
              LOREM IPSUM DOLOR
            </h3>
            <p>
              Investissement au plus tôt. Une seed permet potentiellement
              d’obtenir le token au meilleur prix. De plus, ce sont des sales
              fortement exclusives, elle ne sont souvent accessibles qu’à une
              très faible minorité de fonds d’investissement. Les retour sur
              investissement potentiels sont hors catégories. Le risque est par
              contre beaucoup plus important ainsi que le vesting.
            </p>
          </div>
        </Carousel>
      </div>

      <div className={styles.investmentBlock}>
        <h5>Types d’investissements</h5>
        <h3>Lorem ipsum dolor</h3>
        <p>
          Une combinaison de ces 3 types d’investissement permet d’obtenir des
          retour sur investissement potentiels extrêmement importants pour un
          risque le plus faible possible dans le secteur des crypto-actifs.
        </p>
      </div>

      <div className={styles.investmentBlock}>
        <h5>Types d’investissements</h5>
        <h3>Lorem ipsum dolor</h3>
        <p>
          Nous estimons, qu’au jours d’aujourd’hui, les crypto-actifs
          constituent la classe d’actif ayant les retour sur investissement
          potentiels les plus important tout marchés confondu. Il est donc
          totalement pertinent d’investir une part relativement faible de son
          patrimoine dans ce type d’actif. Une faible part de son capital
          investit dans le secteur des crypto-actif permet une démultiplication
          net de la croissance de son patrimoine global dans le cas ou le
          secteur est haussier. Dans le cas ou le secteur est baissier, ce même
          portfolio ne diminuera que très peu. Risk reward
        </p>
      </div>

      <div className={styles.investmentList}>
        {listDetails.map((item, index) => {
          return (
            <ListItem key={index} title={item.title}>
              {item.details}
            </ListItem>
          );
        })}
      </div>
    </section>
  );
};

export default Investment;
