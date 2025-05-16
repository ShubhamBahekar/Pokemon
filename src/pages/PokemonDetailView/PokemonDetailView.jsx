
import { Box, CircularProgress} from '@mui/material'
import React, { useEffect } from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import {pokemonContext} from "../../PokemonContextProvider/PokemonContextProvider"
import { useParams } from 'react-router-dom';
import {PaperTag,FancyDivider,MovesDetail, ParentTag } from './PokemonDetailView.styles';
import {Chip} from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
const PokemonDetailView = () => {
const {id} = useParams();
const {pokemonImage,evolutionSpecies,abilities,stats,moves,movesInDetail,pokemonName,fetchPokemonById,handleDetailMoves} = useContext(pokemonContext);

  useEffect(()=>{
  if(id)
  {
    fetchPokemonById(id);
  }
  },[id])




  return (
   <ParentTag  sx={{display:"flex",width:"100vw" ,height:"100vh", justifyContent:"center",alignItems:"center",background:"linear-gradient(to right top, #070411, #07101a, #05191f, #062021, #0e2620);" }}>
    
    
    {movesInDetail?(<Box width={"100vw"} height={"auto"} ><MovesDetail>
      <Box>
     {moves.map((item, idx) => (
       <Chip key={idx} label={item} color="success" sx={{margin:"0.5rem", textTransform:"capitalize"}}/>
     ))}
     </Box>
     <Button onClick={handleDetailMoves}>Close</Button>
   </MovesDetail></Box>) : (<PaperTag>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}> 
       <Box>
        <Typography variant='h5' fontWeight={"700"} color='info' padding={1}>Abilities</Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={2}>
        {abilities.map((item)=>(
          <Chip label={item} color='secondary' />
        ))}
        </Box>
      </Box>
      <CardMedia
        sx={{ maxHeight: 320,maxWidth:280,objectFit:"contain" }}
        image={pokemonImage}
        title="green iguana"
        component={"img"}
 
      />
      <Box>
        <Typography variant='h5' fontWeight={"700"} color='info' padding={1}>Evolution-Chain</Typography>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={2} >
        {evolutionSpecies.map((item,idx)=>(
          <React.Fragment key={idx} >
          <Chip label={item} color='secondary' sx={{padding:0}}/>
          {idx < evolutionSpecies.length - 1 && (
  <Box display="flex" justifyContent="center">
    <ArrowDownward color='error'/>
  </Box>)}
          </React.Fragment>
        ))}
        </Box>
      </Box>
 </Box>
 
      <CardContent >
        <Box marginBottom={"0.5rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Box display={"flex"} justifyContent={"center"} >
          <Typography variant='h3' color='warning' fontWeight={"700"} padding={1}>{pokemonName}</Typography>
          </Box>
           <FancyDivider />


        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} columnGap={3} rowGap={1}>
        {stats?.map((stat)=>( <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} flexDirection={"column"} columnGap={3}>
          <Typography fontSize={"1.2rem"} color='primary' textTransform={"capitalize"} >
          {stat.name}:
       
        <strong>
          {stat.value}
        </strong>
         </Typography>
          <Box position="relative" display="inline-flex">
                  <CircularProgress
                    variant="determinate"
                    value={Math.min((stat.value / 100) * 100, 100)}
                    thickness={6}
                    size={80}
                    sx={{ color: '#ff7043' }}
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
                    <Typography variant="subtitle2" component="div" color="success">
                      {`${Math.round(Math.min((stat.value / 100) * 100, 100))}%`}
                    </Typography>
                  </Box>
                </Box>
        </Box>))
          }
        </Box>
      </Box>
        <FancyDivider />
        <Box> <Typography variant='h6' color='info' fontWeight={"700"}>Moves:</Typography> 
  <Box display="flex" gap={2} flexWrap="wrap">
    {moves.slice(0, 5).map((item, idx) => (
      <Chip key={idx} label={item} color="success" />
    ))}
    <Button onClick={handleDetailMoves}>View More</Button>
  </Box>





        </Box>
       
      </CardContent>
      
    </PaperTag>)} 

    
   </ParentTag>
  )
}

export default PokemonDetailView





