import "./Campotext.css"

const CampoText = (props) => {
    console.log("Datos :", props);
    return <div className="campo-text">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder}/>
        
    </div>
}


export default CampoText;   