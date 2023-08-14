import "./styles.css"
import Image from "./img/profilePic.png"
function Principal(){
    return(
    <>
        <section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src={Image} alt="profilePicture"/>
            </div>
            <h1>Leandro Zapata</h1>
            <h2>Estudiante de Sistemas</h2>
            <div className="redes">
                <a href="https://twitter.com/LeadevJs"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/leadevjs"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/leandro-zapata-0977a21a2/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </section>
    </>
    );
}
export default Principal;