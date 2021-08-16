import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useTranslation } from "gatsby-plugin-react-i18next";

//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Insight from "../components/Insight/Insight";
import Manifesto from "../components/Manifesto/Manifesto";
import Investment from "../components/Investment/Investment";
import Investment2 from "../components/Investment2/Investment2";
import Team from "../components/Team/Team";

//styles
import "./index.scss";

// markup
const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Saino Ventures | " + t("Blockchain Investment Fund")}</title>
        <link rel="canonical" href="https://sainoventures.com" />
      </Helmet>
      <Header />
      <Insight />
      <Manifesto />
      <Investment />
      <Investment2 />
      <Team />
      <Footer />
    </main>
  );
};

export default IndexPage;

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
