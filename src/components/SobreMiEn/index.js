import "./styles.css"
import CV from "./pdf/cvLeanZJ2023.pdf";
function SobreMi() {
    return(
        <>
            <section id="sobremi" className="sobremiEn">
        <div className="contenido-seccion">
            <h2>About me</h2>
            <p><span>Hello, i am Leandro.</span> I am an IT student passionate about web development, with a great desire to learn and grow in this constantly evolving industry.
                                                As a web development trainee, my goal is to apply my skills and knowledge to contribute to the development of innovative and high quality web projects.</p>

            <div className="fila">
                <div className="col">
                    <h3>Personal information</h3>
                    <ul>
                        <li>
                            <strong>birthday</strong>
                            13-03-1999
                        </li>
                        <li>
                            <strong>Phone number</strong>
                            (+54) 1155115929
                        </li>
                        <li>
                            <strong>Email</strong>
                            zapataleandronahuel@gmail.com
                        </li>
                        <li>
                            <strong>Location</strong>
                            Buenos Aires, Argentina.
                        </li>
                        <li>
                            <strong>Position</strong>
                            <span>Web developer</span>
                        </li>
                    </ul>
                </div>

                
                <div className="col">
                    <h3>Likes</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>GAMES</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSIC</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-plane"></i>
                            <span>TRAVEL</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-robot"></i>
                            <span>IA</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>SPORTS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-car"></i>
                            <span>CARS</span>
                        </div>
                        <div className="interes">
                            <i className="fas fa-futbol"></i>
                            <span>SOCCER</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <a href={CV} download="LeandroZapataCv2023" style={{textDecoration: "none"}}>
                <button>
                    Download resume <i className="fa-solid fa-download"></i>
                    <span className="overlay"></span>
                </button>
            </a>
        </div>
    </section>

        </>
    );
}
export default SobreMi;