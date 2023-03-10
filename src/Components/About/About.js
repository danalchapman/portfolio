import linkedinIcon from '../../Assets/linkedin(1).png'
import gmailIcon from '../../Assets/gmail.png'
import instagramIcon from '../../Assets/instagram.png'
import githubIcon from '../../Assets/github(1).png'
import twitterIcon from '../../Assets/twitter.png'
import './About.css'

export const About = () => {
    return (
        <section className='about-container'>
            <div className='scroll-wrapper'>
                <article className='scrolls'>
                    <img src={linkedinIcon} alt='text' className='scroll-img'/>
                    <img src={gmailIcon} alt='text' className='scroll-img'/>
                    <img src={instagramIcon} alt='text' className='scroll-img'/>
                    <img src={githubIcon} alt='text' className='scroll-img'/>
                    <img src={twitterIcon} alt='text' className='scroll-img'/>
                </article>
            </div>
            <article className='about-text'>
                <p>Hey hi hello! My name is Dana, and my lifelong calling has been to help others in whatever facet I find myself in.</p>
                <p>I graduated Magna Cum Laude from Florida State University in 2016 with a Bachelor of Science, Psychology, with future aspirations of becoming a Victim Advocate for my local community. However, my first pivot came when I decided to continue working with Starbucks - I spent nearly seven years connecting with my community and partners, with the hope that a small interaction could have a positive impact on someone's day.</p>
                <p>The transition into tech actually started near the end of 2020, when I started to look for opportunities outside of the retail/food service realm. I initially, on the suggestion of a friend, earned my certificate in Google's IT Support Specialization, which I received in April of 2021. It would be another year of job searching while working, before I would make the leap of faith that took me to where I am today.</p>
                <p>I applied to the Turing School of Software & Design in March 2022, and I joined the Frontend Software Engineering program in July as part of the 2207 (Year and Month) cohort. My seven months in the program were the most challenging times of my life, even more so than my previous academic endeavor - but the skills I learned, the relationships I cultivated, and the time spent learning and growing my understanding were more than worth the struggle I endured. I graduated from Turing in late January 2023.</p>
                <p>I am always happy to make time to connect with someone new or to help others. Please feel free to reach out - let's have a coffee chat or two, I'd love to hear about what you are most passionate about, or what drives you forward.</p>
            </article>
        </section>
    )
}