import ben10 from "../assets/ben10.png";
import scrooge from "../assets/scrooge.png";
import pinkpanther from "../assets/pinkpanther.png";
import simpson from "../assets/simpson.png";
import styles from "./Header.module.css";
import PropTypes from 'prop-types'

export default function Header({timer}) {
	return (
		<header className={styles.header}>
			<span className={styles.leaderboard}>Toon Hunt</span>
			<div className={styles.images}>
				<div><img src={ben10} alt="ben10" /><p>Ben10</p></div>
                <div><img src={scrooge} alt="scrooge" /><p>Scrooge</p></div>
                <div><img src={pinkpanther} alt="pinkpanther" /><p>Pinkpanther</p></div>
                <div><img src={simpson} alt="simpson" /><p>Simpson</p></div>
			</div>
			<span className={styles.timer}>{parseInt(timer / 60)}:{timer%60 }</span>
		</header>
	);
}
Header.propTypes = {
	timer: PropTypes.number,
  };
