import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Confirmation from "../../components/Confirmation/Confirmation";
import Footer from "../../components/Footer/Footer";
//styles
import "./index.scss";

// markup
const ConfirmationPage = () => {
  return (
    <main>
      <Nav whiteBackground />
      <Confirmation />
      <Footer />
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
