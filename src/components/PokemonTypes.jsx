import { translateTypes } from "../utils/translateTypes"

const PokemonTypes = (props) => {
    return (
        <div>
            <p>Tipo:</p>
            <ul>
                {props?.types && (
                    props.types.map((e) => (
                        <li key={e?.type.name}>
                            {translateTypes(e?.type.name)}
                        </li>
                    ))
                )
                }
            </ul>
        </div>
    )
}

export { PokemonTypes }