import "./styles.css"
function Experience(){
    return(
        <>
            <section id="curriculum" className="curriculumEn">
        <div className="contenido-seccion">
            <h2>Resume</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Education</h3>
                    <div className="item izq">
                        <h4>Degree in systems</h4>
                        <span className="casa">Universidad Nacional de General Sarmiento (UNGS)</span>
                        <span className="fecha">2020 - Actually</span>
                        <p>Actually attending second year (9 subjects approved).</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>#SéProgramar</h4>
                        <span className="casa">Argentina Programa</span>
                        <span className="fecha">2022</span>
                        <p>Completed</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Work experience</h3>
                    <div className="item der">
                        <h4>Trainee of serigraphy</h4>
                        <span className="casa">The INK Point SA.</span>
                        <span className="fecha">February 2022 - Actually</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Logistics operator</h4>
                        <span className="casa">Servicios Digitales de Excelencia.</span>
                        <span className="fecha">June 2021 – February 2022</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    );
}
export default Experience;