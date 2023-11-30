import React, { useRef } from 'react';
import Project from './project';
import "./styles.css"
import Img1 from "./img/p1.jpg"
import Img2 from "./img/p2.jpg"
import Img3 from "./img/p3.jpg"
import Img4 from "./img/p4.jpg"
import Img5 from "./img/p5.jpg"
import Img6 from "./img/p6.jpg"
import Img7 from "./img/p7.jpg"
import Img8 from "./img/p8.jpg"
import Img9 from "./img/p9.jpg"
import Img10 from "./img/p10.jpg"
import Img11 from "./img/p11.jpg" 
import Img12 from "./img/p12.jpg"


function Portfolio(){
  
    const verMasDisplayRef = useRef(null);
    const verMenosButtonRef = useRef(null);
    const verMasButtonRef = useRef(null);
    function handleVerMas() {
        verMasDisplayRef.current.style.display = "flex";
        verMasButtonRef.current.style.display = "none";
        verMenosButtonRef.current.style.display = "flex";
      }
      function handleVerMenos() {
        verMasDisplayRef.current.style.display = "none";
        verMasButtonRef.current.style.display = "flex";
        verMenosButtonRef.current.style.display = "none";
      }
    return(
        <>
        <section id="portfolio" className="portfolio">

        <div className="contenido-seccion">
            <h2>PORTFOLIO</h2>
            <div className="galeria">
                <Project img={Img10} click="https://leadevjs.github.io/ToDoList/"
                code="https://github.com/LeaDevJs/ToDoList" title="ToDoList" 
                description="Aplicacion lista de tareas"
                />

                <Project img={Img12} click="https://farmacias-malvinas.vercel.app/"
                code="https://github.com/LeaDevJs/farmacias-malvinas" title="Farmacias de turno" 
                description="App web que informa cuales farmacias estan de turno en Malvinas Argentinas"
                />
                <Project img={Img9} click="https://leadevjs.github.io/age-calculator-app/"
                code="https://github.com/LeaDevJs/age-calculator-app" title="Age calculator app" 
                description="Aplicacion calculadora de edad"
                />
                <Project img={Img11} click={Img11}
                code="https://github.com/LeaDevJs/ToDoListLaravel" title="To Do List Laravel" 
                description="To do list realizando un CRUD con Laravel"
                />
                <Project img={Img2} click={Img2}
                code="https://github.com/leaDevJs/JuegoBarbarianna" title="Barbarianna" 
                description="Videojuego desarrollado con Java"
                />
                <Project img={Img3} click={Img3}
                code="https://github.com/leaDevJs/PortfolioFrontendAngular" title="Portfolio Frontend" 
                description="Portfolio frontend desarrollado con Angular"
                />
                <Project img={Img4} click={Img4}
                code="https://github.com/LeaDevJs/rutas-dinamicas-ejercicio" title="Rutas Dinámicas" 
                description="Ejercicio rutas dinámicas React"
                />
                
                  
            </div>
        </div>
       
        <div className="ver-mas" ref={verMasButtonRef}>
          <button onClick={handleVerMas}>Ver mas
          <span className="overlay"></span>
          </button>
        </div>
        <div className="contenido-seccion ver-mas-display" ref={verMasDisplayRef}>
        <div className="galeria">

                <Project img={Img6} click="https://leadevjs.github.io/results-summary-component"
                code="https://github.com/leaDevJs/results-summary-component" title="Results Summary Component" 
                description="Results Summary Component para FrontendMentor"
                />
        
                <Project img={Img1} click={Img1}
                code="https://github.com/leaDevJs/Attack-on-Titan" title="Attack on Titan" 
                description="Videojuego desarrollado con Java"
                />
                <Project img={Img5} click="https://leadevjs.github.io/QRCodeComponent/"
                code="https://github.com/LeaDevJs/QRcodecomponent" title="QR Component" 
                description="QR Component para FrontendMentor"
                />
                <Project img={Img7} click="https://leadevjs.github.io/product-preview-card-component/"
                code="https://github.com/LeaDevJs/interactive-rating-component" title="Product preview card" 
                description="Product preview card para Frontend Mentor"
                />
                <Project img={Img8} click="https://leadevjs.github.io/interactive-rating-component/"
                code="https://github.com/LeaDevJs/interactive-rating-component" title="Interactive rating component" 
                description="Interactive rating component para Frontend Mentor"
                />
                </div>
                </div>
                <div className="ver-menos" ref={verMenosButtonRef}>
                    <button onClick={handleVerMenos}>Ver menos
                    <span className="overlay"></span>
                    </button>
                </div>
                
    </section>
    
        </>
    );
}
export default Portfolio;
