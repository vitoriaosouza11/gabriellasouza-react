import './Section.css'

function Section() {
    return (
        <>
            <section>
                <div className="footer-container">
                    <div className="footer-column">
                        <h4 style={{marginTop: '30px', color: 'white'}}>NAVEGUE PELO SITE</h4>
                        <ul>
                            <li><a href="index.html">Início</a></li>
                            <li><a href="facial.html">Procedimentos</a></li>
                            <li><a href="sobre.html">Sobre</a></li>
                            <li><a href="contato.html">Contato</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-column">
                    <h4 style={{marginTop: '30px', color: 'white'}}>ENDEREÇO</h4>
                    <p style={{color: '#bb8a50'}}>
                        Rua do Algodão, 1267 <br />
                        Conjuntos 601, 602 e 603 <br />
                        Santa Bárbara d'Oeste – SP
                    </p>
                    <h4 style={{marginTop: '30px' , color: 'white'}}>HORÁRIO DE FUNCIONAMENTO</h4>
                    <p>
                        Segunda a sexta das 8h às 21h <br />
                        Sábados das 8h às 17h <br />
                        Domingos sem atendimento
                    </p>
                </div>
                <div className="footer-column">
                    <h4 style={{marginTop: '30px' , color: 'white'}}>ENTRE EM CONTATO</h4>
                    <p>📱 (19) 99334-4430</p>
                    <p>✉️ gabriellasouza0501@gmail.com</p>
                </div>

                <h4 style={{marginTop: '30px' , color: 'white'}}>SIGA NOSSAS REDES!</h4>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/gabriellasouza.oficial?igsh=bnpjcTl2dmN6eWtv&utm_source=qr"><img src="https://www.diazer.com.br/wp-content/uploads/2020/05/icone-instagram-white.png"
                        alt="Instagram"/></a>
                    <a href="https://www.tiktok.com/@gabriellasouzaoficial?_t=ZM-8yY0dSDHNkm&_r=1"><img src="https://www.diazer.com.br/wp-content/uploads/2025/02/icone-tiktok-white.png"
                        alt="TikTok"/></a>
                </div>

                <div className="footer-logo">
                    <img src="FOTOS/logo.jpg" style={{width: '100px', height: '100px', borderRadius: '50%'}} alt="Logo"/>
                    <p style={{color: '#bb8a50', marginTop: '10px'}}>ESTÉTICA AVANÇADA E INTEGRATIVA</p>
                </div>

            </section>

        </>
    )
}

export default Section;