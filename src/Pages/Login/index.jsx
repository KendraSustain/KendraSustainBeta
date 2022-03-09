import React, { useState, useEffect } from "react";
import log from "../../Assets/Images/log.svg";
import Kendra from "../../Assets/Images/kendra-white-full.png";
import register_svg from "../../Assets/Images/register.svg";
import { Spinner } from "../../Components";
import { createUser, getToken, getUser } from "../../Auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const run = async () => {
      // const user = await getUser();
      // if (user.success) navigate("/dashboard");
    };
    run();
  }, [navigate]);

  const signIn = async (event) => {
    event.preventDefault();
    setSpinner(true);
    try {
      const auth = await getToken({
        username: email,
        password: signinPassword,
      });
      if (auth.success) {
        localStorage.setItem("authToken", auth.authToken);
        navigate("/dashboard");
      } else console.log("Unable to login");
    } catch (error) {
      console.log(error);
    }
    setSpinner(false);
  };

  const signUp = async (event) => {
    setSpinner(true);
    event.preventDefault();
    let jsonData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      company: organization,
      hashed_password: signupPassword,
    };
    createUser(jsonData);
  };

  return (
    <div className={["loginPage", active ? "signUpMode" : ""].join(" ")}>
      <div className={"formsContainer"}>
        <div className={"signinSignup"}>
          <form onSubmit={signIn} className={["signInForm", "form"].join(" ")}>
            <h2 className={"title"}>Sign in</h2>
            <div className={"inputField"}>
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                spellCheck={false}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={"inputField"}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                spellCheck={false}
                required={true}
                minLength="8"
                onChange={(e) => setSigninPassword(e.target.value)}
              />
            </div>
            <div className={"buttonWrapper"}>
              <input
                type="submit"
                value="Login"
                className={["btn", "solid"].join(" ")}
              />
              {spinner ? <Spinner /> : ""}
            </div>
            <p className={"socialText"}>Or Sign in with social platforms</p>
            <div className={"socialMedia"}>
              <a href="#!" className={"socialIcon"}>
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="#!" className={"socialIcon"}>
                                <i className="fab fa-twitter"></i>
                            </a> */}
              <a href="#!" className={"socialIcon"}>
                <i className="fab fa-google"></i>
              </a>
              {/* <a href="#!" className={"socialIcon"}>
                                <i className="fab fa-linkedin-in"></i>
                            </a> */}
              <a href="#!" className={"socialIcon"}>
                <i className="fab fa-microsoft"></i>
              </a>
            </div>
          </form>
          <form onSubmit={signUp} className={["signUpForm", "form"].join(" ")}>
            <h2 className={"title"}>Sign up</h2>
            <div className={"inputField"}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Firstname"
                value={firstName}
                spellCheck={false}
                required={true}
                onChange={(e) =>
                  setFirstName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
            <div className={"inputField"}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Lastname"
                value={lastName}
                spellCheck={false}
                required={true}
                onChange={(e) =>
                  setLastName(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
            <div className={"inputField"}>
              <i className="fas fa-building"></i>
              <input
                type="text"
                placeholder="Organization"
                value={organization}
                spellCheck={false}
                required={true}
                onChange={(e) =>
                  setOrganization(
                    e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1)
                  )
                }
              />
            </div>
            <div className={"inputField"}>
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                spellCheck={false}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={"inputField"}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                spellCheck={false}
                required={true}
                minLength="8"
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </div>
            <div className={"buttonWrapper"}>
              <input type="submit" className={"btn"} value="Sign up" />
              {spinner ? <Spinner /> : ""}
            </div>
          </form>
        </div>
      </div>

      <div className={"panelsContainer"}>
        <div className={["panel", "leftPanel"].join(" ")}>
          <div className={"content"}>
            <img style={{ width: "200px" }} src={Kendra} alt="Kendra" />
            <span
              style={{ marginLeft: "5px", color: "white", fontSize: "12px" }}
            >
              Beta
            </span>
            <h3>New here ?</h3>
            <p>
              Welcome to <span>Kendra Sustain!</span>
              <br />
              Enabling Organizations to Embed Data driven Sustainability
              Decision-Making across business operations.
            </p>
            <button
              className={["btn", "transparent"].join(" ")}
              onClick={() => setActive(true)}
            >
              Sign up
            </button>
          </div>
          <img src={log} className={"image"} alt="log" />
        </div>
        <div className={["panel", "rightPanel"].join(" ")}>
          <div className={"content"}>
            <img style={{ width: "200px" }} src={Kendra} alt="Kendra" />
            <span
              style={{ marginLeft: "5px", color: "white", fontSize: "12px" }}
            >
              Beta
            </span>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className={["btn", "transparent"].join(" ")}
              onClick={() => setActive(false)}
            >
              Log in
            </button>
          </div>
          <img src={register_svg} className={"image"} alt="register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
