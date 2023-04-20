import React, { useState } from "react";
import "../css/login.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMes, setErrorMes] = useState('');

    const handleSubmit = async (e) => { //onSubmit --> post
        e.preventDefault();
        try{
            //send post request to the 'api/users' endpoint
            const response = await axios
            .get(`http://localhost:5000/api/findUsers/${email}`)
            .then(
                // response will now hold the response data
            )
            .catch((error) => {
                console.log("axios error: ", error);
            });
            sessionStorage.setItem('userID', response.data[0]._id);
            //checks if password is correct
            if (response.data[0].password === password)
            {
                //alert to show userID and email if login is correct
                alert("user email: " + response.data[0].email + "\n" + "user ID: " + response.data[0]._id);
                //navigates to summary after login has been authenticated
                navigate('/summary');
            } else {
                //error message if password is not correct
                setErrorMes("The password you have entered is incorrect");
            }
            
        } catch (error) {
            console.error("try catch error: ", error);
        }
    };

    //show or hide password
    const [state, setState] = useState(false);

    const toggleBtn = () => {
        setState(prevState => !prevState);
    }


    return (
        <>
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
                </>

                    <section className="container">
                        <div className="form login">
                            <div className="form-content">
                                <header>Login</header>
                                <form action="#" onSubmit={handleSubmit}>
                                    {errorMes && <p style={{color: "red"}}>{errorMes}</p>}
                                    <div className="field input-field">
                                        <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>

                                    <div className="field input-field">
                                        <input type={state ? "text" : "password"} placeholder="Password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        <div onClick={toggleBtn}>
                                            <i className={state ? "bx bx-show eye-icon" : "bx bx-hide eye-icon"}></i>
                                        </div>
                                    </div>

                                    <div className="form-link">
                                        <NavLink to=" " className="forgot-pass">Forgot password?</NavLink>
                                    </div>

                                    <div className="field button-field">
                                        <button type="submit">Login</button>
                                    </div>

                                    <div className="form-link">
                                        <span>Don't have an account? <Link to='/Register' className="link sign-up-link">Sign Up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
        </>
    );
}

export default Login;