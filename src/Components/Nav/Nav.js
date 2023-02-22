import './Nav.css'

export const Nav = () => {

    return (
        <header className='header-container'>
            <nav className='nav-container'>
                <a href={`#home`}>Home</a>
                <a href={`#about`}>About</a>
                <a href={`#projects`}>Projects</a>
                <a href={`#connect`}>Connect</a>
            </nav>
        </header>
    )
}