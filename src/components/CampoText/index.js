import "./Campotext.css"

const CampoText = (datosExternos) => {
    console.log("Datos :", datosExternos);
    return <div className="campo-text">
        <label>Nombre</label>
        <input placeholder="Ingresar Nombre" type="text" />
        
    </div>
}


export default CampoText;   