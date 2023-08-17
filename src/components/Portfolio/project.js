import React from 'react';
function Project(props) {
    function handleClickImg(){
        window.open(`${props.click}`)
    }
    function handleCode(){
        window.open(`${props.code}`)
    }
  return (
    <div>
        <div className="proyecto">
                <img src={props.img} alt=""/>
                {console.log(props.img)}
            <div className="overlay" onClick={handleClickImg}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <button onClick={handleCode}>Código<i className="fa-brands fa-github"></i>
            <span className="overlay"></span>
        </button>
    </div>
  );
}

export default Project;
