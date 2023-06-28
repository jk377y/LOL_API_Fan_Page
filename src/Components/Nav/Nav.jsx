import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <>
            <div className="nav-wrapper">
                <Link to="/" className="navLinks">Home</Link>
                <Link to="/champions" className="navLinks">Champions</Link>
                <Link to="/resources" className="navLinks">Resources</Link>
            </div>
        </>
    )
}

export default Nav