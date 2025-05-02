import { Box } from '@mui/material'
import React from 'react'
import { useContext } from "react";
import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
import {Typography, Divider, Chip, Grid, Paper } from '@mui/material';

const Section = ({ title, items }) => (
  <Box mb={4}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Box display="flex" flexWrap="wrap" gap={1}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <Chip key={index} label={item} color="primary" variant="outlined" />
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No data available.
        </Typography>
      )}
    </Box>
  </Box>
);






const PokemonDetailView = () => {
  const {evolutionSpecies,abilities,stats,moves } = useContext(pokemonContext);

  return (
    <Box p={4}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" mb={4}>
          Pokémon Details
        </Typography>
      
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Section title="Evolution Chain" items={evolutionSpecies} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Section title="Abilities" items={abilities} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Section title="Stats" items={stats} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Section title="Moves" items={moves} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
    
  )
}

export default PokemonDetailView