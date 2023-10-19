import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState({})
    
    useEffect(() => {
        const getDataPokemons = async () => {
            const pokemon = await getSpecidicPokemon(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}/`)
            console.log(pokemon);
            setPokemon(pokemon)

        };
       getDataPokemons();
    },[props.idPokemon])
    return (
        <>
          <div>
            <div>
              <div>
                <p>"nome":</p>
                <p>{pokemon?.name}</p>
              </div>
              <div>
                <p>"habilidades":</p>
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
            </div>
          </div>
        </>
      );      
}

export  { Pokemon }