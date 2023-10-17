import axios from "axios"

export const getSpecidicPokemon = async (url) => {
    try{
        const response = await axios.get(url)
        return response.data
    }catch{
        return "Não encontrado"
    }
} 