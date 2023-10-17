import axios from "axios"

export const getPokemons = async (limit,offset) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return response.data.results
    } catch (error) {
        return "Não encontrado"
    }
}