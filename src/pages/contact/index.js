import * as React from "react";
import { graphql } from "gatsby";

//components
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";

//styles
import "./index.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <ContactForm />
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
