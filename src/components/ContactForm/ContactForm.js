import * as React from "react";

//components

//styles
import * as styles from "./styles.module.scss";

// markup
const ContactForm = () => {
  return (
    <section id="contact" className={styles.form}>
      <div className={styles.innerWrapper}>
        <div className={styles.formHeader}>
          <h3>inscription</h3>
          <h5>Je souhaite être early investor</h5>
        </div>
        <form>
          <label className={styles.odd}>
            Nom*
            <input type="text" />
          </label>
          <label>
            prénom*
            <input type="text" />
          </label>
          <label className={styles.odd}>
            adresse email*
            <input type="email" />
          </label>
          <label>
            téléphone
            <input type="number" />
          </label>
          <label className={styles.odd}>
            montant de l'investissement souhaité*
            <input />
            <span>Ne représente aucunement un engagement.</span>
          </label>

          <label>
            provenance
            <input />
            <span>
              Des document attestant de la provenance des fonds vous seront
              demandés.
            </span>
          </label>
          <label className={styles.odd}>
            Message
            <textarea>message</textarea>
          </label>

          <label>
            Langue de communication souhaitée
            <input />
          </label>

          <div className={styles.formTextBottom}>(*) Champs obligatoires</div>
          <button>je valide mon inscription</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
