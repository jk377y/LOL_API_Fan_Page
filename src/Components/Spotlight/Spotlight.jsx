import PropTypes from 'prop-types';
import ChampSkins from '../ChampSkins/ChampSkins';
import ChampSpells from '../ChampSpells/ChampSpells';
import './spotlight.css'

const Spotlight = ({ champion, closeSpotlight }) => {
    const { name, lore, title } = champion;

    return (
        <div className="spotlight-grid">
            <div className="spotlight-grid1">
                <h2 className="spotlight-name">{name}</h2>
                <h4 className="spotlight-title">{title}</h4>
                <p className="spotlight-lore">&emsp;{lore}</p>
            </div>
            <div className="spotlight-grid2">
                <ChampSkins champion={champion} />
                <button className="spotlight-close-button" onClick={closeSpotlight}>Back to Gallery</button>
            </div>
            <div className="spotlight-grid3">
                <ChampSpells champion={champion} />
            </div>
        </div>
    );
};

Spotlight.propTypes = {
    champion: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        lore: PropTypes.string.isRequired,
    }).isRequired,
    closeSpotlight: PropTypes.func.isRequired,
};

export default Spotlight;