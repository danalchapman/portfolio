import { ProjectCard } from '../ProjectCard/ProjectCard'
import { Header } from '../Header/Header'
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
                    image={ project.image }
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
                <Header />
                <div className='card-box'>
                    { displayProjects() }
                </div>
                <Footer />
            </section>
        </div>
    )
}