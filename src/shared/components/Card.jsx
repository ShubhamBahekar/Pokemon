import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Stack, useTheme } from "@mui/material";


const PokemonCard = ({ pokemon,key,onClick }) => {
  const theme = useTheme();


  return (
    <Card
    key={key}
      sx={{
        width: { xs: 640, sm: 380, md: 300, lg: 355 },
        margin: "0.1rem",
        border: "5px solid white",
        borderRadius: 4,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.paper,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
  onClick={onClick}
    >
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
  );
};

export default PokemonCard;