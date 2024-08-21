import PropTypes from 'prop-types';
import './HeroSection.css';

const HeroSection = ({ image }) => {
    return (
        <section className="hero-section">
            <div className="banner">
                <img src={image} alt="Villa Banner" />
            </div>
        </section>
    );
}

HeroSection.propTypes = {
    image: PropTypes.string.isRequired,
};

export default HeroSection;