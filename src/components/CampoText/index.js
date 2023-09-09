import "./Campotext.css"

const CampoText = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-text">
        <label>{props.titulo}</label>
        <input 
            onChange={manejarCambio}
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
        />
    </div>
}


export default CampoText;   