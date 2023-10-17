import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { PokemonList } from "../components/PokemonList"
/*import { getPokemonsPage } from "../services/getPokemonsPage"
import { getSpecidicPokemon } from "../services/getSpecificPokemon"*/
import { getAllPokemons } from "../services/getAllPokemons"

const Home = (props) => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const getDataPokemons = async () => {
            const response = await getAllPokemons();
            setPokemons(response)
        };
        getDataPokemons();
    }, []);
    return(
        <>
            <Form/>
            <PokemonList pokemons={pokemons} viewPokemon={props.viewPokemon}/>
        </>
    )
}

export { Home }