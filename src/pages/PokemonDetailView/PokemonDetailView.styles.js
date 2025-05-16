import { styled } from "@mui/material";
import {Box} from "@mui/material";
import {Paper} from "@mui/material";



export const PaperTag = styled(Paper)(()=>({
  padding: "0%",
  backgroundColor: "#4D4548",
  background:"linear-gradient(to right top, #232030, #37202d, #422522, #402f19, #323b1e)",
  borderRadius: "1rem",
  width:"90vw",
  maxHeight: "100vh",
  overflow:"auto",
  textTransform:"capitalize",
}))

export const movesDetail = styled(Box)(()=>({
   maxWidth: "50rem",
  maxHeight: "100vh",
  overflow:"auto",
  display:"flex", 
justifyContent:"space-around",
  flexWrap:"wrap",
 
}))

export const MovesTag = styled(Paper)(()=>({
  padding:"0%",width:"50%",
     backgroundColor:"#4D4548",
     borderRadius:"1rem"
}))

export const FancyDivider = styled(Box)(()=>({
    height: 4,
        background: 'linear-gradient(to right, #ff9800, #f44336)',
        borderRadius: 2,
        marginBottom:4
}))