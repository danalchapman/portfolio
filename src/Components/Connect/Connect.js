import './Connect.css'
import linkedinIcon from '../../Assets/linkedin(1).png'
import gmailIcon from '../../Assets/gmail.png'
import instagramIcon from '../../Assets/instagram.png'
import githubIcon from '../../Assets/github(1).png'
import twitterIcon from '../../Assets/twitter.png'

export const Connect = () => {
    return (
        <section className='connect-container'>
            <h4>Let's Connect</h4>
            <a href='https://www.linkedin.com/in/danalchapman/'>
                <img src={linkedinIcon } alt='LinkedIn Icon' className='icon' />
            </a>
            <a href='https://github.com/danalchapman'>
                <img src={ githubIcon } alt='GitHub Icon' className='icon' />
            </a>
            <a href='https://twitter.com/danaleighbee'>
                <img src={ twitterIcon } alt='Twitter Icon' className='icon' />
            </a>
            <a href='https://www.instagram.com/danaleighbee/'>
                <img src={ instagramIcon } alt='Instagram Icon' className='icon' />
            </a>
            <a href='mailto:dana.leigh.dlc@gmail.com'>
                <img src={ gmailIcon } alt='Gmail Icon' className='icon' />
            </a>
        </section>
    )
}