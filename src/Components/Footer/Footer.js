import email from '../../Assets/footer-email.png'
import github from '../../Assets/footer-github.png'
import insta from '../../Assets/footer-insta.png'
import linkedin from '../../Assets/footer-linked.png'
import twitter from '../../Assets/footer-twitter.png'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <a href='mailto:dana.leigh.dlc@gmail.com?subject=Coffee%20Chat' className='icon-link' title='Email'>
                <img src={email} alt='icon' className='icon'/>
            </a>
            <a href='https://github.com/danalchapman' className='icon-link' title='GitHub'>
                <img src={github} alt='icon' className='icon'/>
            </a>
            <a href='https://www.instagram.com/danaleighbee/' className='icon-link' title='Instagram'>
                <img src={insta} alt='icon' className='icon'/>
            </a>
            <a href='https://www.linkedin.com/in/danalchapman/' className='icon-link' title='LinkedIn'>
                <img src={linkedin} alt='icon' className='icon'/>
            </a>
            <a href='https://twitter.com/danaleighbee' className='icon-link' title='Twitter'>
                <img src={twitter} alt='icon' className='icon'/>    
            </a>
        </footer>
    )
}