import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid, Stack, useTheme } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PokemonCard = ({ pokemonData,onPokemonClicked }) => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-around"}
      alignItems="center"
      width={"100%"}
      flexWrap={"wrap"}
      marginTop={2}
      height={"auto"}
      position={"relative"}
    >
     
      {pokemonData.map((pokemon, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: { xs: "100%", sm: "50%", md: "30%", lg: "25%" },
            width: "100%",
            margin: "auto",
            border: "5px solid white",
            borderRadius: 4,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: theme.palette.background.paper,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            },
             position:"relative"
          }}
          onClick={onPokemonClicked}
        >
              <Box position={"absolute"} sx={{top:0,right:2 , cursor:"pointer"}}>
              
              </Box>
          <Box
            sx={{
              height: 180,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "tan",
          
            }}
          >
         
            <img
              src={pokemon.image}
              alt={pokemon.name}
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
          <CardContent sx={{ backgroundColor: "dimgray", color: "pink" }}>
            <Stack direction="column">
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography gutterBottom variant="h6">
                  Name :
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {pokemon.name}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography gutterBottom variant="h6">
                  Type :
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {pokemon.types.join(", ")}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography gutterBottom variant="h6">
                  Id No :
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  {pokemon.id}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PokemonCard;
