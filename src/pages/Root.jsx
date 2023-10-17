import { Home } from './Home';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import { Pokemon } from './Pokemon';

const Root = () => {
    const [page,setPage] = useState('Home')
    const [pokemonView,setPokemonView] = useState()
    const viewPokemon = (id) => {
        setPage("Pokemon")
        setPokemonView(id)
    }
    const viewHome = () => {
        setPage("Home")
    }
    return(
        <>
            <Navbar viewHome={viewHome}/>
            {
                ((page === 'Home') && <Home viewPokemon={viewPokemon}/>) || ((page === "Pokemon") && <Pokemon idPokemon={pokemonView}/>)
            }
            
        </>
    )
}

export { Root }