import styles from '../App.module.css';
import PropTypes from 'prop-types';

export const RefreshGame = ({ setSquares, setFirstPlayerIsNext, setIsWinEndGame }) => {
	RefreshGame.propTypes = {
		setSquares: PropTypes.func,
		setFirstPlayerIsNext: PropTypes.func,
		setIsWinEndGame: PropTypes.func,
	};
	return (
		<button
			className={styles.refButton}
			onClick={() => {
				setSquares(Array(9).fill(null));
				setFirstPlayerIsNext(true);
				setIsWinEndGame(false);
			}}
		>
			Начать игру заново
		</button>
	);
};
