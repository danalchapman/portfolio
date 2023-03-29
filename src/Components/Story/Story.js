import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

import flora from '../../Assets/flora.avif'
import meme from '../../Assets/memeface.png'
import fwiend from '../../Assets/fwiend.png'
import './Story.css'

export const Story = () => {
    return (
        <div className='story-container'>
            <img 
                src={ flora }
                alt='painted leaves and vines on a sepia-toned wall with sunlight'
                className='story-left'
            />
            <section className='story-right'>
                <div className='story-nav-container'>
                    <div className='story-nav-links'>
                        <Link to='/projects'><button className='story-btns'>Projects</button></Link>
                        <Link to='/connection'><button className='story-btns'>Connection</button></Link>
                    </div>
                    <div className='avatar-container'>
                        <img 
                            src={ meme }
                            alt='screenshot of a laptop screen with code'
                            className='story-circle'
                        />
                        <img 
                            src={ fwiend }
                            alt='two friends sitting at a table in a restaurant smiling into the camera'
                            className='story-circle'
                        />
                    </div>
                </div>
                <article className='story-text'>
                    <h3 className='story-greeting'>Hey hi hello!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
                <Link to='/'><button className='story-btns'>Home</button></Link>
                <Footer />
            </section>
        </div>
    )
}