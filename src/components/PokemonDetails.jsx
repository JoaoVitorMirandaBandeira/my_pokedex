const PokemonDetails = (props) => {
    return (
        <div>
            <p>Status:</p>
            <ul>
                {props.stats && (
                    props.stats.map((e) => (
                        <li key={e?.stat.name}>
                            {e?.stat.name + ": " + e?.base_stat}
                        </li>
                    ))
                )
                }
            </ul>
        </div>
    )
}

export { PokemonDetails }