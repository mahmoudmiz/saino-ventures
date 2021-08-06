import * as React from "react";
import { graphql } from "gatsby";

//components
import Nav from "../../components/Nav/Nav";
import ContactForm from "../../components/ContactForm/ContactForm";

//styles
import "./index.scss";

// markup
const ContactPage = () => {
  return (
    <main>
      <Nav whiteBackground />
      <ContactForm />
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