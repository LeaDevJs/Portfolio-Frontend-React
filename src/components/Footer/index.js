import "./styles.css"
function Footer(){
    return(
        <>
            <footer>
        <a href="#inicio" className="arriba">
            <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
            <a href="https://twitter.com/LeadevJs"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://github.com/leadevjs"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/leandro-zapata-0977a21a2/"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
    </footer>
        </>
    );
}
export default Footer;