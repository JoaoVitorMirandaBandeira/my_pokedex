const PokemonList = (props) => {
    return (
        <>
            {
                props.pokemons.map((e) => {
                    return (
                        <li key={e.id} id={e.id}>
                            <div onClick={() => props.viewPokemon(e.id)}>{e.name}</div>
                            <img src={e.img} alt={e.name} />
                        </li>
                    )
                })
            }
            {(props.offset > 0) && <button onClick={() => props.setOffset(props.offset - 30)}>{props.offset / 30}</button>}
            <div>{(props.offset / 30) + 1}</div>
            <button onClick={() => props.setOffset(props.offset + 30)}>{(props.offset / 30) + 2}</button>
        </>
    )
}

export { PokemonList }