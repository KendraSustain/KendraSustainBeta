import React, { useState, useContext, useEffect } from 'react';
import styles from './Login.module.css';
import Cookies from 'js-cookie';
import { Context } from '../../context/Contexts';
import { register, getToken } from '../../http';
import Spinner from '../../components/Spinner/Spinner';

const Login = () => {
    const [active, setActive] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [spinner, setSpinner] = useState(false);
    const context = useContext(Context);

    useEffect(() => {
        context.setShowNavTop(false);
    }, [context]);

    const signIn = async (event) => {
        setSpinner(true);
        event.preventDefault();
        let loginData = `grant_type=&username=${email}&password=${signinPassword}&scope=&client_id=&client_secret=`;
        // context.setAuth(true);
        try {
            const { data } = await getToken(loginData);
            await Cookies.set('tok_sustain', data.access_token, { expires: 480 / 48 });
            context.setAuth(true);
        } catch (error) {
            console.log("Unable to login");
        }
        setSpinner(false);
    }

    const signUp = async (event) => {
        setSpinner(true);
        event.preventDefault();
        let jsonData = {
            "firstname": firstName,
            "lastname": lastName,
            "email": email,
            "company": organization,
            "hashed_password": signupPassword
        };
        try {
            await register(jsonData);
            setActive(false);
            setSpinner(false);
        } catch (error) {
            console.log("Unable to signup");
        }
    }

    return (
        <div className={[styles.container, active ? styles.signUpMode : ""].join(" ")}>
            <div className={styles.formsContainer}>
                <div className={styles.signinSignup}>
                    <form onSubmit={signIn} className={[styles.signInForm, styles.form].join(" ")}>
                        <h2 className={styles.title}>Sign in</h2>
                        <div className={styles.inputField}>
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" spellCheck={false} required={true} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.inputField}>
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" spellCheck={false} required={true} minLength="8" onChange={(e) => setSigninPassword(e.target.value)} />
                        </div>
                        <div className={styles.buttonWrapper}>
                            <input type="submit" value="Login" className={[styles.btn, styles.solid].join(" ")} />
                            {spinner ? <Spinner /> : ""}
                        </div>
                        <p className={styles.socialText}>Or Sign in with social platforms</p>
                        <div className={styles.socialMedia}>
                            <a href="#!" className={styles.socialIcon}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            {/* <a href="#!" className={styles.socialIcon}>
                                <i className="fab fa-twitter"></i>
                            </a> */}
                            <a href="#!" className={styles.socialIcon}>
                                <i className="fab fa-google"></i>
                            </a>
                            {/* <a href="#!" className={styles.socialIcon}>
                                <i className="fab fa-linkedin-in"></i>
                            </a> */}
                            <a href="#!" className={styles.socialIcon}>
                                <i className="fab fa-microsoft"></i>
                            </a>
                        </div>
                    </form>
                    <form onSubmit={signUp} className={[styles.signUpForm, styles.form].join(" ")}>
                        <h2 className={styles.title}>Sign up</h2>
                        <div className={styles.inputField}>
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Firstname" value={firstName} spellCheck={false} required={true} onChange={(e) => setFirstName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
                        </div>
                        <div className={styles.inputField}>
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Lastname" value={lastName} spellCheck={false} required={true} onChange={(e) => setLastName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
                        </div>
                        <div className={styles.inputField}>
                            <i className="fas fa-building"></i>
                            <input type="text" placeholder="Organization" value={organization} spellCheck={false} required={true} onChange={(e) => setOrganization(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))} />
                        </div>
                        <div className={styles.inputField}>
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" spellCheck={false} required={true} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.inputField}>
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" spellCheck={false} required={true} minLength="8" onChange={(e) => setSignupPassword(e.target.value)} />
                        </div>
                        <div className={styles.buttonWrapper}>
                            <input type="submit" className={styles.btn} value="Sign up" />
                            {spinner ? <Spinner /> : ""}
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.panelsContainer}>
                <div className={[styles.panel, styles.leftPanel].join(" ")}>
                    <div className={styles.content}>
                        <img style={{ width: '200px' }} src="/images/kendra-white-full.png" alt="Kendra" />
                        <h3>New here ?</h3>
                        <p>
                            Welcome to   <span>Kendra Sustain!</span>
                            <br />Enabling Organizations to Embed Data driven Sustainability Decision-Making across business operations.
                        </p>
                        <button className={[styles.btn, styles.transparent].join(" ")} onClick={() => setActive(true)} >
                            Sign up
                        </button>
                    </div>
                    <img src="/images/log.svg" className={styles.image} alt="log" />
                </div>
                <div className={[styles.panel, styles.rightPanel].join(" ")}>
                    <div className={styles.content}>
                        <img style={{ width: '200px' }} src="/images/kendra-white-full.png" alt="Kendra" />
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className={[styles.btn, styles.transparent].join(" ")} onClick={() => setActive(false)} >
                            Log in
                        </button>
                    </div>
                    <img src="/images/register.svg" className={styles.image} alt="register" />
                </div>
            </div>
        </div>
    )
}

export default Login;
