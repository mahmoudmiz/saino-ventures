import * as React from "react";
import Select from "react-select";

//styles
import * as styles from "./styles.module.scss";
import "./select.scss";
import {Trans} from "react-i18next";

// markup
const ContactForm = () => {
  const providenceOptions = [
    { value: "paris", label: "Paris" },
    { value: "lille", label: "Lille" },
    { value: "lyon", label: "Lyon" },
  ];

  const languagesOptions = [
    { value: "francais", label: "Français" },
    { value: "english", label: "English" },
  ];

  return (
    <section id="contact" className={styles.form}>
      <div className={styles.innerWrapper}>
        <div className={styles.formHeader}>
          <h3>Early investor</h3>
          <h5><Trans>Formulaire</Trans> </h5>
        </div>
        <form>
          <label className={styles.odd}>
            <Trans>Nom</Trans>*
            <input type="text" required placeholder="nom" />
          </label>
          <label>
            prénom*
            <input type="text" required placeholder="prénom" />
          </label>
          <label className={styles.odd}>
            adresse email*
            <input type="email" required placeholder="adresse email" />
          </label>
          <label>
            téléphone
            <input type="tel" placeholder="téléphone" />
          </label>
          <label className={`${styles.odd} ${styles.amountInput}`}>
            montant de l'investissement souhaité*
            <input type="text" required placeholder="0" />
            <span>Ne représente aucunement un engagement.</span>
          </label>

          <label>
            provenance
            <Select
              options={providenceOptions}
              placeholder="provenance"
              className="selectContainer"
              classNamePrefix="select"
            />
            <span>
              Des document attestant de la provenance des fonds vous seront
              demandés.
            </span>
          </label>
          <label className={styles.odd}>
            Message
            <textarea defaultValue="message" />
          </label>

          <label>
            Langue de communication souhaitée
            <Select
              options={languagesOptions}
              placeholder="Français"
              className="selectContainer"
              classNamePrefix="select"
            />
          </label>

          <div className={styles.formTextBottom}>(*) Champs obligatoires</div>
          <button>je valide mon inscription</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
