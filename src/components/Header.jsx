

const Header = ({pokemon}) => {
	return (
		<div class="hero bg-base-200 min-h-screen">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img
					src={`${pokemon.sprites.front_default}`}
					class="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-5xl font-bold">{pokemon.name}</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
