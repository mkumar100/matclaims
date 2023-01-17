import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Grid,
  Box
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "10px",//theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: "20px",//theme.spacing(20), 
    //"&:hover": {
      //color: "yellow",
      //borderBottom: "1px solid white",
    //},
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" sx={{bgcolor:"white"}}>
      <CssBaseline />
      <Toolbar>
      <Grid container spacing={2}>
  <Grid item xs={1}>
  <Box
            component="img"
            alt="The house from the offer."
            src={require("../images/pocketgeekhome.png")}
          />
  </Grid>
  <Grid item xs={6}>
    
  </Grid>
  <Grid item xs={4}>
  <div className={classes.navlinks}>
            <Link to="/faq" className={classes.link}>
              FAQs
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact us
            </Link>
            <Link to="/file" className={classes.link}>
              File a Claim
            </Link>
          </div>
  </Grid>
  <Grid item xs={1}>
  <Box
            component="img"
            alt="The house from the offer."
            src={require("../images/twoeyes.png")}
          />
  </Grid>
</Grid>
        
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
