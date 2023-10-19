import { Home } from './Home';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { Pokemon } from './Pokemon';
import { Favorites } from './Favorites';


const Root = () => {
    const [page, setPage] = useState('Home')
    const [pokemonView, setPokemonView] = useState()
    const viewPokemon = (id) => {
        setPage("Pokemon")
        setPokemonView(id)
    }
    const viewHome = () => {
        setPage("Home")
    }

    const viewFavorites = () => {
        setPage("Favorite")
    }
    return (
        <>
            <Navbar viewHome={viewHome} viewFavorites={viewFavorites} />

            <div>
                {
                    ((page === 'Home') &&
                        <Home viewPokemon={viewPokemon} />) ||
                    ((page === "Pokemon") && <Pokemon idPokemon={pokemonView} />) ||
                    ((page === "Favorite") && <Favorites idPokemon={pokemonView} viewPokemon={viewPokemon} />)
                }
            </div>

        </>

    )
}

export { Root }