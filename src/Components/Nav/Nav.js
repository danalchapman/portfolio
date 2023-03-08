import { NavLink } from 'react-router-dom'
import './Nav.css'

const logo = require('../../Assets/7934292.png')

export const Nav = () => {
    return (
        <nav className='nav-container'>
            <img src={logo} alt='logo'className='nav-logo'/>
            <div className='nav-links'>
                <NavLink className='inactive' to='/'>Home</NavLink>
                <NavLink className='inactive' to='/about'>About</NavLink>
                <NavLink className='inactive' to='/projects'>Projects</NavLink>
                <NavLink className='inactive' to='/connect'>Connect</NavLink>
            </div>
        </nav>
    )
}