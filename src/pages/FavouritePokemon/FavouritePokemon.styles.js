import { Box, styled } from "@mui/material"


export const DisplayCards = styled(Box)(()=>({
    minHeight:"38rem",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
}))



export const NoContentMessage = styled(Box)(()=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100vw",
    height:"100vh",
    fontSize:"2rem",
    color:"pink"
}))

