/* eslint-disable no-mixed-operators */
import { useEffect, useState } from "react"
import { getSpecidicPokemon } from "../services/getSpecificPokemon"
import { scrollToTop } from "../utils/scrollToTop"
import { calculateMaxOffset } from "../utils/calculateMaxOffset"
import { removeOrAddFavorites } from "../utils/removeOrAddFavorites"
import { isIdInFavorites } from "../utils/isIdInFavorites"

const PokemonList = (props) => {
    const [dataPokemons, setDataPokemons] = useState([])
    const [offset, setOffset] = useState({
        current: 0,
        max: 0
    })

    const onClickButton = (number) => {
        setOffset({ current: offset.current + number, max: offset.max })
        scrollToTop()
    }
    const likePokemon = (id) => {
        const updateDataPokemon = dataPokemons.map(e => {
            if(e.id === id){
                removeOrAddFavorites(id)
                return {
                    id: e.id,
                    name: e.name,
                    img: e.img,
                    iLike: !e.iLike
                }    
            }
            return e
        })
        setDataPokemons(updateDataPokemon)
    }

    useEffect(() => {
        const offsetMax = calculateMaxOffset(props.pokemons.length)
        setOffset({ current: 0, max: offsetMax })
    }, [props.pokemons])

    useEffect(() => {
        const getDatapokemons = async () => {
            let updatedPokemons = []
            const min = offset.current * 30
            const firstThirty = props.pokemons.slice(min, min + 30)
            for (const e of firstThirty) {
                const pokemon = await getSpecidicPokemon(e.url)
                let img = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
                if(!img){
                    img = pokemon.sprites.front_default
                    if(!img) img = "https://dinopixel.com/preload/0622/Pokeball.png"
                } 
                updatedPokemons.push({
                    id: pokemon.id,
                    name: e.name,
                    img: img,
                    iLike: isIdInFavorites(pokemon.id)
                })
            };
            setDataPokemons(updatedPokemons)
        }
        getDatapokemons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])
    return (
        <>
            {
                dataPokemons.map((e) => {
                    return (
                        <li key={e.id} id={e.id}>
                            <div onClick={() => props.viewPokemon(e.id)}>{e.name}</div>
                            <img src={e.img} alt={e.name} />
                            <div onClick={() => likePokemon(e.id)}>
                                { e.iLike && <i class="fa-solid fa-heart"></i> || <i class="fa-regular fa-heart"></i> }
                            </div>
                        </li>
                    )
                })
            }
            {(offset.current > 0) && <button onClick={() => onClickButton(-1)}>{offset.current}</button>}
            <div>{offset.current + 1}</div>
            {(offset.current < (offset.max - 1)) && <button onClick={() => onClickButton(1)}>{offset.current + 2}</button>}
        </>
    )
}

export { PokemonList }