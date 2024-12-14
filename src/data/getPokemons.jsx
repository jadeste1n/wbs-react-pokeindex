//Fetch Base URL
const PokemonBaseUrl = `https://pokeapi.co/api/v2/pokemon/`

//fetch Data
const getPokemons = async (setStatus, setPokemons) => {

    let arrayOfPokemons = []

    try {
        for (let i = 1; i < 150; i++) {

            //wait for fetch string
            const result = await fetch(`${PokemonBaseUrl}${i}`);
            //for ux
            if (!result.ok) {
                setStatus('error');
                throw new Error('Something went wrong...');
            }
            //if we get ok, parse to javascript object
            const data = await result.json();
            arrayOfPokemons.push(data)
        }
        // if parsed, add to the array
        setPokemons(arrayOfPokemons);
    } catch (error) {
        console.log(error);
    }


}

export default getPokemons;