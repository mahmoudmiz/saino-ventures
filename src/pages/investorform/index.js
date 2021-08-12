import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Investorform from "../../components/Investorform/Investorform";
import Footer from "../../components/Footer/Footer";

//styles
import "./index.scss";
import {Helmet} from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";

// markup
const InvestorformPage = () => {
    const { t } = useTranslation();
  return (
    <main>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{t("Investor form")+" | Saino Ventures"}</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <Nav whiteBackground />
      <Investorform />
      <Footer />
    </main>
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
