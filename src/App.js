import { Routes, Route } from "react-router-dom";
import Home from "./Home/HomePage";
import PokemonProvider from "./Home/PokemonProvider";
import "./App.css";

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </PokemonProvider>
  );
};

export default App;
