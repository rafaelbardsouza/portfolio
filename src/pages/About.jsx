
import me from '../assets/about.png'
import '../styles/About.scss'

export default function About() {
    return(
        <section id='about'>
            <h1>Minhas tecnologias</h1>
            <img src={me}/>
            <div className='techs'>

            </div>
        </section>
    )
}