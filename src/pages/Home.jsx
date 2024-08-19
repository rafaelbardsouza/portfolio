import '../styles/Home.scss';
import iDog from '../../public/iDog.png';
export default function Home() {
    return(
        <section className="home" id="home">
            <img src={iDog} alt='Home'/>
            <div className='items'>
                <h1>Hello, i'm Rafael! 👋</h1>
                <div className='links'>
                    <a href="#about">Download CV</a>
                    <a href="#projects">Contacts</a>
                </div>
            </div>
        </section>
    )
}