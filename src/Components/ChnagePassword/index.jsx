import {
  Button,
  IconButton,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import style from "./index.module.css";
export default function ChangePassword() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);
  return (
    <div className={style.home}>
      <div className={style.form}>
        <h1>Change Password</h1>
        <hr />
        <div className={style.formControl}>
          <div>
            <label htmlFor="old">Enter Your Old Password</label>
            <Input
              type={!show1 ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow1(!show1)}>
                    {show1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              className={style.input}
              label="Ener Old Password"
              variant="outlined"
            />
          </div>
          <div>
            <label htmlFor="old">Enter Your Old Password</label>
            <Input
              type={!show2 ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow2(!show2)}>
                    {show2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              className={style.input}
              label="Ener Old Password"
              variant="outlined"
            />
          </div>
          <div>
            <label htmlFor="old">Enter Your Old Password</label>
            <Input
              type={!show3 ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShow3(!show3)}>
                    {show3 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              className={style.input}
              label="Ener Old Password"
              variant="outlined"
            />
          </div>
          <div className={style.buttons}>
            <Button variant="contained" color="primary">
              {" "}
              Change Password{" "}
            </Button>
            <Button variant="outlined"> Cancel </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
