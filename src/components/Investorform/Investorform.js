import * as React from "react";
import Select from "react-select";

//styles
import * as styles from "./styles.module.scss";
import "./select.scss";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

// markup
const Investorform = () => {
  const { t } = useTranslation();

  const providenceOptions = [
    { value: t("Salaire"), label: t("Salaire") },
    { value: t("Salaire"), label: t("Salaire") },
    { value: t("Salaire"), label: t("Salaire") },
    { value: t("Salaire"), label: t("Salaire") },
    { value: t("Salaire"), label: t("Salaire") },
    { value: t("Salaire"), label: t("Salaire") },
  ];

  const languagesOptions = [
    { value: t("Français"), label: t("Français") },
    { value: t("Anglais"), label: t("Anglais") },
  ];

  return (
    <section id="Investorform" className={styles.form}>
      <div className={styles.innerWrapper}>
        <div className={styles.formHeader}>
          <h3>Early investor</h3>
          <h5>
            <Trans>Formulaire</Trans>{" "}
          </h5>
        </div>
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

          <label className={`${styles.odd} ${styles.amountInput}`}>
            <Trans>Montant de l'investissement souhaité</Trans>*
            <input type="text" required placeholder="0" />
            <span>
              <Trans>Ne représente aucunement un engagement</Trans>.
            </span>
          </label>

          <label>
            <Trans>provenance</Trans>
            <Select
              options={providenceOptions}
              placeholder={t("salary")}
              className="selectContainer"
              classNamePrefix="select"
            />
            <span>
              <Trans>
                Les document attestant la provenance des fonds seront demandés
              </Trans>
              .
            </span>
          </label>

          <label className={styles.odd}>
            <Trans>Message</Trans>
            <textarea placeholder={t("Commentaires et questions éventuels")} />
          </label>

          <label>
            <Trans>Langue de communication souhaitée</Trans>
            <Select
                options={languagesOptions}
                placeholder={t("Français")}
                className="selectContainer"
                classNamePrefix="select"
            />
          </label>


          <div className={styles.formTextBottom}>
            (*) <Trans>Champs obligatoires</Trans>
          </div>
          <button>
            <Trans>Envoyer la demande</Trans>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Investorform;
