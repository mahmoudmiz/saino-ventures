import * as React from "react";
import { graphql } from "gatsby";
import { Preloader, Placeholder } from "react-preloading-screen";

//components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import TermOfUseContain from "../../components/TermOfUsesContain/TermOfUseContain";

//styles
import "../index.scss";

// markup
const TermOfUse = () => {
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
                    <title>{"Terms of use | Saino Ventures"}</title>
                    <link rel="canonical" href="https://sainoventures.com" />
                </Helmet>

                <Nav whiteBackground />
                <TermOfUseContain/>
                <Footer />
            </main>
        </Preloader>
    );
};

export default TermOfUse;

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
