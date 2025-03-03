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
                        <h4>Commercial Operator</h4>
                        <span className="casa">Conurbano SA</span>
                        <h5>December 2024 - Actually</h5>
                        <span className="fecha">- Product selection and preparation.</span>
                        <span className="fecha">- Use of the WMS system for product scanning and inventory control.
                        products and inventory control.</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Trainee of serigraphy</h4>
                        <span className="casa">The INK Point SA.</span>
                        <h5>February 2022 - March 2024</h5>
                        <span className="fecha">- Creation and preparation of schablones with different layouts for
                        screen printing.</span>
                        <span className="fecha">- Screen printing.</span>
                        <span className="fecha">- Maintenance of tools.</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Logistics operator</h4>
                        <span className="casa">Servicios Digitales de Excelencia.</span>
                        <h5>June 2021 – February 2022</h5>
                        <span className="fecha">- Technical support to customers via video call and TeamViewer.</span>
                        <span className="fecha">- Technical troubleshooting.</span>
                        <span className="fecha">- Remote installation and configuration of products.</span>
                        <span className="fecha">- Effective communication.</span>
                        <span className="fecha">- Logistics tasks: preparation of products for shipment by mail.
                        by mail.</span>
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