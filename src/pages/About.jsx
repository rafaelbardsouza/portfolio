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
            perView: 3,
        }).mount()
        return () => glide.destroy();
    }, [])

    return(
        <section id='about'>
            <h1>Minhas tecnologias</h1>
            <img src={me} alt="About me"/>
            <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                    <ul className='glide__slides'>
                        <li className='glide__slide full-width'><img src='https://skillicons.dev/icons?i=c'/></li>
                        <li className='glide__slide full-width'><img src='https://skillicons.dev/icons?i=js'/></li>
                        <li className='glide__slide full-width'><img src='https://skillicons.dev/icons?i=react'/></li>
                        <li className='glide__slide full-width'><img src='https://skillicons.dev/icons?i=svelte'/></li>
                        <li className='glide__slide full-width'><img src='https://skillicons.dev/icons?i=nest'/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}