import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/PokemonsDisplay";
import PokemonProvider from "./PokemonContextProvider/PokemonContextProvider";
import "./App.css";
import PokemonDetailView from "./pages/PokemonDetailView/PokemonDetailView";

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonview" element={<PokemonDetailView />}/>
      </Routes>
    </PokemonProvider>
  );
};

export default App;
