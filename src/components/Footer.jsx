import '../styles/Footer.scss';

export default function Footer() {
    return(
        <section className="footer" id="footer">
            <h1>{localStorage.getItem('lang')!='PT'?"Contact":"Contato"}</h1>
            <div className="contact-list">
                <a href="mailto:rafaelbardsouza@gmail.com">
                    <div className='link'>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/gmail.png" alt="Gmail"/>
                        <p>E-mail</p>
                        <small>rafaelbardsouza@gmail.com</small>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5554991060330">
                    <div className='link'>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="Whatsapp"/>
                        <p>{localStorage.getItem('lang')!='PT'?"Phone":"Telefone"}</p>
                        <small>(54) 99106-0330</small>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/rafael-barbosa-de-souza-021320263">
                    <div className='link'>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn"/>
                        <p>LinkedIn</p>
                        <small>Rafael Barbosa de Souza</small>
                    </div>

                </a>
                <a href="https://github.com/rafaelbardsouza">
                    <div className='link'>
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="Github"/>
                        <p>GitHub</p>
                        <small>rafaelbardsouza</small>
                    </div>
                </a>
            </div>
        </section>
    )
}