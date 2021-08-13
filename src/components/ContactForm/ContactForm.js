import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Select from "react-select";

//styles
import * as styles from "./styles.module.scss";

// markup
const Contactform = () => {
  const { t } = useTranslation();

  const languagesOptions = [
    { value: t("Français"), label: t("Français") },
    { value: t("Anglais"), label: t("Anglais") },
  ];

  return (
    <section id="Contactform" className={styles.contactform}>
      <div className={styles.innerWrapper}>
        {/*<div className={styles.formHeader}>
          <h3><Trans>Entrez en contact</Trans></h3>
          <h5>
            <Trans>Avec notre équipe</Trans><br />
          </h5>
        </div>*/}

        <section className={styles.contactCards}>
          <div className={styles.contactCard}>
            <span>Email</span>
            <span>contact@sainoventures.com</span>
          </div>

          <div className={styles.contactCard}>
            <span><Trans>Siège social</Trans></span>
            <span>Creative Tower P.O.Box 4422 Fujairah, Dubai - UAE </span>
          </div>
        </section>

        {<div className={styles.formHeader}>
          <h3><Trans>Entrez en contact</Trans></h3>
          <h5>
            <Trans>Avec notre équipe</Trans><br />
          </h5>
        </div>}
        <form>
          <label className={styles.odd}>
            <Trans>nom complet</Trans>*
            <input type="text" required placeholder={t("nom complet")} />
          </label>
          <label>
            <Trans>Dénomination de l'entreprise</Trans>
            <input type="text" required placeholder={t("Dénomination de l'entreprise")} />
          </label>
          <label className={styles.odd}>
            <Trans>Adresse mail</Trans>*
            <input type="email" required placeholder={t("Adresse mail")} />
          </label>
          <label>
            <Trans>Numéro de Téléphone</Trans>
            <input type="tel" placeholder={t("Numéro de Téléphone")} />
          </label>


          <label className={styles.odd}>
            <Trans>Message</Trans>
            <textarea placeholder={t("Message")} />
          </label>

          {/*<label>
            <Trans>Langue de communication souhaitée</Trans>
            <Select
              options={languagesOptions}
              placeholder={t("Français")}
              className="selectContainer"
              classNamePrefix="select"
            />
          </label>*/}

          <div className={styles.formTextBottom}>
            (*) <Trans>Champs obligatoires</Trans>
          </div>
          <button>
            <Trans>Envoyer</Trans>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactform;
