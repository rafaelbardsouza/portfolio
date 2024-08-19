import '../styles/Home.scss';
import iDog from '../../public/iDog.png';
export default function Home() {
    const scrollToContact = (event) => {
        event.preventDefault();
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
    }
    return(
        <section className="home" id="home">
            <img src={iDog} alt='Home'/>
            <div className='items'>
                <h1>Hello, i'm Rafael! 👋</h1>
                <div className='links'>
                    <a href="#about">Download CV</a>
                    <a href="#contact" onClick={scrollToContact}>Contact</a>
                </div>
            </div>
        </section>
    )
}