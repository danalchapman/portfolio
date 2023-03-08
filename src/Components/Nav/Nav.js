import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
    return (
        <nav className='nav-container'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/connect'>Connect</Link>
        </nav>
    )
}