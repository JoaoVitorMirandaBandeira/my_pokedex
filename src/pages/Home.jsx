import { useEffect, useState } from "react"
import { Form } from "../components/Form"
import { PokemonList } from "../components/PokemonList"
import { getAllPokemons } from "../services/getAllPokemons"
import { Loading } from "../components/loading";

const Home = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const getDataPokemons = async () => {
        setIsLoading(true)
        const response = await getAllPokemons();
        setPokemons(response)
        setIsLoading(false)
    };
    useEffect(() => {
        getDataPokemons();
    }, []);
    return (
        <>
            {isLoading && <Loading />}
            {!isLoading &&
                <>
                    <Form setFilteredPokemons={setPokemons} />
                    <PokemonList pokemons={pokemons} viewPokemon={props.viewPokemon} />
                </>
            }

        </>
    )
}

export { Home }