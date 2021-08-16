import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { RECEPTION_EMAIL, MAIL_SERVER_ROUTE } from "../../utils";
import { navigate } from "gatsby";

//styles
import * as styles from "./styles.module.scss";
import "./select.scss";

// markup
const Investorform = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState(t("Salaires"));
  const [languageDesired, setLanguageDesired] = useState(t("Français"));
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const providenceOptions = [
    { value: t("Salaires"), label: t("Salaires") },
    { value: t("Trading"), label: t("Trading") },
    { value: t("Dividendes"), label: t("Dividendes") },
    { value: t("Rentes"), label: t("Rentes") },
    { value: t("Pensions"), label: t("Pensions") },
    { value: t("Héritage"), label: t("Héritage") },
    { value: t("Combinaison"), label: t("Combinaison") },
    { value: t("Autres"), label: t("Autres") },
  ];

  const languagesOptions = [
    { value: t("Français"), label: t("Français") },
    { value: t("Anglais"), label: t("Anglais") },
  ];

  const sendForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = `
    from: /investorform
    Name: ${name}
    Company: ${companyName ? companyName : "n.a."}
    E-mail: ${email}
    Amount: ${amount}
    Source: ${source}
    Language Desired: ${languageDesired}
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
    <section id="Investorform" className={styles.form}>
      <div className={styles.innerWrapper}>
        <div className={styles.formHeader}>
          <h3>Early investor</h3>
          <h5>
            <Trans>Formulaire</Trans>{" "}
          </h5>
        </div>
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
              required
              placeholder={t("Dénomination de l'entreprise")}
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
          </label>
          <label className={styles.odd}>
            <Trans>Adresse mail</Trans>*
            <input
              type="email"
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

          <label className={`${styles.odd} ${styles.amountInput}`}>
            <Trans>Montant de l'investissement souhaité</Trans>*
            <input
              type="text"
              required
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span>
              <Trans>Ne représente aucunement un engagement</Trans>.
            </span>
          </label>

          <label>
            <Trans>provenance</Trans>*
            <Select
              onChange={(e) => setSource(e.value)}
              options={providenceOptions}
              placeholder={t("Salaires")}
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
            <textarea
              placeholder={t("Commentaires et questions éventuels")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          <label>
            <Trans>Langue de communication souhaitée</Trans>
            <Select
              onChange={(e) => setLanguageDesired(e.value)}
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

export default Investorform;
