import './ProjectCard.css'

export const ProjectCard = ({ title, repoLink, deployLink }) => {
    return (
        <article className='project-card'>
            <h4>{ title }</h4>
            <p><a href={ deployLink }>View</a></p>
            <p><a href={ repoLink }>Repository</a></p>
        </article>
    )
}