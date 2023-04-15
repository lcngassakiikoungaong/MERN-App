import React, { useEffect, useState } from "react";
import "../css/login.css";
import LoadingLogo from "../images/logo.jpeg";
import { NavLink, Link } from "react-router-dom";

function Login() {

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => { //loading screen timer
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setloading(true);
                });
        }, 2000);
    }, []);


    return (
        <>
            {!loading ? (
                <div className="spinner">
                    <span><img src={LoadingLogo} alt="LoadingLogo" /></span>
                </div>
            ) : (
                <>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Sign in/Sign Up</title>
                    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
                        rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />


                    <section className="container">
                        <div className="form login">
                            <div className="form-content">
                                <header>Login</header>
                                <form action="#">
                                    <div className="field input-field">
                                        <input type="email" placeholder="Email" className="input" value={email} onChange={(email) => setEmail(email)} />
                                    </div>

                                    <div className="field input-field">
                                        <input type="password" placeholder="Password" className="password" value={password} onChange={(password) => setPassword(password)} />
                                        <i className="bx bx-hide eye-icon"></i>
                                    </div>

                                    <div className="form-link">
                                        <NavLink to=" " className="forgot-pass">Forgot password?</NavLink>
                                    </div>

                                    <div className="field button-field">
                                        <NavLink to="./summary"><button type="button">Login</button></NavLink>
                                    </div>

                                    <div className="form-link">
                                        <span>Don't have an account? <Link to="/Register" className="link sign-up-link">Sign Up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Login;