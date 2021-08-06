import * as React from "react";
import { Link } from "gatsby";

//styles
import * as styles from "./styles.module.scss";
import {Trans} from "react-i18next";

// markup
const Confirmation = () => {
  return (
    <section className={styles.confirmation}>
      <div className={styles.innerWrapper}>
        <div className={styles.content}>
          <h3><Trans>message envoyé avec succès</Trans></h3>
          <h5><Trans>Un retour vous sera envoyé par mail dans les délais les plus brefs</Trans>.</h5>
          <Link to="/"><Trans>retour à l’accueil</Trans></Link>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
