import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './components/Header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Erlyn Pino",
      puesto: "Líder de Desarrollo"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de Software e instructora"
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Jose Gonzales",
      puesto: "Dev FullStack"
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    }, 
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar Colaboradores
  const registrarColaborador = (colaborador) => {
    console.log("Registrando Colaborador", colaborador);
    // Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaboradores
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id);
    const equiposActualizados = equipos.map((equipo)=> {
      if(equipo.id === id) {
        equipo.colorPrimario = color;
    }
      return equipo;
  })
    actualizarEquipos(equiposActualizados);
  }


  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />
        }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      { 
      equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        deleteColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
      />)
      }
    <Footer />
    
    </div>
  );

}

export default App;
