import { Link } from 'react-router-dom'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Footer } from '../Footer/Footer'

import lines from '../../Assets/lines.avif'
import './Projects.css'

export const Projects = ({ projects }) => {

    const displayProjects = () => {
        return projects.map(project => {
            return (
                <ProjectCard 
                    key={ project.projectID }
                    title={ project.title }
                    repoLink={ project.repoLink }
                    deployLink={ project.deployLink }
                />
            )
        })
    }

    return (
        <div className='projects-container'>
            <img 
                src={ lines }
                alt='hazy lines over a dark background'
                className='projects-left'
            />
            <section className='projects-right'>
                <div className='projects-nav-container'>
                    <Link to='/story'><button className='projects-btns'>Story</button></Link>
                    <Link to='/connection'><button className='projects-btns'>Connection</button></Link>
                </div>
                <div className='card-box'>
                    { displayProjects() }
                </div>
                <Link to='/'><button className='projects-btns'>Home</button></Link>
                <Footer />
            </section>
        </div>
    )
}