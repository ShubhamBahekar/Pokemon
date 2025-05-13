import React  from 'react'
import PokemonCard from '../../shared/components/Card/Card'
import { Box } from '@mui/material'
import { useContext } from 'react'
import { pokemonContext } from '../../PokemonContextProvider/PokemonContextProvider'
import Header from "../../Header/Header"
import { NoContentMessage, DisplayCards } from './FavouritePokemon.styles'
const Favourite = () => {

const {favouriteList,filterPokemonData} = useContext(pokemonContext);
   const favouritePokemon = filterPokemonData.filter((pokemon)=>favouriteList.includes((pokemon.id)))


  return (
    <Box sx={{backgroundColor:"#3D3539"}} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
      <Box>
          <Header/>
      </Box>

      <DisplayCards>
        {favouritePokemon.length>0 ?(<PokemonCard  pokemonData={favouritePokemon}  />) : <NoContentMessage >No Favourite Pokemon Selected</NoContentMessage >} 
      </DisplayCards>
       
     
   </Box >
  )
}

export default Favourite