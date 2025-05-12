import * as React from "react";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box,Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { pokemonContext } from "../../../PokemonContextProvider/PokemonContextProvider";
import { useContext} from "react";
import Chip from "@mui/material/Chip";
import { ParentBox, CardTag , ImageWrapper} from "./Card.styles";

const PokemonCard = ({ pokemonData, onPokemonClicked }) => {
  const {  handleToggleFavouriteIcon ,favouriteList} = useContext(pokemonContext);
  


  return (
    <ParentBox>
      {pokemonData.map((pokemon, index) => (
        <CardTag
          key={index}
          onClick={onPokemonClicked}
          
        >
          <Box
            position={"absolute"}
            sx={{ top: 0, right: 5, cursor: "pointer" ,padding:"5px"}}
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavouriteIcon(pokemon.id);
            }}
          >
            {favouriteList.includes(pokemon.id)? (<FavoriteIcon key={pokemon.id}
            fontSize="large" sx={{ color: "red" }} />): (<FavoriteBorderIcon key={pokemon.id} fontSize="large" sx={{ color: "darkgoldenrod" }} />)
            } 
          </Box>
          <ImageWrapper className="image-wrapper">
          </ImageWrapper>
          <Box display={"flex"} justifyContent={"center"}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
                transform: "rotate(0deg)",  
                transition: "transform 0.3s ease", 
                pointerEvents: "none",
              }}
              
            />
       </Box>
          <CardContent sx={{ backgroundColor: "white", color: "pink" }}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent={"center"}
              spacing={2}
            >
              <Chip
                label={pokemon.name}
                variant="outlined"
                sx={{ color: "black", fontSize: "1.5rem" ,fontWeight:700}}
              />

              <Chip
                label={pokemon.types.join(", ")}
                variant="outlined"
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  backgroundColor: "darkgreen",
                }}
              />

              <Chip
                label={pokemon.id}
                variant="outlined"
                sx={{ color: "black", fontSize: "1.5rem" }}
              />
            </Stack>
          </CardContent>
        </CardTag>
      ))}
    </ParentBox>
  );
};

export default PokemonCard;
