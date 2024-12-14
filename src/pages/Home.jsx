import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import getPokemons from "./data/getPokemons";

const Home =() => {
    const [pokemons, setPokemons] = useState([]); //initital state is empty array
    //const [loading, setLoading] = useState(true); //initial state for loading is true
    
    useEffect(() => {
        getPokemons();
    }, []) //empty array = runs only once, right after the initial render

    return (
        <>
        <NavBar />
        <div className="grid grid-cols-4 gap-4">
            {pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
        </div>
        </>
    )
}

export default Home;