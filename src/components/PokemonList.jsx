import { useEffect, useState } from "react"
import { getPokemons } from "../services/getPokemons"
import { getSpecidicPokemon } from "../services/getSpecificPokemon"

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const getDataPokemons = async () => {
            const response = await getPokemons(30, offset);
            const updatedPokemons = [];
            for (const e of response) {
                const pokemon = await getSpecidicPokemon(e.url)
                console.log(pokemon)
                updatedPokemons.push({
                    name: e.name,
                    img: pokemon.sprites.front_default
                })
            };
            setPokemons(updatedPokemons)

        };

        getDataPokemons();
    }, [offset]);


    return (
        <>
            {
                pokemons.map((e, i) => {
                    return (
                        <li key={i}>
                            {e.name}
                            {e.img}
                            <img src={e.img} alt={e.name} />
                        </li>
                    )
                })
            }
            {(offset > 0) && <button onClick={() => setOffset(offset - 30)}>{offset / 30}</button>}
            <div>{(offset / 30) + 1}</div>
            <button onClick={() => setOffset(offset + 30)}>{(offset / 30) + 2}</button>
        </>
    )
}

export { PokemonList }