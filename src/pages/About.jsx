import { useEffect } from 'react'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import me from '../assets/about.png'
import ferry from '../assets/ferry.png'
import '../styles/About.scss'

export default function About() {

    return(
        <section className='about' id='about'>
            <h1>{localStorage.getItem('lang')!='PT'?"My Skills":"Minhas Habilidades"}</h1>
            <img className='me' src={me} alt="About me"/>
            <Glider
                className='glider'
                draggable
                hasArrows
                slidesToShow={6}
                slidesToScroll={6}
                arrows={{
                    prev: '#notesPrev',
                    next: '#notesNext',
                }}
            >
                <div className='card'>
                    <h1>TypeScript</h1>
                    <img src='https://skillicons.dev/icons?i=ts'/>
                </div>
                <div className='card'>
                    <h1>NestJS</h1>
                    <img src='https://skillicons.dev/icons?i=nest'/>
                </div>
                <div className='card'>
                    <h1>React</h1>
                    <img src='https://skillicons.dev/icons?i=react'/>
                </div>
                <div className='card'>
                    <h1>Svelte</h1>
                    <img src='https://skillicons.dev/icons?i=svelte'/>
                </div>
                <div className='card'>
                    <h1>MySQL</h1>
                    <img src='https://skillicons.dev/icons?i=mysql'/>
                </div>
                <div className='card'>
                    <h1>MongoDB</h1>
                    <img src='https://skillicons.dev/icons?i=mongodb'/>
                </div>
                <div className='card'>
                    <h1>PHP</h1>
                    <img src='https://skillicons.dev/icons?i=php'/>
                </div>
                <div className='card'>
                    <h1>PostgreSQL</h1>
                    <img src='https://skillicons.dev/icons?i=postgresql'/>
                </div>
                <div className='card'>
                    <h1>C</h1>
                    <img src='https://skillicons.dev/icons?i=c'/>
                </div>
                <div className='card'>
                    <h1>C#</h1>
                    <img src='https://skillicons.dev/icons?i=cs'/>
                </div>
                <div className='card'>
                    <h1>Dart</h1>
                    <img src='https://skillicons.dev/icons?i=dart'/>
                </div>
                <div className='card'>
                    <h1>Go</h1>
                    <img src='https://skillicons.dev/icons?i=go'/>
                </div>
                <div className='card'>
                    <h1>JavaScript</h1>
                    <img src='https://skillicons.dev/icons?i=js'/>
                </div>
                <div className='card'>
                    <h1>Express</h1>
                    <img src='https://skillicons.dev/icons?i=express'/>
                </div>
            </Glider>
            <h1>{localStorage.getItem('lang')!='PT'?"Portfolio":"Portfólio"}</h1>
            <Glider
                className='glider second'
                draggable
                hasArrows
                slidesToShow={6}
                slidesToScroll={6}
                arrows={{
                    prev: '#notesPrev',
                    next: '#notesNext',
                }}
            >
                <a href='https://github.com/rafaelbardsouza/Ferry-Tickets' style={{textDecoration: 'none', color: 'white'}} className='card'>
                    <h1>Ticket System</h1>
                    <img src={ferry} style={{ width: '80%', height: '100%' }} alt="Ferry"/>
                    <img className='small-icons' src='https://skillicons.dev/icons?i=svelte,nestjs'/>
                </a>
            </Glider>
        </section>
    )
}