import { useEffect } from 'react'
import Glide from '@glidejs/glide'

import me from '../assets/about.png'
import "@glidejs/glide/dist/css/glide.core.min.css";
import '../styles/About.scss'

export default function About() {
    useEffect(() => {
        const glide = new Glide(".glide", {
            type: 'carousel',
            focusAt: 'center',
            perView: 6,
            breakpoints: {
                1200: { perView: 4 },
                992: { perView: 4 },
                768: { perView: 4 },
                576: { perView: 2 }
            }
        }).mount()
        return () => glide.destroy();
    }, [])

    return(
        <section className='about' id='about'>
            <h1>{localStorage.getItem('lang')!='PT'?"My Skills":"Minhas Habilidades"}</h1>
            <img src={me} alt="About me"/>
            <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                    <ul className='glide__slides'>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>NestJS</h1>
                                <img src='https://skillicons.dev/icons?i=nest'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>React</h1>
                                <img src='https://skillicons.dev/icons?i=react'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>Svelte</h1>
                                <img src='https://skillicons.dev/icons?i=svelte'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>MySQL</h1>
                                <img src='https://skillicons.dev/icons?i=mysql'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>MongoDB</h1>
                                <img src='https://skillicons.dev/icons?i=mongodb'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>PostgreSQL</h1>
                                <img src='https://skillicons.dev/icons?i=postgresql'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>PHP</h1>
                                <img src='https://skillicons.dev/icons?i=php'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>C</h1>
                                <img src='https://skillicons.dev/icons?i=c'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>C#</h1>
                                <img src='https://skillicons.dev/icons?i=cs'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>Dart</h1>
                                <img src='https://skillicons.dev/icons?i=dart'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>Go</h1>
                                <img src='https://skillicons.dev/icons?i=go'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>JavaScript</h1>
                                <img src='https://skillicons.dev/icons?i=js'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>TypeScript</h1>
                                <img src='https://skillicons.dev/icons?i=ts'/>
                            </div>
                        </li>
                        <li className='glide__slide'>
                            <div className='card'>
                                <h1>Express</h1>
                                <img src='https://skillicons.dev/icons?i=express'/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}