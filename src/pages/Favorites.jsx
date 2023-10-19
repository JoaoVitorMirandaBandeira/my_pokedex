import { useEffect, useState } from "react"
import { PokemonList } from "../components/PokemonList"

export const Favorites = (props) => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const getPokemons = async () => {
            const favoritesJSON = localStorage.getItem('favorites');
            const favorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];
            const updatePokemons = []
            for (const e of favorites) {
                updatePokemons.push({
                    url: `https://pokeapi.co/api/v2/pokemon/${e}`
                })  
            }
            setPokemons(updatePokemons)
        }
        getPokemons()
    }, [])
    return (
        <PokemonList pokemons={pokemons} viewPokemon={props.viewPokemon} />
    )
}