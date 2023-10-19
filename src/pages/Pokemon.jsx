import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon";
import { PokemonDetails } from "../components/PokemonDetails";

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
                    <div>
                        <p>Habilidades:</p>
                        <ul>
                            {pokemon?.abilities && (
                                pokemon.abilities.map((e) => (
                                    <li key={e?.ability.name}>
                                        {e?.ability.name}
                                    </li>
                                ))
                            )
                            }
                        </ul>
                    </div>
                    <div>
                        <p>Tipo:</p>
                        <ul>
                            {pokemon?.types && (
                                pokemon.types.map((e) => (
                                    <li key={e?.type.name}>
                                        {e?.type.name}
                                    </li>
                                ))
                            )
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                </div>
                <PokemonDetails stats={pokemon?.stats}/>
            </div>
        </>
    );
}

export { Pokemon }