import "./styles.css"
import CV from "./pdf/LeandroZapataCv2023.pdf"
function SobreMi() {
    return(
        <>
            <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy Leandro.</span> Soy un estudiante de sistemas apasionado por el desarrollo web, con un gran deseo de aprender y crecer en esta industria en constante evolución.
                                                Como trainee de desarrollador web, mi objetivo es aplicar mis habilidades y conocimientos para contribuir al desarrollo de proyectos web innovadores y de alta calidad.
                                                Soy una persona curiosa y proactiva, siempre en busca de nuevas oportunidades para aprender y mejorar mis habilidades. Me considero un aprendiz rápido y me adapto fácilmente a los cambios y desafíos que se presentan.
                                                Además, soy un buen compañero de trabajo, capaz de colaborar en equipo y compartir mis conocimientos para lograr objetivos comunes.
                                                Estoy interesado en adquirir experiencia en el desarrollo de aplicaciones web utilizando tecnologías como HTML, CSS, JavaScript, entre otras.
                                                Espero poder contribuir con mi creatividad, habilidades y entusiasmo para ayudar a construir proyectos web innovadores y exitosos.</p>

            <div className="fila">
                <div className="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Cumpleaños</strong>
                            13-03-1999
                        </li>
                        <li>
                            <strong>Teléfono</strong>
                            (+54) 1155115929
                        </li>
                        <li>
                            <strong>Email</strong>
                            zapataleandronahuel@gmail.com
                        </li>
                        <li>
                            <strong>Dirección</strong>
                            Darragueira 3265 (Buenos Aires)
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>Estudiante de Sistemas</span>
                        </li>
                    </ul>
                </div>

                
                <div className="col">
                    <h3>Intereses</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-plane"></i>
                            <span>VIAJAR</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-robot"></i>
                            <span>IA</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>DEPORTE</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-car"></i>
                            <span>AUTOS</span>
                        </div>
                        <div className="interes">
                            <i className="fas fa-futbol"></i>
                            <span>Futbol</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <a href={CV} download="LeandroZapataCv2023" style={{textDecoration: "none"}}>
                <button>
                    Descargar CV <i className="fa-solid fa-download"></i>
                    <span className="overlay"></span>
                </button>
            </a>
        </div>
    </section>

        </>
    );
}
export default SobreMi;