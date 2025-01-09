import "./styles.css";
import { useState } from 'react';
import Img from "../HeaderEn/bandEsp.jpg";
import { Link } from "react-router-dom";
function Header() {
    let [menuVisible, setMenuVisible] = useState(false);

  //Función que oculta o muestra el menu
  function mostrarOcultarMenu() {
    if (menuVisible) {
      document.getElementById("nav").classList = "";
      setMenuVisible(false);
    } else {
      document.getElementById("nav").classList = "responsiveEn";
      setMenuVisible(true);
    }
  }
  function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    setMenuVisible(false);
}
    return (
        <>
            <div className="contenedor-headerEn">
                <header>
                    <div className="logo">
                        <Link to="/en">LeaDevJs</Link>
                        <Link to="/es"> <img className="idiomaEn" src={Img} alt="bandera española"/> </Link>
                    </div>
                    
                    <nav id="nav">
                        <ul>
                            <li><a href="#inicio" onClick={seleccionar}>HOME</a></li>
                            <li><a href="#sobremi" onClick={seleccionar}>ABOUT ME</a></li>
                            <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                            <li><a href="#curriculum" onClick={seleccionar}>RESUME</a></li>
                            <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
                        </ul>
                    </nav>
                    <div className="nav-responsiveEn" onClick={mostrarOcultarMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
        </>

    )
}
export default Header;