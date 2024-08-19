import '../styles/Footer.scss';

export default function Footer() {
    return(
        <section className="footer" id="footer">
            <h1>Contact</h1>
            <div className="contact-list">
                <a href="mailto:rafaelbardsouza@gmail.com">
                    <div className='link'>
                        <img src="https://img.icons8.com/color/48/000000/gmail--v1.png" alt="Gmail"/>
                        <p>E-mail</p>
                        <small>rafaelbardsouza@gmail.com</small>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5554991060330">
                    <div className='link'>
                        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="Whatsapp"/>
                        <p>Phone</p>
                        <small>(54) 99106-0330</small>
                    </div>
                </a>
                <a href="linkedin">
                    <div className='link'>
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/>
                        <p>LinkedIn</p>
                        <small>@nlembro</small>
                    </div>

                </a>
                <a href="https://github.com/rafaelbardsouza">
                    <div className='link'>
                        <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github"/>
                        <p>GitHub</p>
                        <small>rafaelbardsouza</small>
                    </div>
                </a>
            </div>
        </section>
    )
}