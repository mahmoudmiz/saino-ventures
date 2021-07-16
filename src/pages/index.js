import * as React from "react";

//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Insight from "../components/Insight/Insight";
//styles
import "./index.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <Insight />
      <Footer />
    </main>
  );
};

export default IndexPage;
