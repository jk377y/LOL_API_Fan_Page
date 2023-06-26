import { useEffect, useState } from 'react';
import Spotlight from '../../Components/Spotlight/Spotlight';
import './champions.css';

function Champions() {
    const [champions, setChampions] = useState(null);
    const [selectedChampion, setSelectedChampion] = useState('');
    const [showSpotlight, setShowSpotlight] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json');
                const data = await response.json();
                setChampions(data);
            } catch (error) {
                console.error('Error fetching champion data:', error);
            }
        };
        fetchData();
    }, []);

    const handleChampionClick = async (championId) => {
        try {
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion/${championId}.json`);
            const data = await response.json();
            setSelectedChampion(data.data[championId]);
            setShowSpotlight(true);
        } catch (error) {
            console.error('Error fetching champion info:', error);
        }
    };
    const closeSpotlight = () => {
        setShowSpotlight(false);
    };
    return (
        <>
            {champions !== null ? (
                <div className="champ-wrapper">
                    <div className={`champ-gallery-container ${showSpotlight ? 'hide' : ''}`}>
                        <h1 className="champ-title">Your Champion Awaits</h1>
                        <div className="champ-gallery">
                            {Object.keys(champions.data).map((championKey) => {
                                const champion = champions.data[championKey];
                                const champAvatar = `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champion.image.full}`;
                                return (
                                    <div className="champ-avatar-frame" key={championKey}>
                                        <img
                                            id={champion.id}
                                            src={champAvatar}
                                            className="thumbnail"
                                            alt={`${champion.name} - ${champion.title}`}
                                            title={champion.name}
                                            onClick={() => handleChampionClick(champion.id)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {showSpotlight && <Spotlight champion={selectedChampion} closeSpotlight={closeSpotlight} />}
                </div>
            ) : (
                <h1>Loading . . .</h1>
            )}
        </>
    );
}

export default Champions;