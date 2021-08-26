import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

// markup
const PrivatyPolityContain = () => {
    return (
        <section id="privatyPolicy" className={styles.privatyPolicy}>
            <div className={styles.innerWrapper}>
                <h2 className={"polity__title"}>
                    <Trans>Privacy declaration</Trans>
                </h2>
                <h3 className="heading-tertiary u-margin-bottom-tiny">----</h3>
                <p className="polity__paragraph"
                   style={{textDecoration: "underline"}}><Trans>SECTION 1 - PERSONAL INFORMATION COLLECTORS</Trans></p>
                <p className="polity__paragraph"><Trans>We collect the personal information you provide us, such as that your name, your address and your e-mail address.</Trans></p>
                <p className="polity__paragraph"><Trans>When you browse our shop, we also receive automatically the Internet Protocol address (IP address) of your computer, which allows us to automatically get more details about the browser and operating system you are using.</Trans></p>
                <p className="polity__paragraph"><Trans>E-mail marketing</Trans></p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}><Trans>ARTICLE 2 - CONSENT</Trans></p>
                <p className="polity__paragraph"><Trans>How do you obtain my consent?</Trans></p>
                <p className="polity__paragraph"><Trans>When you provide us with your personal information to enter into an transaction, we assume that you consent to the collection of your information.</Trans></p>
                <p className="polity__paragraph"><Trans>If we ask you to provide us with your personal information for a other reason, for marketing purposes for example, we will ask you directly for your express consent, or we will give you the opportunity to refuse.</Trans></p>
                <p className="polity__paragraph"><Trans>How do I withdraw my consent?</Trans></p>
                <p className="polity__paragraph"><Trans>If, after giving us your consent, you change your mind and do not want to continue to use our services, we will not consent to us contacting you, collecting your information or disclose, you may notify us by contacting us at info@sainoventures.com.</Trans></p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}><Trans>ARTICLE 3 - DISCLOSURE</Trans></p>
                <p className="polity__paragraph"><Trans>We may disclose your personal information if we are required by law to do so. do or if you violate our Terms and Conditions of Use.</Trans></p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}><Trans>ARTICLE 4 - SECURITY</Trans></p>
                <p className="polity__paragraph"><Trans>To protect your personal data, we take precautions to reasonable and follow industry best practices to ensure that they are not unreasonable. not inappropriately lost, misappropriated, accessed, disclosed, altered or destroyed.</Trans></p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}><Trans>ARTICLE 5 - AGE OF CONSENT</Trans></p>
                <p className="polity__paragraph"><Trans>By using this site, you declare that you are at least the age of majority. in your state or province of residence, and that you have given us your consent to allow any minor person in your care to use this website.</Trans></p>
                <p className="polity__paragraph" style={{textDecoration: "underline"}}><Trans>ARTICLE 6 - AMENDMENTS TO THE THIS PRIVACY POLICY</Trans></p>
                <p className="polity__paragraph"><Trans>We reserve the right to modify this policy at any time. confidentiality at all times, so please check back frequently. The changes and clarifications will take effect immediately after publication on the website. web. If we make changes to the content of this policy, we will notify you here updated, so that you know what information we collect, how we collect it, how we use it, and how we use it. we use them, and under what circumstances we disclose them, if any, to the do.</Trans></p>
                <p className="polity__paragraph"><Trans>If our business is acquired by or merged with a company that is other business, your information may be transferred to the new owners so that the information can be used to we can continue to sell you products.</Trans></p>
                <p className="polity__paragraph"><Trans>QUESTIONS AND CONTACT DETAILS</Trans></p>
                <p className="polity__paragraph"><Trans>If you wish</Trans></p>
            </div>
        </section>
    );
};

export default PrivatyPolityContain;
