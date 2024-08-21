import PropTypes from 'prop-types';
import './VillaCard.css';

const VillaCard = ({ title, description, image }) => {
    return (
        <div className="villa-card">
            <img src={image} alt={title} className="villa-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="buy-button">Buy</button>
        </div>
    );
};

VillaCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default VillaCard;