import { Header } from '../Header/Header'

import email from '../../Assets/con-email.png'
import github from '../../Assets/con-github.png'
import insta from '../../Assets/con-insta.png'
import linkedin from '../../Assets/con-linked.png'
import twitter from '../../Assets/conn-twitter.png'

import moon from '../../Assets/mountain.avif'
import avie from '../../Assets/av-1.png'
import logo from '../../Assets/turing.png'
import fwiend from '../../Assets/fwiend.png'
import meme from '../../Assets/memeface.png'
import fsu from '../../Assets/FSU .png'
import sky from '../../Assets/sky.png'
import dogs from '../../Assets/dogs.png'
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
                <Header />
                <summary className='top-container'>
                    <img 
                        src={ avie }
                        alt='Selfie of author'
                        className='con-avatar'
                    />
                    <aside className='con-text-align'>
                        <h3 className='con-text-top'>Come share your story with me!</h3>
                        <p className='con-text-bottom'>Do everything with kindness</p>
                    </aside>
                </summary>
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
                <article className='con-images'>
                    
                    <img 
                        src={ fwiend }
                        alt='two friends sitting at a table smiling into the camera'
                        className='con-avatar bottom'
                    />
                    <img 
                        src={ meme }
                        alt='an akita making a meme-like face'
                        className='con-avatar bottom'
                    />
                    <img 
                        src={ dogs }
                        alt='Dana sitting on a couch with two dogs'
                        className='con-avatar bottom'
                    />
                    <img 
                        src={ fsu }
                        alt='three friends sitting at a restaurant outside'
                        className='con-avatar bottom'
                    />
                    <img 
                        src={ sky }
                        alt='beautiful sunset sky with pink and orange clouds'
                        className='con-avatar bottom'
                    />
                    <img 
                        src={ logo }
                        alt='Turing School logo'
                        className='con-avatar bottom'
                    />
                </article>
                <footer className='con-footer'>
                    <p>© 2023 Dana Chapman. All rights reserved.</p>
                </footer>
            </section>
        </div>
    )
}