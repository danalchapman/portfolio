import './ProjectCard.css'

export const ProjectCard = ({ title, repoLink, deployLink, summary }) => {
    return (
        <article className='project-card'>
            <h4>{ title }</h4>
            <p>{ summary }</p>
            <p><a href={ deployLink }>View the Project</a></p>
            <p><a href={ repoLink }>Repository on GitHub</a></p>
        </article>
    )
}