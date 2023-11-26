import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Img from "../Header/bandEng.png"
function Header() {
    let [menuVisible, setMenuVisible] = useState(false);

  //Función que oculta o muestra el menu
  function mostrarOcultarMenu() {
    if (menuVisible) {
      document.getElementById("nav").classList = "";
      setMenuVisible(false);
    } else {
      document.getElementById("nav").classList = "responsive";
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
            <div className="contenedor-header">
                <header>
                    <div className="logo">
                        <Link to="/es">LeaDevJs</Link>
                       <Link to="/en"> <img className="idioma" src={Img} alt="bandera inglesa"/> </Link>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
                            <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                            <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                            <li><a href="#curriculum" onClick={seleccionar}>CURRICULUM</a></li>
                            <li><a href="#portfolio" onClick={seleccionar}>PORTFOLIO</a></li>
                        </ul>
                    </nav>
                    <div className="nav-responsive" onClick={mostrarOcultarMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
        </>

    )
}
export default Header;