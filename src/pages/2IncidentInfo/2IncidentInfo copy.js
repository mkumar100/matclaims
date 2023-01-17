import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import IncidentInfoStepper from "../../components/2IncidentInfoStepper";
import Navbar from "../../components/navbar";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

export default function IncidentInfo() {
  const navigate = useNavigate();
  return (
    <>
      {/* backgroundColor: "lightgrey", */}
      <Stack
        sx={{
          width: "100%",//1262
          bgcolor: "lightgrey"
        }}
      >
        <Box><Navbar/></Box>
        <Grid container spacing={0} sx={{ bgcolor: "primary.main", height: "10" }}>
          <Grid item xs={1}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography sx={{ height: 38, color: "white", display: 'flex', alignItems: 'center' }}>File a Claim</Typography>
          </Grid>
          
        </Grid>
        </Stack>
        
       
        <Stack
          sx={{
            width: 800,
          }}
        >
          <Box
            sx={{
              marginLeft: 20,
              marginTop: 5,
              flexGrow: 1,
              height: 47,
              width: 880,
              bgcolor: "", //primary.main
            }}
          >
            {/* lightgrey */}
            <Grid container spacing={4} sx={{ backgroundColor: "grey" }}>
              <Grid item xs={8} sx={{ backgroundColor: "" }}>
                <Stack
                  sx={{
                    width: 600,
                    backgroundColor: "", //green
                  }}
                >
                  <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Incident Information</Box>
                  <Box>
                    <TextField
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                        style: { fontSize: 10 },
                      }}
                      defaultValue={"Step 1 of 4"}
                      sx={{
                        height: 25,
                        width: 600,
                        bgcolor: "",
                        fontSize: "1",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: 100,
                      width: 600, //835
                      bgcolor: "",
                      fontSize: "1",
                      justifyContent: "flex-start",
                    }}
                  >
                    <IncidentInfoStepper />
                  </Box>
                  <Box>
                    <TextField
                      id="readonly-input"
                      defaultValue="Please tell us what happened"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                      }}
                      sx={{
                        width: 600,
                        size: "small",
                        noBorder: {
                          border: "none",
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Date of incident"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                        fullWidth: false,
                      }}
                      sx={{
                        height: 47,
                        width: 1000,
                        size: "small",
                        noBorder: {
                          border: "none",
                        },
                      }}
                    ></TextField>
                    <Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          inputFormat="MM/DD/YYYY"
                          // value={}
                          // onChange={handleChange}

                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Box>
                  </Box>
                  <Box>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Describe the issue or reason for your request."
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                      }}
                      sx={{
                        height: 47,
                        width: 600,
                        size: "small",
                        noBorder: {
                          border: "none",
                        },
                      }}
                    ></TextField>
                    <TextField
                      id="outlined-multiline-flexible"
                      label=""
                      multiline
                      rows={4}
                      onChange={() => {}}
                      placeholder=""
                      defaultValue={"The screen is not working"}
                      sx={{ width: 400 }}
                    />
                  </Box>
                  <TextField
                    id="outlined-read-only-input"
                    defaultValue="Select the reason for your claim/request.   "
                    multiline
                    rows={4}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                    }}
                    sx={{
                      height: 47,
                      width: 600,
                      size: "small",
                      noBorder: {
                        border: "none",
                      },
                    }}
                  ></TextField>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    sx={{ width: 400 }}
                    // onChange={handleChange}
                  >
                    <MenuItem value={1}>e.g. Placeholder</MenuItem>
                    <MenuItem value={2}>abc</MenuItem>
                  </Select>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="I agree to Terms of Use and acknowledge that I have reviewed the message."
                      defaultChecked
                    />
                  </FormGroup>
                  <Box sx={{ width: 600 }}>
                    <Button
                      variant="outlined"
                      sx={{ marginRight: 50, marginLeft: 0 }}
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/svcoptions");
                      }}
                      sx={{ marginRight: 0 }}
                    >
                      Next
                    </Button>
                  </Box>
                  
                </Stack>
              </Grid>
              {/* <Grid item xs={4} sx={{ backgroundColor: "lightblue" }}> */}
              <Grid item xs={4}>
                <Box
                  component="img"
                  src={require("../../images/dianesmacbook.png")}
                  sx={{
                    width: 400,
                    marginBottom: 0,
                  }}
                />
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
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
                    component="img"
                    alt="The house from the offer."
                    src={require("../../images/footer.png")}
                    sx={{
                      width: "100%",//1262
                      marginTop: 5,
                    }}
                  />
        </Stack>
        
      
    </>
  );
}
