import './Nav.css'

export const Nav = () => {
    return (
        <header className='header-container'>
            <h1>Dana Chapman</h1>
            <p>Frontend Software Engineer</p>
            <nav className='nav-container'>
                <button>About Me</button>
                <button>Projects</button>
                <button>Let's Connect</button>
            </nav>
        </header>
    )
}