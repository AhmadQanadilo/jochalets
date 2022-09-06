import React from "react";
import { CircularProgress } from "@mui/material";

function Loader() {
  return <CircularProgress color="success" style={{
    height: "100px",
    width: '100px',
    margin: 'auto', 
    display: 'block',
  }}>
    <span className="visually-hidden">Loading ...</span>
  </CircularProgress>;
}

export default Loader;
