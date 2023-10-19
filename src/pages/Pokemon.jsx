import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon";
import { PokemonStatus } from "../components/PokemonStatus";
import { PokemonAbilities } from "../components/PokemonAbilities";
import { PokemonTypes } from "../components/PokemonTypes";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const getDataPokemons = async () => {
            const pokemon = await getSpecidicPokemon(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}/`)
            console.log(pokemon);
            setPokemon(pokemon)

        };
        getDataPokemons();
    }, [props.idPokemon])
    return (
        <>
            <div>
                <div>
                    <div>
                        <p>Nome:</p>
                        <p>{pokemon?.name}</p>
                    </div>
                <PokemonAbilities abilities={pokemon?.abilities} />
                <PokemonTypes types={pokemon?.types} />
                </div>
                <div>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                </div>
                <PokemonStatus stats={pokemon?.stats} />
            </div>
        </>
    );
}

export { Pokemon }