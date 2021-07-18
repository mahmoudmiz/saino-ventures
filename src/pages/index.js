import * as React from "react";

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
  return (
    <main>
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
