import "./Formulario.css"
import CampoText from "../CampoText"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoText titulo="Nombre" placeholder="Ingresar nombre" />
            <CampoText titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoText titulo="Foto" placeholder="Ingresar enlace de Foto"/>
            <ListaOpciones />
            <Boton> 
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario