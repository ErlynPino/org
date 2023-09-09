import "./Campotext.css"

const CampoText = (props) => {
    console.log("Datos :", props);
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-text">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required}/>
    </div>
}


export default CampoText;   