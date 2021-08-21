import * as React from "react";
import { graphql } from "gatsby";
import { Preloader, Placeholder } from "react-preloading-screen";

//components
import Nav from "../../components/Nav/Nav";
import Investorform from "../../components/Investorform/Investorform";
import Footer from "../../components/Footer/Footer";

//styles
import "./index.scss";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";

// markup
const InvestorformPage = () => {
  const { t } = useTranslation();

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
          <title>{t("Investor form") + " | Saino Ventures"}</title>
          <link rel="canonical" href="https://sainoventures.com" />
        </Helmet>

        <Nav whiteBackground />
        <Investorform />
        <Footer />
      </main>
    </Preloader>
  );
};

export default InvestorformPage;

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
