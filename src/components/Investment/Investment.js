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
    details: `TGE definition`,
  },
  {
    title: "VESTING",
    details: `Vesting definition`,
  },
  {
    title: "DEX",
    details: `DEX definition`,
  },
  {
    title: "CEX",
    details: `CEX definition`,
  },
];

const ListItem = ({ children, title }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <Collapse in={showMore} collapsedSize={44}>
      <div>
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
            className={showMore ? styles.active : ""}
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
            <Trans>Investissement selon</Trans>
          </h5>
          <h3>
            <Trans>3 axes.</Trans>
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
                <Trans>Highest time perspective & risk highest potential reward</Trans> <br />
                <Trans>Highest reward</Trans>
              </h3>
              <p>
                <Trans>text seed</Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>Private Sales</Trans>
              </h5>
              <h3>
                <Trans>High time perspective & high risk</Trans> <br />
                <Trans>High potential reward</Trans>
              </h3>
              <p>
                <Trans>Private sale text</Trans>
              </p>
            </div>
            <div className={styles.carouselItem}>
              <h5>
                <Trans>DEX & CEX</Trans>
              </h5>
              <h3>
                <Trans>Medium time prespective & medium risk</Trans> <br />
                <Trans>Medium potential reward</Trans>
              </h3>
              <p>
                <Trans>DEXCEX text</Trans>
              </p>
            </div>
          </Carousel>
        </div>

        {/*   desktop */}
        <div className={styles.cardsContainerDesktop}>
          <Grow in={true}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>Seed</h5>
              <h3>
                <Trans>Highest time perspective & Highest risk</Trans> <br />
                <Trans>Highest potential reward</Trans>
              </h3>
              <p>
                <Trans>text seed</Trans>
              </p>
            </div>
          </Grow>
          <Grow in={true} timeout={1200}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>
                <Trans>Private Sale</Trans>
              </h5>
              <h3>
                <Trans>High time perspective & high risk</Trans> <br />
                <Trans>High potential reward</Trans>
              </h3>
              <p>
                <Trans>Private sale text</Trans>
              </p>
            </div>
          </Grow>
          <Grow in={true} timeout={1400}>
            <div className={`${styles.carouselItem} ${styles.card}`}>
              <h5>
                <Trans>DEX & CEX</Trans>
              </h5>
              <h3>
                <Trans>Medium time prespective & medium risk</Trans> <br />
                <Trans>Medium potential reward</Trans>
              </h3>
              <p>
                <Trans>DEXCEX text</Trans>
              </p>
            </div>
          </Grow>
        </div>

        <div className={styles.investmentBlocksWrapper}>
          <div>
            <div className={styles.investmentBlock}>
              <h5>
                <Trans>Combinaison des</Trans>
              </h5>
              <h3>
                <Trans>Investissements</Trans>
              </h3>
              <p>
                <Trans>text investment</Trans>
              </p>
            </div>

            <div className={styles.investmentBlock}>
              <h5>
                <Trans>Correlation entre</Trans>
              </h5>
              <h3>
                <Trans>Volatilité & risk reward</Trans>
              </h3>
              <p>
                <Trans>text investment 2</Trans>
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
