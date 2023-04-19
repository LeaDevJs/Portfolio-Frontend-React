import "./styles.css"
function Experience(){
    return(
        <>
            <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
                <div className="col izquierda">
                    <h3>Educación</h3>
                    <div className="item izq">
                        <h4>Licenciatura en Sistemas</h4>
                        <span className="casa">Universidad Nacional de General Sarmiento (UNGS)</span>
                        <span className="fecha">2020 - Actualidad</span>
                        <p>Cursando segundo año (9 materias aprobadas).</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                    <div className="item izq">
                        <h4>#SéProgramar</h4>
                        <span className="casa">Argentina Programa</span>
                        <span className="fecha">2022</span>
                        <p>Completo.</p>
                        <div className="conectori">
                            <div className="circuloi"></div>
                        </div>
                    </div>
                </div>

                <div className="col derecha">
                    <h3>Experiencia de trabajo</h3>
                    <div className="item der">
                        <h4>Aprendíz de serigrafía.</h4>
                        <span className="casa">The INK Point SA.</span>
                        <span className="fecha">Febrero 2022 - Actualidad</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Operario de Logística</h4>
                        <span className="casa">Servicios Digitales de Excelencia.</span>
                        <span className="fecha">Junio 2021 – Febrero 2022</span>
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