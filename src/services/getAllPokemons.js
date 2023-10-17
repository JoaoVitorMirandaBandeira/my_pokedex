import axios from "axios"

export const getAllPokemons = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1292`)
    return response.data.results
}