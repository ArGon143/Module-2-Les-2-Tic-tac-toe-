import styles from '../App.module.css';
import PropTypes from 'prop-types';

export const Square = ({ value, onClick }) => {
	Square.propTypes = {
		value: PropTypes.string,
		onClick: PropTypes.func,
	};
	return (
		<button className={styles.square} onClick={onClick}>
			{value}
		</button>
	);
};
