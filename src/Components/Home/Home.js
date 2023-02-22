import collage from '../../Assets/Header.png'
import './Home.css'

export const Home = () => {

    return (
        <section className='home-container'>
            <img src={collage} alt='collage' className='header-img'/>
        </section>
    )
}