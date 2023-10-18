import { useState } from "react"
import { getAllPokemons } from "../services/getAllPokemons"
import { filterPokemons } from "../utils/filterPokemons"

const Form = (props) => {
    const [textInput,setTextInput] = useState('')
    const handleInputChange = (event) => {
        const value = event.target.value
        setTextInput(value)
    }
    const searchPokemons = async () => {
        const resulte = await getAllPokemons()
        const filteredPokemons = filterPokemons(resulte,textInput)
        props.setFilteredPokemons(filteredPokemons)
    }
    return(
        <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={textInput} onChange={handleInputChange}/>
            <button onClick={searchPokemons}>Buscar</button>
        </>
    )
}

export { Form }