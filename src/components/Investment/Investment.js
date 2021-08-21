import * as React from "react";
import Fade from "@material-ui/core/Fade";
import Collapse from "@material-ui/core/Collapse";
import Grow from "@material-ui/core/Grow";
import { Trans } from "gatsby-plugin-react-i18next";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
  const matches = useMediaQuery("(max-width:540px)");
  const matchesSmall = useMediaQuery("(max-width:630px)");
  const matchesVeySmall = useMediaQuery("(max-width:360px)");

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
          <CarouselProvider
            naturalSlideWidth={matches ? (matchesVeySmall ? 300 : 380) : 230}
            naturalSlideHeight={
              matchesSmall ? (matchesVeySmall ? 600 : 500) : 350
            }
            totalSlides={3}
            visibleSlides={matches ? 1 : 2}
          >
            <Slider className="sliderContainer">
              <Slide index={0} className="slide-1">
                <div className={styles.carouselItem}>
                  <h5>
                    <Trans>Seed</Trans>
                  </h5>
                  <h3>
                    <Trans>
                      Highest time perspective & risk highest potential reward
                    </Trans>{" "}
                    <br />
                    <Trans>Highest reward</Trans>
                  </h3>
                  <p>
                    <Trans>text seed</Trans>
                  </p>
                </div>
              </Slide>
              <Slide index={1} className="slide-2">
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
              </Slide>
              <Slide index={2} className="slide-3">
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
              </Slide>
            </Slider>
            <DotGroup className="dots" />
          </CarouselProvider>
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
