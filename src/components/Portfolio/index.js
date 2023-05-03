import "./styles.css"
import Img1 from "./img/p1.jpg"
import Img2 from "./img/p2.jpg"
import Img3 from "./img/p3.jpg"
import Img4 from "./img/p4.jpg"
import Img5 from "./img/p5.jpg"
import Img6 from "./img/p6.jpg"
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
    function handleClickImg4(){
        window.open(Img4)
    }
    function handleClickImg5(){
        window.open("https://leadevjs.github.io/QRCodeComponent/")
    }
    function handleClickImg6(){
        window.open("https://leadevjs.github.io/results-summary-component/")
    }
    function handleCode1(){
        window.open("https://github.com/leaDevJs/Attack-on-Titan")
    }
    function handleCode2(){
        window.open("https://github.com/leaDevJs/JuegoBarbarianna")
    }
    function handleCode3(){
        window.open("https://github.com/leaDevJs/PortfolioFrontendAngular")
    }
    function handleCode4(){
        window.open("https://github.com/LeaDevJs/rutas-dinamicas-ejercicio")
    }
    function handleCode5(){
        window.open("https://github.com/LeaDevJs/QRcodecomponent")
    }
    function handleCode6(){
        window.open("https://github.com/LeaDevJs/results-summary-component")
    }
 
    return(
        <>
        <section id="portfolio" className="portfolio">

        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                <div>
                    <div className="proyecto">
                            <img src={Img1} alt=""/>
                        <div className="overlay" onClick={handleClickImg1}>
                            <h3>Attack on Titan</h3>
                            <p>Videojuego desarrollado con Java</p>
                        </div>
                    </div>
                    <button onClick={handleCode1}>Código<i className="fa-brands fa-github"></i>
                        <span className="overlay"></span>
                    </button>
                </div>
                <div>
                    <div className="proyecto">
                            <img src={Img2} alt=""/>
                        <div className="overlay" onClick={handleClickImg2}>
                            <h3>Barbarianna</h3>
                            <p>Videojuego desarrollado con Java</p>
                        </div>
                    </div>
                        <button onClick={handleCode2}>Código<i className="fa-brands fa-github"></i>
                            <span className="overlay"></span>
                        </button>
                </div>
                
                <div>
                    <div className="proyecto">
                            <img src={Img3} alt=""/>
                        <div className="overlay" onClick={handleClickImg3}>
                            <h3>Portfolio Frontend</h3>
                            <p>Portfolio frontend desarrollado con Angular</p>
                        </div>
                    </div>
                        <button onClick={handleCode3}>
                            Código <i className="fa-brands fa-github"></i>
                            <span className="overlay"></span>
                        </button>
                </div>
                <div>
                    <div className="proyecto">
                            <img src={Img4} alt=""/>
                        <div className="overlay" onClick={handleClickImg4}>
                            <h3>Rutas Dinámicas</h3>
                            <p>Ejercicio rutas dinámicas React</p>
                        </div>
                    </div>
                        <button onClick={handleCode4}>Código<i className="fa-brands fa-github"></i>
                            <span className="overlay"></span>
                        </button>
                </div>
                <div>
                    <div className="proyecto">
                            <img src={Img5} alt=""/>
                        <div className="overlay" onClick={handleClickImg5}>
                            <h3>QR Component</h3>
                            <p>QR Component para FrontendMentor</p>
                        </div>
                    </div>
                        <button onClick={handleCode5}>Código<i className="fa-brands fa-github"></i>
                            <span className="overlay"></span>
                        </button>
                </div>
                <div>
                    <div className="proyecto">
                            <img src={Img6} alt=""/>
                        <div className="overlay" onClick={handleClickImg6}>
                            <h3>Results Summary Component</h3>
                            <p>Results Summary Component para FrontendMentor</p>
                        </div>
                    </div>
                        <button onClick={handleCode6}>Código<i className="fa-brands fa-github"></i>
                            <span className="overlay"></span>
                        </button>
                </div>
                  
            </div>
        </div>
    </section>
    
        </>
    );
}
export default Portfolio;

