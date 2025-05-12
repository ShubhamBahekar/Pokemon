import React  from 'react'
import PokemonCard from '../../shared/components/Card/Card'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { pokemonContext } from '../../PokemonContextProvider/PokemonContextProvider'

const Favourite = () => {

const {favouriteList,filterPokemonData} = useContext(pokemonContext);
   const favouritePokemon = filterPokemonData.filter((pokemon)=>favouriteList.includes((pokemon.id)))


  return (
    <Box>
       {favouritePokemon.length>0 ?(<PokemonCard  pokemonData={favouritePokemon}  />) : <Box>No Favourite Pokemon Selected</Box>} 
     
   </Box>
  )
}

export default Favourite