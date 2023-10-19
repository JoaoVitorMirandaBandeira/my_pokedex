const PokemonAbilities = (props) => {
    return (
        <div>
            <p>Habilidades:</p>
            <ul>
                {props.abilities && (
                    props.abilities.map((e) => (
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