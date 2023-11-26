import { BoardLayout } from './BoardLayout';
import PropTypes from 'prop-types';

export const BoardContainer = ({
	firstPlayerIsNext,
	setFirstPlayerIsNext,
	squares,
	setSquares,
	isWinEndGame,
	setIsWinEndGame,
}) => {
	BoardContainer.propTypes = {
		firstPlayerIsNext: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
		setFirstPlayerIsNext: PropTypes.func,
		squares: PropTypes.array,
		setSquares: PropTypes.func,
		isWinEndGame: PropTypes.bool,
		setIsWinEndGame: PropTypes.func,
	};

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (firstPlayerIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		setSquares(nextSquares);
		setFirstPlayerIsNext(!firstPlayerIsNext);
	}

	function calculateWinner(squares) {
		const winCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winCombinations.length; i++) {
			const [a, b, c] = winCombinations[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				setIsWinEndGame(true);

				return squares[a];
			}
		}

		return null;
	}

	const winner = calculateWinner(squares);
	let status;

	if (winner) {
		status = `Игрок игравший "${winner}" победил`;
	} else {
		status = `Сейчас ход "${firstPlayerIsNext ? 'X' : 'O'}"`;
	}
	if (!winner && !squares.includes(null)) {
		status = `Ничья. "Сразитесь" еще раз!`;
	}

	return (
		<BoardLayout
			squares={squares}
			handleClick={handleClick}
			status={status}
			isWinEndGame={isWinEndGame}
			setIsWinEndGame={setIsWinEndGame}
		/>
	);
};
