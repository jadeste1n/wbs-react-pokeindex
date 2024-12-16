//Fetch Base URL
const PokemonBaseUrl = `https://pokeapi.co/api/v2/pokemon/`

//fetch Data
const GetPokemons = async (setStatus, setPokemons) => {

    let arrayOfPokemons = []

    try {
        setStatus('loading');
        //try a for loop & create an array of fetched data
        for (let i = 1; i < 150; i++) {
            const result = await fetch(`${PokemonBaseUrl}${i}`); //wait for fetch string
            //for ux
            if (!result.ok) {
                setStatus('error');
                throw new Error('Something went wrong...');
            }
            const data = await result.json();//if we get ok, parse to javascript object
            arrayOfPokemons.push(data) // if parsed, add it to array
        }
        // change state of Pokemon array to the new fetched elements
        setPokemons(arrayOfPokemons);
        setStatus('');
    } catch (error) {
        console.log(error);
    }


}

export default GetPokemons;