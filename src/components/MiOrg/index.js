import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true);   

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemnto", mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/public/logo192.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;