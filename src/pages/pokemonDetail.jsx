import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useParams } from "react-router-dom"; // Importing `useParams` to access route parameters
import { useState, useEffect } from "react";

const PokemonDetail = () => {
	const { id } = useParams(); // Get the Pokémon ID from the URL
	const [pokemon, setPokemon] = useState(null); // State to hold fetched Pokémon data
	const [error, setError] = useState(null); // State to store any error that occurs during data fetching

	const getPokemon = async () => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); //wait for fetch
			if (!response.ok) {
				throw new Error("Failed to fetch Pokémon data"); //creates
			}
			const data = await response.json();
			setPokemon(data); // Update state with fetched Pokémon data
		} catch (error) {
			//update error state to "Failed to fetch..."
			setError(error.message);
		}
	};

	useEffect(() => {
		getPokemon();
	}, [id]); //fetch Pokémon data when the component mounts or when `id` changes

	return (
		<>
			<NavBar />
			<Header pokemon={pokemon} />
			<div>
				<div
					tabIndex={0}
					className="collapse collapse-plus border-base-300 bg-base-200 border"
				>
					<div className="collapse-title text-xl font-medium">Abilities</div>
					<div className="collapse-content">
						{/* Iterate over the Pokémon's abilities array and display each ability */}
						{pokemon.abilities.map((abilityObj, index) => (
							<p key={index}>{abilityObj.ability.name}</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default PokemonDetail;
