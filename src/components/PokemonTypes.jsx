const PokemonTypes = (props) => {
    return (
        <div>
            <p>Tipo:</p>
            <ul>
                {props?.types && (
                    props.types.map((e) => (
                        <li key={e?.type.name}>
                            {e?.type.name}
                        </li>
                    ))
                )
                }
            </ul>
        </div>
    )
}

export { PokemonTypes }