import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title, links }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default Header;
