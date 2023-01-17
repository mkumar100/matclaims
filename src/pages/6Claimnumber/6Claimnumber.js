import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Stack } from "@mui/system"; ////AdapterDayjs//DesktopDatePickerTextareaAutosize
//FormControlLabelTypography
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
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
//import "../4ServiceFulfillment/4ServiceFulfillment.css";
import HorizontalLabelPositionBelowStepper from "../../components/HorizontalLabelPositionBelowStepper";
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

export default function Claimnumber(props) {
  const navigate = useNavigate();

  const { classes } = props;
  return (
    <Container maxWidth={false} sx={{bgcolor:"lightgrey"}}>
    {/* <Stack> */}
      <Box><Navbar/></Box>
      <Grid container spacing={0} sx={{ bgcolor: "primary.main", display: "flex", height: "30", alignItems: "center", color:"white" }}>
        <Grid item xs={1}>
          <Typography></Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography sx={{ height: 38,  }}>File a Claim</Typography>
        </Grid>
      </Grid>

      {/* sx={{ backgroundColor: "lightgrey" }} */}
      <Container>
        <Grid container spacing={4} sx={{ marginTop: "0" }}>
          <Grid item xs={8} sx={{bgcolor:"white"}}>
          <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Claim Number: DXZY98675243</Box>
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
                    defaultValue={"Lorem Lipsum...  "}
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
            <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Deductible Fee</Box>
              
                <Box sx={{width:"100%"}}>
                <Grid container spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  >
                  <Grid item xs={3}>
                  <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Thank you. Your claim details have been approved.</Box>
                  </Grid> 
                  <Box
                    component="img"
                    alt="The house from the offer."
                    src={require("../../images/barclayCard.png")}
                  />  
                                 
                </Grid>
                </Box>

                
              
              <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Claim Details</Box>
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
            </Box>
            <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Fulfillment Information</Box>
            <Stack>
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
              </Box>
              <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Personal Information</Box>
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
                    defaultValue={"Full Name"}
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
                    defaultValue={"Steve Smith"}
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
              </Box>
              <Box sx={{typography: 'body2', fontWeight: 'bold' }}>Claim History</Box>
              <Box>
                <Stack>
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
                      defaultValue={"Claim Submitted"}
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
                    <TextField
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                        style: { fontSize: 12 },

                        rows: 2,
                        maxRows: 4,
                      }}
                      defaultValue={"Date Reported"}
                      //   value="File a Claim"
                      sx={{
                        height: 25,
                        width: 835,
                        bgcolor: "",
                        fontSize: "1",
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Stack>
            <Box>
              <Button
                variant="contained"
                sx={{ marginRight: 50, marginLeft: 5, marginBottom: 3}}
                onClick={() => {
                  navigate("/");
                }}
              >
                Go to Claims Dashboard
              </Button>
              <Button onClick={() => {}}></Button>
            </Box>
          </Grid>
          {/* require("../../images/dianesmacbook.png") */}
          {/* sx={{ backgroundColor: "lightblue" }} */}
          <Grid item xs={4} sx={{bgcolor:"white"}}>
            <Box
              component="img"
              src=""
              sx={{
                width: 400,
                marginBottom: 0,
              }}
            />
            <Grid container spacing={0}>
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
            <Grid item xs={6}>
            <Stack>
    <Box sx={{typography: 'subtitle1', fontWeight: 'bold', alignment: 'left'  }}>Diane's Macbook</Box>
    <Box sx={{typography: 'subtitle2', fontWeight: '', alignment: 'left' }}>MacBook Pro</Box>
    </Stack>
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
                    defaultValue={"Policy number"}
                    //   value="File a Claim"
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
                    defaultValue={"12345678"}
                    //   value="File a Claim"
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
                    defaultValue={"Serial number"}
                    //   value="File a Claim"
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
                    //   value="File a Claim"
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
                    defaultValue={"Policy start date"}
                    //   value="File a Claim"
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
                    //   value="File a Claim"
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
                    //   value="File a Claim"
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
                    //   value="File a Claim"
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
          width: "100%",
          marginTop: 5,
        }}
      />
    {/* </Stack> */}
    </Container>
  );
}
