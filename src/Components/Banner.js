import React from "react";
import { Grid } from "@mui/material";

const Banner = () => {
  const divStyles = {
    margin: "10px"
  }
  const textStyles = {
    fontFamily: "courier",
    margin: "0",
    padding: "0",
  }
  return (
    <div style={divStyles}>
      <h3 style={textStyles}>----------------------------------------</h3>
      <h3 style={textStyles}>-LUCILLE-LLC----------------------------</h3>
      <h3 style={textStyles}>----------------------------------------</h3>
      <h3 style={textStyles}>----------------------------------------</h3>
      <h3 style={textStyles}>----------------------<span><a href="https://github.com/DaniS91">CONTACT-LINK</a></span>------</h3>
      <h3 style={textStyles}>----------------------------------------</h3>
    </div>
  )
}

export default Banner;