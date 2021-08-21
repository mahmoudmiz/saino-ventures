import * as React from "react";
import { graphql } from "gatsby";
import { Preloader, Placeholder } from "react-preloading-screen";

//components
import Nav from "../../components/Nav/Nav";
import Contactform from "../../components/Contactform/Contactform";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

// markup
const ContactPage = () => {
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
          <title>{"Contact | Saino Ventures"}</title>
          <link rel="canonical" href="https://sainoventures.com" />
        </Helmet>

        <Nav whiteBackground />
        <Contactform />
        <Footer />
      </main>
    </Preloader>
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
