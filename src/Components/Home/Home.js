import { Header } from '../Header/Header'
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
                <Header />
                <div className='home-content'>
                    <article className='quote-container'>
                        <h1 className='quote-text'>Life itself is the most wonderful fairy tale</h1>
                        <p className='quote-author'>-Hans Christian Anderson</p>
                    </article>
                    <article className='author-container'>
                        <img 
                            src={ avatar } 
                            alt='selfie of the website author' 
                            className='home-avatar'
                        />
                        <h2 className='author-text-name'>Dana Chapman</h2>
                        <p className='author-text-title'>Frontend Software Engineer</p>
                    </article>
                    <summary className='home-summary-container'>
                        <p className='summary-text'>
                            The call to help has been a lifelong one. From a BS in Psychology, to nearly seven years at one of the most well-known customer-first companies, to being the Community Outreach developer for an independent publishing company, to a new career in tech with a passion for ease of user expereince and accessibility in every avenue. After recently graduating from the Turing School of Software & Design, my love of problem-solving, accessibility, and storytelling has never been greater.
                        </p>
                        <aside className='summary-text prof-list'>
                            <p><span className='prof-text'>Proficiencies:</span> JavaScript, TypeScript, React.js, HTML, CSS, TailwindCSS, GraphQL, Test Driven Development (TDD), Cypress, Mocha, Chai, Git, Git Workflow, Vercel, CircleCI, Postman, Figma</p>
                            <p><span className='prof-text'>Learning:</span> React-Redux, PHP, Laravel, MySQL</p>
                        </aside>
                    </summary>
                </div>
                <Footer />
            </section>
        </div>
    )
}