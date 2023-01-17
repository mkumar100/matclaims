import * as React from "react";
import {useState} from "react";
//import CssBaseline from "@mui/material/CssBaseline";  
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system"; ////AdapterDayjs//DesktopDatePickerTextareaAutosize
//FormControlLabelTypography
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';//<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
import AdbIcon from '@material-ui/icons/Adb';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
//import LocalizationProvider from "@mui/material/LocalizationProvider";
//import AdapterDayjs from "@mui/material/AdapterDayjs";
//import { DesktopDatePicker } from "@mui/DesktopDatePicker";
//import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import "../4ServiceFulfillment/4ServiceFulfillment.css";
import ServiceFulfillmentStepper from "../../components/4ServiceFulfillmentStepper";
import { withStyles } from "@material-ui/styles";
import Navbar from "../../components/navbar";
import Divider from '@mui/material/Divider';

const pages = ['FAQs', 'Contact Us', 'File a Claim'];

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    backgroundColor: "primary.main",
    display: 'flex', 
    alignItems: 'center'
  }
})(Typography);

function ServiceFul() {
  const navigate = useNavigate();

  const [alignment, setAlignment] = useState("");
  return (
    <Stack sx={{bgcolor:"lightgrey"}}>
      <Box>
        <Navbar/>
      </Box>
      {/* <Box
        component="img"
        alt="The house from the offer."
        src={require("../../images/header.png")}
        sx={{
          width: 1262,
          marginBottom: 0,
        }}
      /> */}
      <Grid container spacing={0} sx={{ bgcolor: "primary.main", height: "30" }}>
      <Grid item xs={1}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={11}>
            <WhiteTextTypography sx={{ height: 38,display: 'flex', alignItems: 'center' }}>File a Claim</WhiteTextTypography>
          </Grid>
      </Grid>
      {/* sx={{ backgroundColor: "lightgrey" }} */}
      <Container sx={{marginTop:5}}>
        <Grid container spacing={10}>
          <Grid item xs={8} sx={{bgcolor:"white"}}>
            <Box>
            <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Service Fulfillment</Box>
            </Box>
            <Box>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                  style: { fontSize: 10 },
                }}
                defaultValue={"Step 3 of 4"}
                //   value="File a Claim"
                sx={{
                  height: 25,
                  width: 835,
                  bgcolor: "",
                  fontSize: "1",
                }}
              />
            </Box>
            <Box
              sx={{
                height: 100,
                width: 835,
                bgcolor: "",
                fontSize: "1",
              }}
            >
              <ServiceFulfillmentStepper />
            </Box>
            <Box>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                }}
                defaultValue={"Mail in Repair"}
                //   value="File a Claim"
                sx={{
                  height: 47,
                  width: 835,
                  bgcolor: "",
                }}
              />
            </Box>
            <Box>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                  style: { fontSize: 12 },

                  rows: 2,
                  maxRows: 4,
                }}
                defaultValue={
                  "Once you device is ready, it will be shipped to your adress as per our records via standard shipping"
                }
                //   value="File a Claim"
                sx={{
                  height: 25,
                  width: 835,
                  bgcolor: "",
                  fontSize: "1",
                }}
              />
            </Box>
            <Box>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ marginRight: 10 }}
                  defaultValue="policy"
                >
                  <FormControlLabel selected  
                    value="policy"
                    control = {<Radio/> }
                    label={
                      <Typography variant="body2" color="black" >
                        Same as policy
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="address"
                    control={<Radio />}
                    label={
                      <Typography variant="body2" color="black">
                        New Address
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
            <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Steve Smith</Box>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  readOnly: true,
                }}
                defaultValue={"123, Main Street, Atlanta, Unites States"}
                //   value="File a Claim"
                sx={{
                  height: 47,
                  width: 835,
                  bgcolor: "", //primary.main
                }}
                inputProps={{ style: { fontSize: 15 } }}
              />
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{ marginRight: 50, marginLeft: 5, marginBottom: 3 }}
                onClick={() => {
                  navigate("/svcoptions");
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                sx={{marginBottom: 3 }}
                onClick={() => {
                  navigate("/summary");
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>
          {/* //sx={{ backgroundColor: "lightblue" }} */}
          <Grid item xs={4}  sx={{bgcolor:"white"}}>
          <Grid container spacing={1}>
  <Grid item xs={3}>
  <Box
              component="img"
              alt="The house from the offer."
              src={require("../../images/dianesmacbookonlypic.png")}
              sx={{
                width: 40   
              }}
            />
  </Grid>
  <Grid item xs={9}>
    <Stack>
    <Box sx={{typography: 'subtitle1', fontWeight: 'bold', alignment: 'left'  }}>Diane's Macbook</Box>
    <Box sx={{typography: 'subtitle2', fontWeight: '', alignment: 'left' }}>MacBook Pro</Box>
    </Stack>
  </Grid>
  </Grid>


            
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"Policy number"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"123456789"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Divider style={{width:'100%'}} />
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"Serial number"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"0987654321"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Divider style={{width:'100%'}} />
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"Policy Start Date"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"01/01/2021"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Divider style={{width:'100%'}} />
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"Policy End Date"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  defaultValue={"12/12/2022"}
                  //   value="File a Claim"
                  sx={{
                    height: 47,
                    width: 200,
                    //bgcolor: "primary.main",
                  }}
                />
              </Grid>
              <Divider style={{width:'100%'}} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box
        component="img"
        alt="The house from the offer."
        src={require("../../images/footer.png")}
        sx={{
          width: "100%",
          marginTop: 5,
        }}
      />
    </Stack>
  );
}

export default ServiceFul;
