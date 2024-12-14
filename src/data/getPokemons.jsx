//Fetch Base URL
const PokemonBaseUrl = `https://pokeapi.co/api/v2/pokemon/`

//fetch Data
const getPokemons = async () => {
        
    for (let i = 1; i < 150; i++) {
        try {
            //wait for fetch string
            const result = await fetch(`${PokemonBaseUrl}${i}`);
            //for ux
            if (!res.ok) {
                setStatus('error');
                throw new Error('Something went wrong...');
              }
            //if we get ok, parse to javascript object
            const data = await result.json();
            // if parsed, add to the array
            setPokemons([...pokemons, data]);
        } catch (error) {
            console.log(error);
        }
    }
}

export default getPokemons;