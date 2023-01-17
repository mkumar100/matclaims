import * as React from "react";
import Box from "@mui/material/Box";
//import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
//import FormGroup from "@mui/material/FormGroup"; //
import FormControl from "@mui/material/FormControl"; //
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select"; //MenuItem
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
//import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Typography } from "@mui/material";
import NavbarPreQualif from "../../components/navbarPreQualif";
import { styled } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';

const ClaimPreQualification = () => {
  const navigate = useNavigate();

  const StyledTypography = styled(Typography)(({ theme }) => ({
    //borderRadius: 4,
    //border: '1px solid',
    //borderColor: theme.palette.primary.main,
    //backgroundColor: 'gold',
    maxHeight: '1.5rem',
    padding: 4,
    margin: 8,
    fontWeight: "bold",
  }));

  const defaultStyling = {
    //border: '1px solid gray',
    //backgroundColor: 'rgba(20,20,20,0.4)',
    backgroundColor: "lightblue",
    width: "100%",
    height: 38
  }

  return (
    <>
       <Container sx={{ width: "100%" }}>{/*{{ width: 800 }} */}
        <Stack spacing={0} sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}><NavbarPreQualif/></Box>
          {/* <Grid container spacing={0} sx={{ bgcolor: "lightblue" }}></Grid> */}
          <Grid container spacing={0}>
            <Grid item xs={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', ...defaultStyling }}>
              <StyledTypography></StyledTypography> 
            </Box>
            </Grid>
            <Grid item xs={11} sx={{ height: 38}}>
            <Box sx={{ display: 'flex', alignItems: 'center', ...defaultStyling }}>
              <StyledTypography>File a Claim</StyledTypography> 
            </Box>
            </Grid>
          </Grid>
          <Container maxWidth="sm">
            <Stack>
              
              
            <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Claim Pre-Qualification</Box>
            

              <Box>
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="To get started with the claim process, please answer the following questions."
                  variant="standard"
                  size="small"
                  InputProps={{
                    readOnly: true,
                    disableUnderline: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                  }}
                />
              </Box>
              <Box>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ fontWeight: "bold" }}
                  >
                    Do you still have possession of the device?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="Yes, I have the device"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No, I do not have the device"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <hr></hr>
              <Box>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ fontWeight: "bold" }}
                  >
                    Is your device damaged in some way?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="Yes, I have the device"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No, I do not have the device"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <hr></hr>
              <Box>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ fontWeight: "bold" }}
                  >
                    Confirm the device Category, Brand and Model or select this
                    information below.
                  </FormLabel>

                  <Box sx={{ float: "left" }}>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Device Type"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                      }}
                      sx={{
                        height: 47,
                        width: 880,
                        size: "small",
                        noBorder: {
                          border: "none",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={1}
                        // onChange={handleChange}
                        sx={{ width: 400 }}
                      >
                        <MenuItem value={1}>Laptop</MenuItem>
                        <MenuItem value={2}>abc</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </FormControl>
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Brand"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="Apple"
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 47,
                    width: 400,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Model"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="Macbook pro"
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 47,
                    width: 400,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Device Nickname"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="Diane's macbook"
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 47,
                    width: 400,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Serial Number (Optional)"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="9834526740"
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 47,
                    width: 400,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Purchase Price $"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <TextField
                  label=""
                  id="filled-size-small"
                  defaultValue="$ 2000"
                  variant="outlined"
                  size="small"
                  sx={{
                    height: 47,
                    width: 400,
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Purchase Date"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  // size="medium"
                  sx={{
                    height: 47,
                    width: 400,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      // label="Date desktop"
                      inputFormat="MM/DD/YYYY"
                      // value={}
                      onChange={() => {}}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box>
                <TextField
                  id="outlined-read-only-input"
                  defaultValue="Upon completion you'll be taken to our Assurant claims site."
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                  }}
                  sx={{
                    height: 47,
                    width: 880,
                    size: "small",
                    noBorder: {
                      border: "none",
                    },
                  }}
                />
              </Box>
              <Box>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  // style={{ minHeight: "100vh" }}
                >
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ borderRadius: 50 }}
                      onClick={() => {
                        navigate("/incidentinfo");
                      }}
                    >
                      Start a Claim
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Container>
          <Box
            component="img"
            alt="The house from the offer."
            src={require("../../images/footer.png")}
            sx={{ marginTop: 5 }}
          />
        </Stack>
      </Container>
    </>
  );
};

export default ClaimPreQualification;

const Item = function () {
  return <h2>File a Claim</h2>;
};
