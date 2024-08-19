import '../styles/Home.scss';
import iDog from '../assets/idog.png';
export default function Home() {
    return(
        <section className="home" id="home">
            <img src={iDog} alt='Home'/>
            <h1>Hello, i'm Rafael! 👋</h1>
        </section>
    )
}