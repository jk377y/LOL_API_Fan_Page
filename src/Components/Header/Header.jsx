import Nav from '../Nav/Nav'
import IMAGES from '../../../src/assets/images/index';
import './header.css';

const Header = () => {
	return (
		<>
			<div className="header-wrapper">
				<img src={IMAGES.lolLogo} alt="LOL title" className="titleImage" />
				<Nav />
			</div>
		</>
	)
}

export default Header