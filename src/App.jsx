import "./App.css";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"; // Import required components and functions

// Define your routes
const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/pokemon/:name",
		element: <PokemonDetail />,
		errorElement: <NotFound />,
	},
];

// Create a router instance
const router = createBrowserRouter(routes);

function App() {
	return (
		<> 
			<RouterProvider router={router} />
		</>
	);
}

export default App;
