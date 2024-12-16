import NavBar from "../components/NavBar";
import Card from '../components/Card'
import { useState, useEffect } from "react";
import GetPokemons from "../Data/getPokemons";

const Home = () => {
    const [pokemons, setPokemons] = useState([]); //initital state is empty array
    const [status, setStatus] = useState('loading'); //initital state is loading

    useEffect(() => {

        GetPokemons(setStatus, setPokemons);

    }, []) //empty array = runs only once, right after the initial render

    return (
        <>
            <NavBar />
            {status === 'loading' ? (
            <p>Seite wird geladen</p>
        ) : status === 'error' ? (
            <p>Es ist ein Fehler aufgetreten</p>
        ) : (
            <div className="grid grid-cols-4 gap-4 ">
                {pokemons.length && pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
            </div>)}
        </>
    )
}

export default Home;