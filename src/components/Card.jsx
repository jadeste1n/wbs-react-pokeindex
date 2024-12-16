import { Link } from "react-router-dom";
const Card = ({ pokemon }) => {
	return (<div className="card bg-base-100 w-full shadow-xl"> {/*Dont forget the return to dispaly! */}
		<figure>
			<img
				src={`${pokemon.sprites.front_default}`}
				alt={`${pokemon.name}`}
			/>
		</figure>
		<div className="card-body flex">
			<h2 className="card-title justify-center">{pokemon.name}</h2>
			<div className="card-actions justify-center">
				<Link to={{ pathname: `/pokemon/${pokemon.id}` }} className="btn btn-primary btn-sm">Learn More</Link>
			</div>
		</div>
	</div>);
}

export default Card