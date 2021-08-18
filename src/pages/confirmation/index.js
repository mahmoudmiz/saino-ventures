import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Confirmation from "../../components/Confirmation/Confirmation";
import Footer from "../../components/Footer/Footer";
import INTROVIDEO from "./../../images/LOADER.mp4";
import { useIsAllowed } from "../../utils";

//styles
import "./index.scss";
import { Helmet } from "react-helmet";

// markup
const ConfirmationPage = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const isAllowed = useIsAllowed();

  const handleIntro = () => {
    setShowIntro(false);
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Confirmation | Saino Ventures"}</title>
        <link rel="canonical" href="https://sainoventures.com" />
      </Helmet>

      {showIntro && isAllowed ? (
        <div className="intro">
          <video
            autoPlay
            muted
            onEnded={() => handleIntro()}
            src={INTROVIDEO}
            type="video/mp4"
          />
        </div>
      ) : (
        <>
          <Nav whiteBackground />
          <Confirmation />
          <div className="confirmationFooter">
            <Footer />
          </div>
        </>
      )}
    </main>
  );
};

export default ConfirmationPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
