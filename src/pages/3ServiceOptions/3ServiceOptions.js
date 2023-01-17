import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from '@mui/material/Divider';

import CardActions from "@mui/material/CardActions";
//import MailInRepair from "../../components/MailInRepair";
import ServiceOptionsStepper from "../../components/3ServiceOptionsStepper";
import { withStyles } from "@material-ui/styles";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Navbar from "../../components/navbar";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
    backgroundColor: "primary.main"
  }
})(Typography);

export default function ServiceOptions() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          width: "100%",//1262
          bgcolor: "lightgrey"
        }}
      >
        <Box><Navbar/></Box>
        <Grid container spacing={0} sx={{ bgcolor: "primary.main", height: "30" }}>
          <Grid item xs={1}>
            <Typography></Typography>
          </Grid> 
          <Grid item xs={11}>
            <WhiteTextTypography sx={{ height: 38,display: 'flex', alignItems: 'center' }}>File a Claim</WhiteTextTypography>
          </Grid>
        </Grid>
        <Container sx={{marginTop:5}}>
          <Grid container spacing={2}>
            <Grid item xs={8} sx={{bgcolor:"white"}}>
              <Stack spacing={2}>
              <Box sx={{typography: 'body1', fontWeight: 'bold' }}>Service Options</Box>
                <Box>
                  <TextField
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      readOnly: true,
                      style: { fontSize: 10 },
                    }}
                    defaultValue={"Step 2 of 4"}
                    //   value="File a Claim"
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
                    width: 600,
                    bgcolor: "",
                    fontSize: "1",
                  }}
                >
                  <ServiceOptionsStepper />
                </Box>

                <Box>
                  <TextField
                    id="readonly-input"
                    defaultValue="Select how you would like your product to be serviced"
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
                    id="readonly-input"
                    multiline
                    defaultValue="Service Option(s) are for your product located at:
                      1155 Ponce DeLeon Long address name Ave, Atlanta, GA, 12345"
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
                      backgroundColor: "lightblue",
                    }}
                  />
                </Box>
                <Box sx={{ flexGrow: 1, margin: 0 }}>
                  <Grid container spacing={1} margin={0}>
                    <Grid item xs={6} margin={0}>
                      {/* <Item>xs=8</Item> */}
                      {/* //minWidth: 275 */}
                      <Box
                        sx={{ width: 275, margin:0, padding:0 }}
                      >
                        <Card sx={{ width: 275, margin: 0 }}>
                        <CardActionArea href="https://google.com">
                          <CardContent>
                            <Typography
                              sx={{
                                fontSize: 14,
                                fontWeight: "bold",
                                width: "40%",
                              }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Mail in Repair
                            </Typography>
                            <Typography variant="body2">
                              If your claim is approved, we will send you a
                              shipping label so you can send us your defective
                              device for repair.
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14, fontWeight: "bold" }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Deductible $89.00
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ width: 275 }}>
                      <Box
                        sx={{ width: 275 }}
                      >
                        <Card sx={{ minWidth: 275, margin:0}}>
                          <CardActionArea href="https://amazon.in" sx={{margin:0}}>
                            <CardContent sx={{margin:0}}>
                            <Typography
                              sx={{ fontSize: 14, fontWeight: "bold", margin:0 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              In Store Repair
                            </Typography>
                            <Typography variant="body2">
                              You will be given a choice of which repair
                              facility to take your device.
                            </Typography>
                            <Typography
                              sx={{ fontSize: 14, fontWeight: "bold" }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Deductible $89.00
                            </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box >
                        <Card sx={{ minWidth: 275 }}>
                          <CardActionArea href="https://youtube.com">
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14, fontWeight: "bold" }}
                              color="text.secondary"
                              gutterBottom
                            >
                              Reimbursement
                            </Typography>
                            <Typography variant="body2">
                              We'll reimburse you quickly and conveniently.
                            </Typography>
                          </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: 50, marginLeft: 5, marginBottom:2 }}
                    onClick={() => {
                      navigate("/incidentinfo");
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/svcful");
                    }}
                    sx={{marginBottom:2 }}
                  >
                    Next
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4}  sx={{bgcolor:"white"}}>
              <Stack>
                <Box>
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
                </Box>

                <Box>
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
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Box></Box>
          <Box></Box>
        </Container>
        <Box
          component="img"
          alt="The house from the offer."
          src={require("../../images/footer.png")}
          sx={{
            width: "100%",//1262
            marginTop: 5,
          }}
        />
        <Container>
          <Box
            sx={{
              marginLeft: 20,
              marginTop: 20,
              flexGrow: 1,
              height: 47,
              width: 880,
              bgcolor: "", //primary.main
            }}
          >
            <Grid container spacing={4} sx={{ backgroundColor: "grey" }}>
              <Grid item xs={8} sx={{ backgroundColor: "" }}>
                <Stack
                  sx={{
                    width: 600,
                    backgroundColor: "", //green
                  }}
                ></Stack>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Box>
        </Container>
      </Stack>
    </>
  );
}
