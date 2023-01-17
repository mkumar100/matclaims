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
import Divider from '@mui/material/Divider';

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
    fontSize: "10px", 
    marginLeft: "20px",//theme.spacing(20), 
    //"&:hover": {
      //color: "yellow",
      //borderBottom: "1px solid white",
    //},
  },
}));

function NavbarPreQualif() {
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
  <Grid item xs={5}>
  
  </Grid>
  <Grid item xs={4}>
  <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/account" className={classes.link}>
              Account
            </Link>
            <Link to="/mydevices" className={classes.link}>
              My Devices
            </Link>
            <Link to="/techservices" className={classes.link}>
              Tech Services
            </Link>
            <Link to="/file" className={classes.link}>
              File a Claim
            </Link>
          </div>
  </Grid>
  <Grid item xs={1}>

  <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
         <Divider orientation="vertical" variant="middle" flexItem />
        </Box>
  </Grid>
  <Grid item xs={1}>
  <Box
            component="img"
            alt="The house from the offer."
            src={require("../images/twoeyes.png")}
            width="20px"
          />
  </Grid>
</Grid>
        
          
      </Toolbar>
    </AppBar>
  );
}
export default NavbarPreQualif;
