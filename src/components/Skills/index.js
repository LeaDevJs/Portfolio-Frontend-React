import "./styles.css"
function Skills(){

    //Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("ingles");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
} 
    return(
        <>
            <section className="skills" id="skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>Javascript</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>HTML & CSS</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>89%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>React</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Laravel</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Java</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Comunicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Trabajo en Equipo</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creatividad</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedicación</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Inglés</span>
                        <div className="barra-skill">
                            <div className="progreso">
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col">
                    <h3>Extras</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fab fa-servicestack"></i>
                            <span>SQL</span>
                        </div>
                        <div className="interes">
                            <i className="fab fa-creative-commons-nd"></i>
                            <span>MONGODB</span>
                        </div>
                        <div className="interes">
                            <i className="fab fa-python"></i>
                            <span>PYTHON</span>
                        </div>
                        <div className="interes">
                            <i className="fab fa-node-js"></i>
                            <span>EXPRESS</span>
                        </div>
                        <div className="interes">
                            <i className="fab fa-angular"></i>
                            <span>ANGULAR</span>
                        </div>
                        <div className="interes">
                            <i className="fab fa-github"></i>
                            <span>GITHUB</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
        </div>
    </section>
        </>
    );
}
export default Skills;