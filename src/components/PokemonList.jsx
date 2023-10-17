import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon"

const PokemonList = (props) => {
    const [dataPokemons,setDataPokemons] = useState([])
    const [offset, setOffset] = useState({
        current:0,
        max:0
    })

    const calculateMaxOffset = (length) => {
        const max = parseInt((length/30)) + 1
        return max
    }

    useEffect(()=> {
        const getDatapokemons = async () => {
            let updatedPokemons = []
            const offsetMax = calculateMaxOffset(props.pokemons.length)
            setOffset({current:0,max:offsetMax})
            const firstThirty = props.pokemons.slice(0,30)
            for (const e of firstThirty) {
                const pokemon = await getSpecidicPokemon(e.url)
                updatedPokemons.push({
                    id: pokemon.id,
                    name: e.name,
                    img: pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                })
            };
            setDataPokemons(updatedPokemons)
        }
        getDatapokemons()
    },[props.pokemons])


    
    return (
        <>
            {
                dataPokemons.map((e) => {
                    return (
                        <li key={e.id} id={e.id}>
                            <div onClick={() => props.viewPokemon(e.id)}>{e.name}</div>
                            <img src={e.img} alt={e.name} />
                        </li>
                    )
                })
            }
            {(offset.current > 0) && <button onClick={() => setOffset({current: offset.current - 1 , max: offset.max})}>{offset.current}</button>}
            <div>{offset.current + 1}</div>
            { (offset.current < (offset.max - 1)) && <button onClick={() => setOffset({current: offset.current + 1 , max: offset.max})}>{offset.current + 2}</button>}
            {offset.max}
        </>
    )
}

export { PokemonList }