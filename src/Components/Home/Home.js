import collage from '../../Assets/head.png'
import './Home.css'

export const Home = () => {

    return (
        <section className='home-container' id='home'>
            <img src={collage} alt='collage' className='header-img'/>
        </section>
    )
}