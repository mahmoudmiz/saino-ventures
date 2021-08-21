import * as React from "react";
import { graphql } from "gatsby";
import { Preloader, Placeholder } from "react-preloading-screen";

//components
import Nav from "../../components/Nav/Nav";
import Confirmation from "../../components/Confirmation/Confirmation";
import Footer from "../../components/Footer/Footer";

//styles
import "./index.scss";
import { Helmet } from "react-helmet";

// markup
const ConfirmationPage = () => {
  return (
    <Preloader fadeDuration={1000}>
      <Placeholder>
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </Placeholder>
      <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{"Confirmation | Saino Ventures"}</title>
          <link rel="canonical" href="https://sainoventures.com" />
        </Helmet>

        <Nav whiteBackground />
        <Confirmation />
        <div className="confirmationFooter">
          <Footer />
        </div>
      </main>
    </Preloader>
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
