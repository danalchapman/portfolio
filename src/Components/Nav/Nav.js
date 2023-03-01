import { Link, animateScroll as scroll } from 'react-scroll'
import './Nav.css'

export const Nav = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <nav className='header-container'>
            <header 
                className='nav-title'
                onClick={scrollToTop}
            >Dana Chapman</header>
            <ul className='nav-container'>
                <li className='nav-item'>
                    <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Home</Link>
                </li>
                <li className='nav-item'>
                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>
                </li>
                <li className='nav-item'>
                    <Link
                        activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link>
                </li>
                <li className='nav-item'>
                    <Link
                        activeClass='active'
                        to='connect'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Connect</Link>
                </li>
            </ul>
        </nav>
    )
}