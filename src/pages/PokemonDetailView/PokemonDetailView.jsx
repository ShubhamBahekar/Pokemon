// import { Box } from '@mui/material'
// import React from 'react'
// import { useContext } from "react";
// import { pokemonContext } from "../../PokemonContextProvider/PokemonContextProvider";
// import {Typography, Divider, Chip, Grid, Paper } from '@mui/material';

// const Section = ({ title, items }) => (
//   <Box mb={4}>
//     <Typography variant="h6" gutterBottom>
//       {title}
//     </Typography>
//     <Divider sx={{ mb: 2 }} />
//     <Box display="flex" flexWrap="wrap" gap={1}>
//       {items.length > 0 ? (
//         items.map((item, index) => (
//           <Chip key={index} label={item} color="primary" variant="outlined" />
//         ))
//       ) : (
//         <Typography variant="body2" color="text.secondary">
//           No data available.
//         </Typography>
//       )}
//     </Box>
//   </Box>
// );


// const PokemonDetailView = () => {
//   const {evolutionSpecies,abilities,stats,moves } = useContext(pokemonContext);

//   return (
//     <Box p={4}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
//         <Typography variant="h4" mb={4}>
//           Pokémon Details
//         </Typography>
      
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Section title="Evolution Chain" items={evolutionSpecies} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Section title="Abilities" items={abilities} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Section title="Stats" items={stats} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Section title="Moves" items={moves} />
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
    
//   )
// }

// export default PokemonDetailView

import { Box, LinearProgress, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import {pokemonContext} from "../../PokemonContextProvider/PokemonContextProvider"
import { useParams } from 'react-router-dom';

const PokemonDetailView = () => {
const {id} = useParams();
const {pokemonImage,evolutionSpecies,abilities,stats,moves,fetchPokemonById} = useContext(pokemonContext);

  useEffect(()=>{
  if(id)
  {
    fetchPokemonById(id);
  }
  },[id])



  return (
   <Box width={"100vw"} height={"100vh"} sx={{display:"flex", justifyContent:"center", alignItems:"center" }}>
    <Paper elevation={3}>
     <Card sx={{maxHeight:"45rem"}}>
      <CardMedia
        sx={{ height: 350,objectFit:"contain" }}
        image={pokemonImage}
        title="green iguana"
        component={"img"}
        
      />
      <CardContent>
        <Box marginBottom={"0.5rem"}>
        {stats?.map((stat)=>( <Box>
          <Typography fontSize={"1rem"} >
          {stat.name}:
       
        <strong>
          {stat.value}
        </strong>
         </Typography>
        <LinearProgress variant="determinate"
                value={Math.min((stat.value / 100) * 100, 100)}
                sx={{ height: 8, borderRadius: 5, backgroundColor: '#e0e0e0',width:"10rem" }}/>
        </Box>))
          }
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Paper>
   </Box>
  )
}

export default PokemonDetailView


