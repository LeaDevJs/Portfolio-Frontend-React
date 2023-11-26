import "./styles.css"
import CV from "./pdf/cvLeanZJ2023.pdf";
function SobreMi() {
    return(
        <>
            <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy Leandro.</span> Soy un estudiante de sistemas apasionado por el desarrollo web, con un gran deseo de aprender y crecer en esta industria en constante evolución.
                                                Como trainee en desarrollo web, mi objetivo es aplicar mis habilidades y conocimientos para contribuir al desarrollo de proyectos web innovadores y de alta calidad.</p>

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
                            <strong>Ubicación</strong>
                            Buenos Aires, Argentina.
                        </li>
                        <li>
                            <strong>Cargo</strong>
                            <span>Desarrollador web</span>
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
                            <span>FUTBOL</span>
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