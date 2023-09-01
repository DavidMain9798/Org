import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import {v4 as uuid} from "uuid"

const Formulario = (props) => {

    // Estados para campo texto
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        const datosAEnviar = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo
            
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre" 
                placeholder="Ingrese nombre" 
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <Campo
                titulo="Puesto" 
                placeholder="Ingrese puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <Campo
                titulo="Foto" 
                placeholder="Ingrese link de foto" 
                required
                valor={foto}
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingrese titulo" 
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
                />
            <Campo
                titulo="Color" 
                placeholder="Ingrese color en HEX" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario