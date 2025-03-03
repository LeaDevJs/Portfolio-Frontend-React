import "./styles.css"
import CV from "./pdf/CV LEANDRO ZAPATA.pdf";
function SobreMi() {
    return(
        <>
            <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola! Soy Leandro,</span> estudiante de
Sistemas con una gran pasión por el
desarrollo web.
Mi motivación es aprender
continuamente y desarrollarme en
esta industria en constante evolución.
Como trainee en desarrollo web,
busco aplicar mis habilidades,
conocimientos técnicos y mi
entusiasmo para contribuir al
desarrollo de proyectos innovadores y
de alta calidad.</p>

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
            <a href={CV} download="CV LEANDRO ZAPATA" style={{textDecoration: "none"}}>
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