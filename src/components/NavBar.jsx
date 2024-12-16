import { NavLink } from "react-router-dom"
import pokeball from "../assets/pokeball.png"

const Navbar = () => {
    return (
			<div className="navbar bg-base-200 mb-12 rounded-xl">
				<div className="flex-1">
					<img src={pokeball} className="w-5 m-2"/>
					<h1>Pokedex</h1>
				</div>
				<div className="flex-none gap-2">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink 
								className={({ isActive }) => isActive ? "to-blue-600 font-bold" : ""}
                                to={`/`}>
								Home
							</NavLink>
						</li>
					</ul>
					<div className="form-control">
						<input
							type="text"
							placeholder="Search"
							className="input input-bordered w-24 md:w-auto"
						/>
					</div>
				</div>
			</div>
		);
}

export default Navbar