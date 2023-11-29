import styles from '../App.module.css';
import PropTypes from 'prop-types';

export const RefreshGame = ({ goRefreshGame }) => {
	RefreshGame.propTypes = {
		goRefreshGame: PropTypes.func,
	};
	return (
		<button className={styles.refButton} onClick={goRefreshGame}>
			Начать игру заново
		</button>
	);
};
