const Card = ({pokemon}) => {
    <div className="card bg-base-100 w-96 shadow-xl">
			<figure>
				<img
					src=`${pokemon.sprites.front-default}`
					alt=`${pokemon.name}`
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{pokemon.name}</h2>
				<div className="card-actions justify-end">
					<Link to={{pathname: `/pokemon/${pokemon.id}`}} className="btn btn-primary">Learn More</Link>
				</div>
			</div>
		</div>;
}

export default Card