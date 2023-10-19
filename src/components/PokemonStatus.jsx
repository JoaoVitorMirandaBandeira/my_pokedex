const PokemonStatus = (props) => {
    return (
        <div className="card-info" >
            <p>Status:</p>
            <ul>
                {props?.stats &&
                    props.stats.map((e) => {
                        const statName = e?.stat.name;
                        let displayName = statName;

                        switch (statName) {
                            case "attack":
                                displayName = "ataque";
                                break;
                            case "defense":
                                displayName = "defesa";
                                break;
                            case "speed":
                                displayName = "velocidade";
                                break;
                            default:
                                break;
                        }

                        if (["hp", "attack", "defense", "speed"].includes(statName)) {
                            return (
                                <li key={statName}>
                                    {displayName + ": " + e.base_stat}
                                </li>
                            );
                        }

                        return null;
                    })}
            </ul>
        </div>
    )
}

export { PokemonStatus }