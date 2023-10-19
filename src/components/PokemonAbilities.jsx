const PokemonAbilities = (props) => {
    return (
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
    )
}

export { PokemonAbilities }