import { useState } from 'react';
import { GameLayout } from './components/GameLayout';

export const GameContainer = () => {
	const [firstPlayerIsNext, setFirstPlayerIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isWinEndGame, setIsWinEndGame] = useState(false);

	return (
		<GameLayout
			firstPlayerIsNext={firstPlayerIsNext}
			setFirstPlayerIsNext={setFirstPlayerIsNext}
			squares={squares}
			setSquares={setSquares}
			isWinEndGame={isWinEndGame}
			setIsWinEndGame={setIsWinEndGame}
		/>
	);
};
