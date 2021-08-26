import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

//styles
import * as styles from "./styles.module.scss";

// markup
const PrivatyPolityContain = () => {
    return (
        <section id="privatyPolicy" className={styles.privatyPolicy}>
            <div className={styles.innerWrapper}>
                Privacy polity
            </div>
        </section>
    );
};

export default PrivatyPolityContain;
