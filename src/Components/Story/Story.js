import { Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

import flora from '../../Assets/flora.avif'
import tech from '../../Assets/tech-1 copy.png'
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
                    <div>
                        <img 
                            src={ tech }
                            alt='screenshot of a laptop screen with code'
                            className='story-circle'
                        />
                        <img />
                    </div>
                </div>
                <article className='story-text'>
                    <h3 className='story-greeting'>Hey hi hello!</h3>
                    <p>My name is Dana, I use They/Them and She/Her pronouns, and I am a Frontend Software Engineer with a passion for accessibility and user experience. I am a graduate of the <a href='https://turing.edu/' title='Turing'>Turing School of Software & Design</a>'s Frontend Program.</p>
                    <ul>
                        <li>I spent (7) months learning JavaScript, React.js, HTML, CSS, API manipulation, how to think and speak to code as well as self-teaching new technologies and more.</li>
                        <li>For most of those weeks I spent 80-90 hours - yes, really! - coding and utilizing best practices for the numerous technologies and tools we were learning.</li>
                        <li>If you would like a more comprehensive list of the projects I've worked on or the technologies I have my hands in, please checekout my <a href='https://github.com/danalchapman'>GitHub</a>.</li>
                    </ul>
                    <p>However, I am not all code and no play. I received my Bachelor's degree in Psychology from Florida State University in 2016 and I spent nearly seven years at Starbucks Coffee Company before transitioning into tech. For the last five years I have helped to raise thousands of dollars for organizations, causes, and individuals like through streaming Tabletop Roleplaying Games (TTRPGs). Some of those organizations and causes include Extra Life (in support of the Seattle Children's Hospital), Prism United, RAINN, and more.</p>
                    <p>My calling has been to help others, and to leave the world better than I found it. I strive to act with kindness in every moment because you never know what another person has experienced or is going through at the moment in time where your paths cross. I am always open and willing to network and connect with others in and out of the tech space, so please feel free to reach out and let's schedule something.</p>
                </article>
                <Link to='/'><button className='story-btns'>Home</button></Link>
                <Footer />
            </section>
        </div>
    )
}