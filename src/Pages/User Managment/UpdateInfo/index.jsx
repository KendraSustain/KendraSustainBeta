import { Grid } from "@mui/material";
import  "./Profilesettings.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const Profilesettings = () => {
  const [Country, setCountry] = useState("");
  const [PN, setPN] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleChange2 = (event) => {
    setPN(event.target.value);
  };

  return (
    <div className="home">
      <Card className="profilebox2" xs={8} sm={8} md={8} lg={10}>
        <Grid className="titlebox">
          <Grid className="proftitle">Personal Info</Grid>
          <Grid>
            <i class="fas fa-pen-square"></i>
          </Grid>
        </Grid>
        <hr style={{ width: "947px", margin: "20px" }} />
        <Grid>
          <Grid
            style={{ display: "block", padding: "20px", textAlign: "center" }}
          >
            <img
              src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
              width={"100px"}
              height={"100px"}
              alt="..."
            />
            <br />
            <button className="changeimgbtn">Change Profile Picture</button>
          </Grid>
          <Grid display={"flex"}>
            <Grid className="pswrdchange" xs={8} sm={8} md={8} lg={10}>
              <p>User Name</p>
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                className="pswrdinput"
              />
            </Grid>
            <Grid className="pswrdchange" xs={8} sm={8} md={8} lg={10}>
              <p>Email</p>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="pswrdinput"
              />
            </Grid>
          </Grid>
          <Grid display={"flex"}>
            <Grid className="pswrdchange" xs={8} sm={8} md={8} lg={10}>
              <p>Address</p>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                className="pswrdinput"
              />
            </Grid>
            <Grid className="twoinputs" xs={8} sm={8} md={8} lg={12}>
              <Grid className="pswrdchange">
                <p>Country</p>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    className="smlinput"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Country}
                    label="Country"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>France</MenuItem>
                    <MenuItem value={2}>United state</MenuItem>
                    <MenuItem value={3}>China</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid className="pswrdchange">
                <p>Phone Number</p>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Phone Number
                  </InputLabel>
                  <Select
                    className="smlinput"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={PN}
                    label="Phone Number"
                    onChange={handleChange2}
                  >
                    <MenuItem value={11}>+011</MenuItem>
                    <MenuItem value={44}>+44</MenuItem>
                    <MenuItem value={1}>+1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Grid className="btngrid" xs={12} sm={12} md={15} lg={20}>
        <button className="cnclbtn">Cancel</button>
        <button className="updatebtn">Save</button>
      </Grid>
    </div>
  );
};

export default Profilesettings;
