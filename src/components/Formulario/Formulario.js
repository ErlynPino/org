import "./Formulario.css"
import CampoText from "../CampoText"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoText titulo="Nombre" placeholder="Ingresar nombre" />
            <CampoText titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoText titulo="Foto" placeholder="Ingresar enlace de Foto"/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario