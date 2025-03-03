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
                        <h4>Operario de comercio</h4>
                        <span className="casa">Conurbano SA</span>
                        <h5>Diciembre 2024 - Actualidad</h5>
                        <span className="fecha">- Selección y preparación de productos.</span>
                        <span className="fecha">- Utilización del sistema WMS para realizar el escaneo de los
                        productos y control de inventario.</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Aprendíz de serigrafía.</h4>
                        <span className="casa">The INK Point SA.</span>
                        <h5 >Febrero 2022 - Marzo 2024</h5>
                        <span className="fecha">- Creación y preparación de schablones con distintos diseños para segirgrafía.</span>
                        <span className="fecha">- Estampado serigráfico.</span>
                        <span className="fecha">- Mantenimiento de herramientas.</span>
                        <div className="conectord">
                            <div className="circulod"></div>
                        </div>
                    </div>
                    <div className="item der">
                        <h4>Operario de Logística</h4>
                        <span className="casa">Servicios Digitales de Excelencia.</span>
                        <h5 >Junio 2021 – Febrero 2022</h5>
                        <span className="fecha">- Soporte técnico a clientes mediante videollamada y TeamViewer.</span>
                        <span className="fecha">- Resolución de problemas técnicos.</span>
                        <span className="fecha">- Instalación y configuración remota de los productos.</span>
                        <span className="fecha">- Comunicación efectiva.</span>
                        <span className="fecha">- Tareas de logística: preparación de los productos para su despacho
                        por correo.</span>
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