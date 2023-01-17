import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
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
//import LocalizationProvider from "@mui/material/LocalizationProvider";
//import AdapterDayjs from "@mui/material/AdapterDayjs";
//import { DesktopDatePicker } from "@mui/DesktopDatePicker";
//import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import "../4ServiceFulfillment/4ServiceFulfillment.css";
import SummaryStepper from "../../components/5SummaryStepper";
import Navbar from "../../components/navbar";
import { withStyles } from "@material-ui/styles";
import Divider from '@mui/material/Divider';

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
  return (
    <Stack sx={{bgcolor:"lightgrey"}}>
      <Box><Navbar/></Box>
      <Grid container spacing={0} sx={{ bgcolor: "primary.main", height: "30" }}>
      <Grid item xs={1}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={11}>
            <WhiteTextTypography sx={{ height: 38,display: 'flex', alignItems: 'center' }}>File a Claim</WhiteTextTypography>
          </Grid>
      </Grid>
      <Container>
        {/* sx={{ backgroundColor: "lightgrey" }} */}
        <Grid container spacing={10}>
          <Grid item xs={8} sx={{bgcolor:"white"}}>
            <Box>
            <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Summary</Box>
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
              <SummaryStepper />
            </Box>
            <Box>
            <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Claim Details</Box>
            </Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Date of Incident"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"21/10/2022"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Description"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Lorem lipsum is typed here."}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Reason for claim"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"My product is not functioning properly"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
              </Grid>
              <Box>
              <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Fulfillment Information</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Reason for claim"}
                    //   value="File a Claim"
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Lorem lipsum is typed here."}
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
              </Grid>
              <Box>
              <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Personal Information</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Reason for claim"}
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Lorem lipsum is typed here."}
                
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{ marginRight: 50, marginLeft: 5, marginBottom: 3}}
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
                  navigate("/claim");
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{bgcolor:"white"}}>
         <Box>
         <Grid container spacing={2}>
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
         </Box>
          
            <Grid container spacing={0}>
              <Grid item xs={6}>
              <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Policy Number"}
        
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
              </Grid>
              <Grid item xs={6}>
              <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"123456789"}
             
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
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
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Serial Number"}
     
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
              </Grid>
              <Grid item xs={6}>
              <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"987654321"}
            
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
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
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Policy Start Date"}
                   
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
              </Grid>
              <Grid item xs={6}>
              <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"01/01/2021"}
                   
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
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
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"Policy End Date"}
                  
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
                    }}
                  />
              </Grid>
              <Grid item xs={6}>
              <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 12 },

                      rows: 2,
                      maxRows: 4,
                    }}
                    defaultValue={"12/12/2022"}
              
                    sx={{
                      height: 25,
                      width: 835,
                      bgcolor: "",
                      fontSize: "1",
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
          width: "100%",//1262,
          marginTop: 5,
        }}
      />
    </Stack>
  );
}

export default ServiceFul;
