import PropTypes from 'prop-types';
import './champspells.css';

const ChampSpells = ({ champion }) => {
    const { passive } = champion;
    return (
        <div className="spells-wrapper">
            <h1 className="spell-title">Champion Abilities</h1>
            <div className="spell-passive" key={passive.name}>
                <p className='spell-label'>{passive.name}</p>
                <div className="spell-passive-desc-wrapper">
                    <img className="spell-icon" src={`https://ddragon.leagueoflegends.com/cdn/13.12.1/img/passive/${passive.image.full}`} alt={passive.name} />
                    <p className='spell-desc'>{passive.description}</p>
                </div>
            </div>
            <br></br>
            {champion.spells.map((spell) => (
                <div className="spell-each-spell" key={spell.name}>
                    <p className='spell-label'>{spell.name}</p>
                    <div className="spell-each-spell-wrapper">
                        <img className="spell-icon" src={`https://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/${spell.image.full}`} alt={spell.name} />
                        <p className='spell-desc'>{spell.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

ChampSpells.propTypes = {
    champion: PropTypes.shape({
        spells: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    full: PropTypes.string.isRequired,
                }).isRequired,
            })
        ).isRequired,
        passive: PropTypes.shape({
            description: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.shape({
                full: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChampSpells;