import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { PokemonList } from "../components/PokemonList"
import { getPokemonsPage } from "../services/getPokemonsPage"
import { getSpecidicPokemon } from "../services/getSpecificPokemon"

const Home = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const getDataPokemons = async () => {
            const response = await getPokemonsPage(30, offset);
            const updatedPokemons = [];
            for (const e of response) {
                const pokemon = await getSpecidicPokemon(e.url)
                updatedPokemons.push({
                    id: pokemon.id,
                    name: e.name,
                    img: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                })
            };
            setPokemons(updatedPokemons)

        };

        getDataPokemons();
    }, [offset]);
    return(
        <>
            <Form/>
            <PokemonList offset={offset} pokemons={pokemons} setOffset={setOffset} viewPokemon={props.viewPokemon}/>
        </>
    )
}

export { Home }