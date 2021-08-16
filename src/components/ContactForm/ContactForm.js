import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Select from "react-select";
import axios from "axios";
import { navigate } from "gatsby";

//styles
import * as styles from "./styles.module.scss";
import { MAIL_SERVER_ROUTE, RECEPTION_EMAIL } from "../../utils";

// markup
const Contactform = () => {
  const [name, setName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { t } = useTranslation();

  const sendForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = `
    from: /contact
    Name: ${name}
    Company: ${companyName ? companyName : "n.a."}
    E-mail: ${email}
    Phone: ${phone ? phone : "n.a."}
    
    
    ${message}        
    `;
    const data = {
      emailFrom: email,
      emailTo: RECEPTION_EMAIL,
      subject: `contact ${name}`,
      message: body,
    };
    axios
      .post(MAIL_SERVER_ROUTE, data)
      .then((res) => {
        console.log(res.data, "success");
        setIsLoading(false);
        navigate(`/confirmation`);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage(
          "Erreur lors de l'envoi du formulaire, réessayez plus tard."
        );
        if (err.response) {
          console.log(err.response.data, "error");
        } else console.log(err);
      });
  };

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
            <span>
              <Trans>Siège social</Trans>
            </span>
            <span>Creative Tower P.O.Box 4422 Fujairah, Dubai - UAE </span>
          </div>
        </section>

        {
          <div className={styles.formHeader}>
            <h3>
              <Trans>Entrez en contact</Trans>
            </h3>
            <h5>
              <Trans>Avec notre équipe</Trans>
              <br />
            </h5>
          </div>
        }
        <form onSubmit={(e) => sendForm(e)}>
          <label className={styles.odd}>
            <Trans>nom complet</Trans>*
            <input
              type="text"
              required
              placeholder={t("nom complet")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <Trans>Dénomination de l'entreprise</Trans>
            <input
              type="text"
              placeholder={t("Dénomination de l'entreprise")}
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
          </label>
          <label className={styles.odd}>
            <Trans>Adresse mail</Trans>*
            <input
              type="email"
              autoComplete={"on"}
              required
              placeholder={t("Adresse mail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <Trans>Numéro de Téléphone</Trans>
            <input
              type="tel"
              placeholder={t("Numéro de Téléphone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label className={styles.odd}>
            <Trans>Message</Trans>
            <textarea
              placeholder={t("Message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
          {errorMessage ? (
            <span className={styles.error}>
              <Trans>{errorMessage}</Trans>
            </span>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contactform;
