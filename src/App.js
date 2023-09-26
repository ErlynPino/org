import { useState } from 'react';
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
      equipo: "Front End",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Erlyn Pino",
      puesto: "Líder de Desarrollo"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de Software e instructora"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/ErlynPino.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Jose Gonzales",
      puesto: "Dev FullStack"
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
  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador");
  }


  // Lista de Equipos json
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9",
    }, 
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
]

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
      />)
      }
    <Footer />
    
    </div>
  );

}

export default App;
