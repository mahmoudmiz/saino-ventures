import * as React from "react";
import Grow from "@material-ui/core/Grow";
import { Trans } from "gatsby-plugin-react-i18next";

//assets
import placeholder from "../../images/placeholder.png";

//styles
import * as styles from "./styles.module.scss";

// markup
const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.innerWrapper}>
        <div className={styles.teamHeader}>
          <h3>
            <Trans>TEAM</Trans>
          </h3>
          <h5>
            <Trans>Lorem ipsum dolor sit amet consectetur adipis elit.</Trans>
          </h5>
        </div>

        <div className={styles.membersList}>
          <Grow in={true}>
            <div className={styles.teamMember}>
              <img src={placeholder} alt="team member" />
              <h3>
                <Trans>Lorem ipsum</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
            </div>
          </Grow>
          <Grow in={true} timeout={1000}>
            <div className={styles.teamMember}>
              <img src={placeholder} alt="team member" />
              <h3>
                <Trans>Lorem ipsum</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
            </div>
          </Grow>
          <Grow in={true} timeout={1200}>
            <div className={styles.teamMember}>
              <img src={placeholder} alt="team member" />
              <h3>
                <Trans>Lorem ipsum</Trans> <br />
                <Trans>LOREM IPSUM DOLOR</Trans>
              </h3>
            </div>
          </Grow>
        </div>
      </div>
    </section>
  );
};

export default Team;
