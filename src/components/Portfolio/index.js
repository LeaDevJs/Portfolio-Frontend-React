import "./styles.css"
import Img1 from "./img/p1.jpg"
import Img2 from "./img/p2.jpg"
import Img3 from "./img/p3.jpg"
function Portfolio(){
    function handleClickImg1(){
        window.open(Img1);
    }
    function handleClickImg2(){
        window.open(Img2)
    }
    function handleClickImg3(){
        window.open(Img3)
    }
    return(
        <>
        <section id="portfolio" className="portfolio">

        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                <a href="https://github.com/leansoda99/Attack-on-Titan">
                    <div className="proyecto">
                        <img src={Img1} alt=""/>
                        <div className="overlay">
                            <h3>Attack on Titan</h3>
                            <p>Videojuego desarrollado con Java</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/leansoda99/JuegoBarbarianna">
                    <div className="proyecto">
                        <img src={Img2} alt=""/>
                        <div className="overlay">
                            <h3>Barbarianna</h3>
                            <p>Videojuego desarrollado con Java</p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/leansoda99/PortfolioFrontendAngular">
                    <div className="proyecto">
                        <img src={Img3} alt=""/>
                        <div className="overlay">
                            <h3>Portfolio Frontend</h3>
                            <p>Portfolio frontend desarrollado con Angular</p>
                        </div>
                    </div>
                </a>
                <button onClick={handleClickImg1}>Vista previa
                    <span className="overlay"></span>
                </button>

                <button onClick={handleClickImg2}>Vista previa
                    <span className="overlay"></span>
                </button>
                <button onClick={handleClickImg3}>Vista previa
                    <span className="overlay"></span>
                </button>
            </div>
        </div>
    </section>
    
        </>
    );
}
export default Portfolio;