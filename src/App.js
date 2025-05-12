import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/PokemonsDisplay";
import PokemonProvider from "./PokemonContextProvider/PokemonContextProvider";
import "./App.css";
import PokemonDetailView from "./pages/PokemonDetailView/PokemonDetailView";
import Favourite from "./pages/FavouritePokemon/Favourite";

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonview" element={<PokemonDetailView />}/>
        <Route path="/favourite" element={<Favourite/>}/>
      </Routes>
    </PokemonProvider>
  );
};

export default App;
