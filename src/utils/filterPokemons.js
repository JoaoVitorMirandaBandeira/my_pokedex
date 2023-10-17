export const filterPokemons = (pokemons, name) => {
    console.log(pokemons)
    const filtered = pokemons.filter(e => {
        return e.name.toLowerCase().includes(name.toLowerCase())
    })
    return filtered
}