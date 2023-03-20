import { Link } from 'react-router-dom'

import flora from '../../Assets/flora.avif'
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
                    <button className='story-btns'>Projects</button>
                    <button className='story-btns'>Connection</button>
                </div>
                <article className='story-text'>
                    <p>Filler text let's go</p>
                    <p>More fillter text because I gotta</p>
                    <p>Fillter text the third</p>
                </article>
                <Link to='/'><button className='story-btns'>Home</button></Link>
            </section>
        </div>
    )
}