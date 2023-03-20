import { Link } from 'react-router-dom'

import { Footer } from '../Footer/Footer'

import wall from '../../Assets/wall.avif'
import avatar from '../../Assets/ava-resize.png'
import './Home.css'

export const Home = () => {

    return (
        <div className='home-container'>
            <img 
                src={ wall } 
                alt='a wall with a metal bar design over it' 
                className='home-left'
            />
            <section className='home-right'>
                <div className='quote-container'>
                    <h1 className='quote-text'>Life itself is the most wonderful fairy tale</h1>
                    <p className='quote-author'>-Hans Christian Anderson</p>
                </div>
                <div className='author-container'>
                    <img 
                        src={ avatar } 
                        alt='selfie of the website author' 
                        className='home-avatar'
                    />
                    <h2 className='author-text-name'>Dana L.C.</h2>
                    <p className='author-text-title'>Frontend Software Engineer</p>
                </div>
                <div className='home-nav-container'>
                    <Link to='/story'><button className='home-btns'>Story</button></Link>
                    <button className='home-btns'>Projects</button>
                    <button className='home-btns'>Connection</button>
                </div>
                <Footer />
            </section>
        </div>
    )
}