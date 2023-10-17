import { useState } from "react"

const Form = () => {
    const [pokemons,setPokemons] = useState([])

    const searchPokemons = () => {
        
    }
    return(
        <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <button onClick={searchPokemons}>Buscar</button>
        </>
    )
}

export { Form }