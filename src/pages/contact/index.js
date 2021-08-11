import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import Contactform from "../../components/Contactform/Contactform";
import Footer from "../../components/Footer/Footer";

// markup
const ContactPage = () => {
  return (
    <main>
      <Nav whiteBackground />
      <Contactform />
      <Footer />
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
