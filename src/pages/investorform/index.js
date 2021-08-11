import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Investorform from "../../components/Investorform/Investorform";
import Footer from "../../components/Footer/Footer";

//styles
import "./index.scss";

// markup
const InvestorformPage = () => {
  return (
    <main>
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
