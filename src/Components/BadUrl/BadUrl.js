import { Link } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

import oops from '../../Assets/oops.gif'
import './BadUrl.css'

 export const BadUrl = () => {
    return (
        <section className='error-container'>
            <Header />
            <article className='error-content'>
                <img 
                    src={ oops }
                    alt='oops!'
                    className='error-gif'
                />
                <p className='error-text'>Click the button below to return to the Home page. Thank you!</p>
                <Link to='/'><button className='error-home-btn'>Return Home</button></Link>
            </article>
            <Footer />
        </section>
    )
 }