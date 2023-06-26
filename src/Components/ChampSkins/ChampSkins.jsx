import PropTypes from 'prop-types';
import { useState } from 'react';
import './champskins.css';

const ChampSkins = ({ champion }) => {
    const { id, skins } = champion;
    const [currentSkinIndex, setCurrentSkinIndex] = useState(0);
    const { attack, magic, defense } = champion.info;
    const { hp, mp, armor } = champion.stats;
    const handleNextSkin = () => {
        setCurrentSkinIndex((prevIndex) => (prevIndex + 1) % skins.length);
    };

    const handlePreviousSkin = () => {
        setCurrentSkinIndex((prevIndex) => (prevIndex - 1 + skins.length) % skins.length);
    };

    const currentSkin = skins[currentSkinIndex];

    return (
        <div className="champ-skins-wrapper">
            <h3 className='champ-skins-name'>{currentSkin.name.toUpperCase()}</h3>
            <div className='champ-skins-frame'>
                <button className="champ-skin-nav-button" onClick={handlePreviousSkin} disabled={skins.length <= 1}>
                    {"<"}
                </button>
                <img className='champ-skins-img'
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${currentSkin.num}.jpg`}
                    alt={currentSkin.name}
                />
                <button className="champ-skin-nav-button" onClick={handleNextSkin} disabled={skins.length <= 1}>
                    {">"}
                </button>
            </div>
            <div className="champ-stats">
                <div className='champ-stats-label-wrapper1'>
                    <p className='champ-stats-label'>HP:&emsp;<span className="champ-stats-value">{hp}</span></p>
                    <p className='champ-stats-label'>MP:&emsp;<span className="champ-stats-value">{mp}</span></p>
                    <p className='champ-stats-label'>Armor:&emsp;<span className="champ-stats-value">{armor}</span></p>
                </div>
                <div className='champ-stats-label-wrapper2'>
                    <p className='champ-stats-label'>Attack:&emsp;<span className="champ-stats-value">{attack}</span></p>
                    <p className='champ-stats-label'>Magic:&emsp;<span className="champ-stats-value">{magic}</span></p>
                    <p className='champ-stats-label'>Defense:&emsp;<span className="champ-stats-value">{defense}</span></p>
                </div>
            </div>
        </div>
    );
};

ChampSkins.propTypes = {
    champion: PropTypes.shape({
        skins: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                num: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
        id: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            hp: PropTypes.number.isRequired,
            mp: PropTypes.number.isRequired,
            armor: PropTypes.number.isRequired,
            attackdamage: PropTypes.number.isRequired,
            attackspeed: PropTypes.number.isRequired,
        }).isRequired,
        info: PropTypes.shape({
            attack: PropTypes.number.isRequired,
            magic: PropTypes.number.isRequired,
            defense: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired,
};

export default ChampSkins;