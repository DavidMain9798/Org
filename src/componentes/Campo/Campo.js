import "./Campo.css"


const Campo = (props) => {

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }
    //destructuracion 
    const {type="text"} = props
    console.log(type)
    const placeHolderModificado = `${props.placeholder}...`
    
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
        />

    </div>
}

export default Campo