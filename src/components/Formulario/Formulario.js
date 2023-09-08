import "./Formulario.css"
import CampoText from "../CampoText"

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoText />
        </form>
    </section>
}

export default Formulario