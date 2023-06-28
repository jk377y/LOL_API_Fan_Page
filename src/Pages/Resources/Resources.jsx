import { Link } from 'react-router-dom'
import './resources.css'
import IMAGES from '../../assets/images'

const Resources = () => {
	return (
		<div className='resources-wrapper'>
			<div className="resources-section">
				<h1 className="resources-titles">Techs Used</h1>
				<div className="resources-link-icons">
					<Link to="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=vite" alt="vite" title="Vite" className="resources-link-icon resource-link-glow" /> </Link>
					<Link to="https://reactjs.org/" className="resources-link-icon" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=react" alt="react" title="React" className="resources-link-icon resource-link-glow" /></Link>
				</div>
			</div>
			<div className="resources-section">
				<h1 className="resources-titles">Riot/League of Legends Links</h1>
				<div className="resources-link-icons">
					<Link to="https://developer.riotgames.com/docs/portal#_getting-started" target="_blank" rel="noreferrer"><img src={IMAGES.riot} alt="Riot Games Developer Docs" title="Riot Games Developer Docs" className="resources-link-icon resource-link-glow" /> </Link>
					<Link to="https://www.leagueoflegends.com/en-us/" target="_blank" rel="noreferrer"><img src={IMAGES.lolIcon} alt="League of Legends Home Page" title="League of Legends Home Page" className="resources-link-icon resource-link-glow" /> </Link>
				</div>
			</div>
			<div className="resources-section">
				<h1 className="resources-titles">My Links</h1>
				<div className="resources-link-icons">
					<div className="resources-link-jk377y-wrapper">
						<Link to="https://jk377y.dev" target="_blank" rel="noreferrer"><img src={IMAGES.jk377y} alt="My Portfolio" title="My Portfolio" className="resources-link-icon resources-jk377y resource-link-glow" /> </Link>
					</div>
					<Link to="https://github.com/jk377y" className="resources-link-icon" target="_blank" rel="noreferrer"><img src={IMAGES.github} alt="My Github" title="My Github" className="resources-link-icon resource-link-glow" /></Link>
					<Link to="https://www.linkedin.com/in/james-kelly-b93a94150/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=linkedin" alt="james kelly linkedIn profile" title="My LinkedIn Profile" className="resources-link-icon resource-link-glow" /></Link>
					<Link to="mailto:jk377y@gmail.com" target="_blank" rel="noreferrer"><img src={IMAGES.gmail} alt="my email address" title="Email Me" className="resources-link-icon resource-link-glow"/></Link>
				</div>
			</div>
			<div className="resources-section">
				<h3 className="resources-disclaimer">This application is not endorsed by <span className="golden">Riot Games</span> and does not reflect the views or opinions of <span className="golden">Riot Games</span> or anyone officially involved in producing or managing Riot Games properties. <span className="golden">Riot Games</span> and all associated properties are trademarks or registered trademarks of <span className="golden">Riot Games, Inc</span></h3>
				
			</div>
		</div>
	)
}

export default Resources