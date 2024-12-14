import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import pokemonDetail from "./pages/pokemonDetail";
import NotFound from "./pages/notFound";
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
		element: <pokemonDetail />,
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
