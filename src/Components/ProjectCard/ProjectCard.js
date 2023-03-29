import filler from '../../Assets/space-img.avif'
import './ProjectCard.css'

export const ProjectCard = ({ title, repoLink, deployLink, image }) => {
    return (
        <article className='project-card'>
            <img 
                src={ image }
                alt='screenshot of project'
                className='card-img'
            />
            <div>
                <h4>{ title }</h4>
                <div className='card-links'>
                    <p><a href={ deployLink } title='Deployed Site'>View</a></p>
                    <p><a href={ repoLink } title='Repository'>Repository</a></p>
                </div>
            </div>
        </article>
    )
}