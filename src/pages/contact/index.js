import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Contactform from "../../components/Contactform/Contactform";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import INTROVIDEO from "./../../images/LOADER.mp4";
import { useIsAllowed } from "../../utils";

// markup
const ContactPage = () => {
  const [showIntro, setShowIntro] = React.useState(true);
  const isAllowed = useIsAllowed();

  const handleIntro = () => {
    setShowIntro(false);
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Contact | Saino Ventures"}</title>
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
          <Contactform />
          <Footer />
        </>
      )}
    </main>
  );
};

export default ContactPage;

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
