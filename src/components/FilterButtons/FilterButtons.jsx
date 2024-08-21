import PropTypes from 'prop-types';
import './FilterButtons.css';

const FilterButtons = ({ buttons }) => {
    return (
        <div className="filter-buttons">
            {buttons.map((button, index) => (
                <button key={index} onClick={button.onClick}>
                    {button.label}
                </button>
            ))}
        </div>
    );
}

FilterButtons.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        })
    ).isRequired,
};

export default FilterButtons;