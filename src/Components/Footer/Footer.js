import email from '../../Assets/gmail.png'
import github from '../../Assets/github(1).png'
import insta from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin(1).png'
import twitter from '../../Assets/twitter.png'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <img src={email} alt='icon' className='icon'/>
            <img src={github} alt='icon' className='icon'/>
            <img src={insta} alt='icon' className='icon'/>
            <img src={linkedin} alt='icon' className='icon'/>
            <img src={twitter} alt='icon' className='icon'/>
        </footer>
    )
}