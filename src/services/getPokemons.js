import axios from "axios"

export const getPokemons = (limit,offset) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    
}