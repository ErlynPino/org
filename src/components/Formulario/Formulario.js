import "./Formulario.css"
import { useState } from "react"
import CampoText from "../CampoText"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")

    const manejarSubmit = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosaEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosaEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoText 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <CampoText 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required 
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <CampoText 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                required 
                valor={foto}
                actualizarValor={setFoto}
                /> 
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={setEquipo}
            />
            <Boton> 
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario