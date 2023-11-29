import styles from '../App.module.css';
import { RefreshGame } from './RefreshGame';
import { BoardContainer } from './BoardContainer';
import PropTypes from 'prop-types';

export const GameLayout = ({
	firstPlayerIsNext,
	setFirstPlayerIsNext,
	squares,
	setSquares,
	isWinEndGame,
	setIsWinEndGame,
}) => {
	GameLayout.propTypes = {
		firstPlayerIsNext: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		setFirstPlayerIsNext: PropTypes.func,
		squares: PropTypes.array,
		setSquares: PropTypes.func,
		isWinEndGame: PropTypes.bool,
		setIsWinEndGame: PropTypes.func,
	};

	const goRefreshGame = () => {
		setSquares(Array(9).fill(null));
		setFirstPlayerIsNext(true);
		setIsWinEndGame(false);
	};

	return (
		<div className={styles.app}>
			<section className={styles.section}>
				<BoardContainer
					firstPlayerIsNext={firstPlayerIsNext}
					setFirstPlayerIsNext={setFirstPlayerIsNext}
					squares={squares}
					setSquares={setSquares}
					isWinEndGame={isWinEndGame}
					setIsWinEndGame={setIsWinEndGame}
				/>
				<RefreshGame goRefreshGame={goRefreshGame} />
			</section>
		</div>
	);
};
