import { Box, Card, CircularProgress, useMediaQuery} from "@mui/material";
import React, { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
import { useParams } from "react-router-dom";
import {
  PaperTag,
  FancyDivider,
  MovesDetail,
  ParentTag,
} from "./PokemonDetailView.styles";
import { Chip } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import usePokemon from "../../hooks/usePokemon";
import { useCallback } from "react";

const PokemonDetailView = () => {
  const { id } = useParams();
  const isMobile = useMediaQuery("(max-width:600px)");
  const {
    pokemonImage,
    setPokemonImage,
    evolutionSpecies,
    abilities,
    stats,
    moves,
    movesInDetail,
    pokemonName,
    setPokemonName,
    setEvolutionSpecies,
    setAbilities,
    setStats,
    setMoves,
    handleDetailMoves,
  } = useContext(pokemonContext);

  const { getPokemonDetails } = usePokemon();

  const fetchPokemonById = useCallback(
    async (id) => {
      try {
        const pokemonData = await getPokemonDetails(id);
        console.log("Got Pokémon details:", pokemonData);

    
        const dataOfAbility =
          pokemonData?.abilities?.map((item) => item.ability?.name) || [];
        const nameInStats =
          pokemonData?.stats?.map((item) => ({
            name: item.stat.name,
            value: item.base_stat,
          })) || [];
        const dataOfMoves =
          pokemonData?.moves?.map((item) => item.move.name) || [];
        const dataOfImage =
          pokemonData?.sprites?.other?.dream_world?.front_default || "";
        const nameOfPokemon = pokemonData?.name || "";

 
        setAbilities(dataOfAbility);
        setStats(nameInStats);
        setMoves(dataOfMoves);
        setPokemonImage(dataOfImage);
        setPokemonName(nameOfPokemon);

  
        const speciesRes = await fetch(pokemonData.species.url);
        const speciesData = await speciesRes.json();

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

   
        const getSpeciesNames = (evolves_to, names) => {
          evolves_to.forEach((evo) => {
            names.push(evo.species.name);
            if (evo.evolves_to?.length) {
              getSpeciesNames(evo.evolves_to, names);
            }
          });
        };

        const getAllSpecies = (node) => {
          const names = [node.species.name];
          getSpeciesNames(node.evolves_to, names);
          return names;
        };

        const speciesList = getAllSpecies(evoData.chain);
        setEvolutionSpecies(speciesList);
      } catch (error) {
        console.error(
          "Failed to fetch Pokémon details or evolution chain:",
          error
        );
        setAbilities([]);
        setStats([]);
        setMoves([]);
        setPokemonImage("");
        setPokemonName("");
        setEvolutionSpecies([]);
      }
    },
    [
      getPokemonDetails,
      setAbilities,
      setStats,
      setMoves,
      setPokemonImage,
      setPokemonName,
      setEvolutionSpecies,
    ]
  );

  useEffect(() => {
    if (id) {
      fetchPokemonById(id);
    }
  }, [fetchPokemonById, id]);

  return (
    <ParentTag
    >
      {movesInDetail ? (
        <Box width={"100vw"} height={"auto"}>
          <MovesDetail>
            <Box>
              {moves.map((item, idx) => (
                <Chip
                  key={idx}
                  label={item}
                  color="success"
                  sx={{ margin: "0.5rem", textTransform: "capitalize" }}
                />
              ))}
            </Box>
            <Button  onClick={handleDetailMoves} color="info" variant="outlined" sx={{marginTop:"2rem"}}>Close</Button>
          </MovesDetail>
        </Box>
      ) : (
        <PaperTag>
        {isMobile?(<Box display={"flex"} justifyContent={"center"} width={"auto"} minWidth={"340px"}><Card sx= {{width:"100%", background:"linear-gradient(to right top, #232030, #37202d, #422522, #402f19, #323b1e)"}} > <CardMedia
        sx={{ height: 390,objectFit:"contain",padding:"2.5%" }}
        image={pokemonImage}
        title="green iguana"
        component={"img"}
      /></Card></Box>):(<> <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"700"}
                color="info"
                padding={1}
              >
                Abilities
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={2}
              >
                {abilities.map((item) => (
                  <Chip label={item} color="secondary" />
                ))}
              </Box>
            </Box>
            <CardMedia
              sx={{ maxHeight: 320, maxWidth: 280, objectFit: "contain" }}
              image={pokemonImage}
              title="green iguana"
              component={"img"}
            />
            <Box>
              <Typography
                variant="h5"
                fontWeight={"700"}
                color="info"
                padding={1}
              >
                Evolution-Chain
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={2}
              >
                {evolutionSpecies.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <Chip label={item} color="secondary" sx={{ padding: 0 }} />
                    {idx < evolutionSpecies.length - 1 && (
                      <Box display="flex" justifyContent="center">
                        <ArrowDownward color="error" />
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Box></>)}

         

          <CardContent>
            <Box
              marginBottom={"0.5rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box display={"flex"} justifyContent={"center"}>
                <Typography
                  variant="h3"
                  color="warning"
                  fontWeight={"700"}
                  padding={1}
                >
                  {pokemonName}
                </Typography>
              </Box>
              <FancyDivider />

              <Box
                display={"flex"}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
                columnGap={3}
                rowGap={1}
              >
                {stats?.map((stat) => (
                  <Box
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    columnGap={3}
                  >
                    <Typography
                      fontSize={"1.2rem"}
                      color="primary"
                      textTransform={"capitalize"}
                    >
                      {stat.name}:<strong>{stat.value}</strong>
                    </Typography>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        variant="determinate"
                        value={Math.min((stat.value / 100) * 100, 100)}
                        thickness={6}
                        size={80}
                        sx={{ color: "#ff7043" }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="subtitle2"
                          component="div"
                          color="success"
                        >
                          {`${Math.round(
                            Math.min((stat.value / 100) * 100, 100)
                          )}%`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <FancyDivider />
            <Box>
              {" "}
              <Typography variant="h6" color="info" fontWeight={"700"}>
                Moves:
              </Typography>
              <Box display="flex" gap={2} flexWrap="wrap">
                {moves.slice(0, 5).map((item, idx) => (
                  <Chip key={idx} label={item} color="success" />
                ))}
                <Button onClick={handleDetailMoves}>View More</Button>
              </Box>
            </Box>
          </CardContent>
        </PaperTag>
      )}
    </ParentTag>
  );
};

export default PokemonDetailView;
