import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fade from "@material-ui/core/Fade";
import Collapse from "@material-ui/core/Collapse";
import Grow from "@material-ui/core/Grow";
import { Trans } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

//assets
import chevronDown from "../../images/chevron-down-black.svg";

// edit the showMore list details from here
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

const ListItem = ({ children, title }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Collapse in={showMore} collapsedSize={44}>
      <div className={styles.listItem}>
        <div
          className={styles.listItemTile}
          onClick={() => setShowMore((prev) => !prev)}
        >
          <h5>
            <Trans>{title}</Trans>
          </h5>

          <img
            src={chevronDown}
            alt="chevronDown"
            className={showMore ? styles.active : null}
          />
        </div>

        <Fade in={showMore}>
          <div className={styles.listItemContent}>
            <Trans>{children}</Trans>
          </div>
        </Fade>
      </div>
    </Collapse>
  );
};

// markup
const Investment = () => {
  return (
    <section id="investment" className={styles.investment}>
      <div className={styles.mainInnerWrapper}>
        <div className={styles.investmentBlock}>
          <h5>
            <Trans>Types d’investissements</Trans>
          </h5>
          <h3>
            <Trans>Lorem ipsum dolor sit amet consectetur adipis elit.</Trans>
          </h3>
        </div>

        {/*   mobile */}
        <div className={styles.carouselContainer}>
          <Carousel selectedItem={0} showThumbs={false}>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Seed</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Seed</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Seed</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
          </Carousel>
        </div>

        {/*   desktop */}
        <div className={styles.cardsContainerDesktop}>
          <Grow in={true}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>
                <Trans>Seed</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
          </Grow>
          <Grow in={true} timeout={1200}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>
                <Trans>Private Sale</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
          </Grow>
          <Grow in={true} timeout={1400}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>
                <Trans>DEX & CEX</Trans>
              </h5>
              <h3>
                <Trans>Ipsum dolor</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
              <p>
                <Trans>
                  Investissement au plus tôt. Une seed permet potentiellement
                  d’obtenir le token au meilleur prix. De plus, ce sont des
                  sales fortement exclusives, elle ne sont souvent accessibles
                  qu’à une très faible minorité de fonds d’investissement. Les
                  retour sur investissement potentiels sont hors catégories. Le
                  risque est par contre beaucoup plus important ainsi que le
                  vesting.
                </Trans>
              </p>
            </div>
          </Grow>
        </div>

        <div className={styles.investmentBlocksWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.investmentBlock}>
              <h5>
                <Trans>Types d’investissements</Trans>
              </h5>
              <h3>
                <Trans>Lorem ipsum dolor</Trans>
              </h3>
              <p>
                <Trans>
                  Une combinaison de ces 3 types d’investissement permet
                  d’obtenir des retour sur investissement potentiels extrêmement
                  importants pour un risque le plus faible possible dans le
                  secteur des crypto-actifs.
                </Trans>
              </p>
            </div>

            <div className={styles.investmentBlock}>
              <h5>
                <Trans>Types d’investissements</Trans>
              </h5>
              <h3>
                <Trans>Lorem ipsum dolor</Trans>
              </h3>
              <p>
                <Trans>
                  Nous estimons, qu’au jours d’aujourd’hui, les crypto-actifs
                  constituent la classe d’actif ayant les retour sur
                  investissement potentiels les plus important tout marchés
                  confondu. Il est donc totalement pertinent d’investir une part
                  relativement faible de son patrimoine dans ce type d’actif.
                  Une faible part de son capital investit dans le secteur des
                  crypto-actif permet une démultiplication net de la croissance
                  de son patrimoine global dans le cas ou le secteur est
                  haussier. Dans le cas ou le secteur est baissier, ce même
                  portfolio ne diminuera que très peu. Risk reward
                </Trans>
              </p>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default Investment;
