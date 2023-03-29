import { NavLink } from "react-router-dom"

import './Header.css'

export const Header = () => {
    return (
        <nav className='nav-container'>
            <NavLink to='/'><button className='nav-btns'>Home</button></NavLink>
            <NavLink to='/projects'><button className='nav-btns'>Projects</button></NavLink>
            <NavLink to='/connection'><button className='nav-btns'>Connection</button></NavLink>
        </nav>
    )
}