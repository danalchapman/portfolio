import { ProjectCard } from '../ProjectCard/ProjectCard'
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
                    summary={ project.summary }
                />
            )
        })
    }

    return (
        <section className='projects-container'>
            <article className='card-box'>
                { displayProjects() }
            </article>
        </section>
    )
}