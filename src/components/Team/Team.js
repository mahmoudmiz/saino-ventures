import * as React from "react";
import Grow from "@material-ui/core/Grow";

//assets
import placeholder from "../../images/placeholder.png";

//styles
import * as styles from "./styles.module.scss";

// markup
const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.teamHeader}>
        <h3>TEAM</h3>
        <h5>Lorem ipsum dolor sit amet consectetur adipis elit.</h5>
      </div>

      <div className={styles.membersList}>
        <Grow in={true}>
          <div className={styles.teamMember}>
            <img src={placeholder} alt="team member" />
            <h3>
              Lorem ipsum <br />
              LOREM IPSUM DOLOR Copy
            </h3>
          </div>
        </Grow>
        <Grow in={true} timeout={1000}>
          <div className={styles.teamMember}>
            <img src={placeholder} alt="team member" />
            <h3>
              Lorem ipsum <br />
              LOREM IPSUM DOLOR Copy
            </h3>
          </div>
        </Grow>
        <Grow in={true} timeout={1200}>
          <div className={styles.teamMember}>
            <img src={placeholder} alt="team member" />
            <h3>
              Lorem ipsum <br />
              LOREM IPSUM DOLOR Copy
            </h3>
          </div>
        </Grow>
      </div>
    </section>
  );
};

export default Team;
