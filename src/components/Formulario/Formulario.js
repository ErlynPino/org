import "./Formulario.css"
import CampoText from "../CampoText"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoText titulo="Nombre" placeholder="Ingresar nombre" />
            <CampoText titulo="Puesto" placeholder="Ingresar Puesto"/>
            <CampoText titulo="Foto" placeholder="Ingresar enlace de Foto"/>
        </form>
    </section>
}

export default Formulario