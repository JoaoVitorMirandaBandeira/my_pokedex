import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState({})
    
    useEffect(() => {
        const getDataPokemons = async () => {
            const pokemon = await getSpecidicPokemon(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}/`)
            setPokemon(pokemon)

        };
       getDataPokemons();
    },[props.idPokemon])
    return(
        <>
        <div>
            {JSON.stringify(pokemon)}
        </div>
        </>
    )
}

export  { Pokemon }