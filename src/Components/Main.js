import React from "react";
import { Grid } from "@mui/material";

const Main = () => {
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
      <h3 style={textStyles}>PODCAST NAME</h3>
      <h3 style={textStyles}><span><a href="https://www.youtube.com/">listen here</a></span></h3>
      <h3 style={textStyles}></h3>
      <h3 style={textStyles}></h3>
      <h3 style={textStyles}><span><a href="https://github.com/DaniS91">book me</a></span></h3>
      <h3 style={textStyles}></h3>
    </div>
  )
}

export default Main;