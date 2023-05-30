import { useState } from "react";
import { Grid } from "@mui/material";
import "../styles/homepagestyle.scss";
export default function Home() {
  return (
    <Grid container className="containerForhomePage">
      <Grid container className="containerForPortfolio">
        <Grid item md={2} lg={2} sm={2} className="containerforLeft">
          <Grid item md={12} lg={12} sm={12} className="containerForFolioLogo">
            <img src="./logo.png" className="logoImgStyle" />
          </Grid>
        </Grid>
        <Grid item md={10} lg={10} sm={10}>
          containerFor the content
        </Grid>
      </Grid>
    </Grid>
  );
}
