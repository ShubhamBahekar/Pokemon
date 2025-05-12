import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";

export const ParentBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  marginTop: 2,
  height: "auto",
  position: "relative",
}));

export const CardTag = styled(Card)(({ theme }) => ({
  width: "100%",
  marginTop: "3%",
  borderRadius: "10%",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px rgba(0, 0, 0, 0.3) 0px 7px 13px -3px rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  backgroundColor: theme.palette.background.paper,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px) scale(1.05)",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px rgba(0, 0, 0, 0.3) 0px 7px 13px -3px rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  position: "relative",
  textTransform: "capitalize",

  "&:hover .image-wrapper": {
    transform: "rotate(180deg) scale(1.03)",
    borderRadius: "0 0 50% 50%",
    transition: "all 0.8s ease",
  },

  [theme.breakpoints.up("xs")]: {
    maxWidth: "100%",
    marginTop: "10%",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "45%",
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: "30%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "23%",
    margin:"3% 1% 0% 1%"
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  height: 200,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "darkseagreen",
  borderRadius: "0 0 50% 50% ",
  transform: "rotate(0deg)",

  position: "absolute",
}));
