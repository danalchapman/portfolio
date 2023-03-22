import { Link } from 'react-router-dom'

import email from '../../Assets/gmail.png'
import github from '../../Assets/github(1).png'
import insta from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin(1).png'
import twitter from '../../Assets/twitter.png'

import moon from '../../Assets/mountain.avif'
import avie from '../../Assets/av-1.png'
import './Connection.css'

export const Connection = () => {
    return (
        <div className='con-container'>
            <img 
                src={ moon }
                alt='Pastel moon over mountains'
                className='con-left'
            />
            <section className='con-right'>
                <div className='top-container'>
                    <img 
                        src={ avie }
                        alt='Selfie of author'
                        className='con-avatar'
                    />
                    <div className='con-text-align'>
                        <h3 className='con-text-top'>Come share your story with me!</h3>
                        <p className='con-text-bottom'>Do everything with kindness</p>
                    </div>
                </div>
                <article className='con-links-container'>
                    <a href='mailto:dana.leigh.dlc@gmail.com?subject=Coffee%20Chat' title='Email'> 
                        <img 
                            src={ email }
                            alt='Email Icon'
                            className='con-icon'
                        />
                    </a>
                    <a href='https://github.com/danalchapman' title='GitHub'>
                        <img 
                            src={ github }
                            alt='GitHub Icon'
                            className='con-icon'
                        />
                    </a>
                    <a href='https://www.instagram.com/danaleighbee/' title='Instagram'>
                        <img 
                            src={ insta }
                            alt='Instagram Icon'
                            className='con-icon'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/danalchapman/' title='LinkedIn'>
                        <img 
                            src={ linkedin }
                            alt='LinkedIn Icon'
                            className='con-icon'
                        />
                    </a>
                    <a href='https://twitter.com/danaleighbee' title='Twitter'>
                        <img 
                            src={ twitter }
                            alt='Twitter Icon'
                            className='con-icon'
                        />
                    </a>
                </article>
                <div className='con-nav-container'>
                    <Link to='/story'><button className='con-btns'>Story</button></Link>
                    <Link to='/projects'><button className='con-btns'>Projects</button></Link>
                    <Link to='/'><button className='con-btns'>Home</button></Link>
                </div>
                <footer className='con-footer'>
                    <p>© 2023 Dana Chapman. All rights reserved.</p>
                </footer>
            </section>
        </div>
    )
}