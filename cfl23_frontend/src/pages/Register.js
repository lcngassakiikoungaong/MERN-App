/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setErrorMessage] = useState('');

    const handleSubmit = async (e) => { //onSubmit --> post
        e.preventDefault();
        try{
            //send post request to the 'api/users' endpoint
            const response = await axios.post('http://localhost:5000/api/users', { 
                firstName,
                lastName,
                email,
                password,
            });
            console.log("Response = " + response.data);
            setFirstName('');
            setLastName('');
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error(error);
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        navigate('/summary');
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
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </>

            <section className="container">
                <div className="form login" id="regis">
                    <div className="form-content">
                        <header>Register</header>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="field input-field">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field input-field">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field input-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field input-field">
                                <input
                                    type={state ? "text" : "password"}
                                    placeholder="Password"
                                    className="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div onClick={toggleBtn}>
                                    <i className={state ? "bx bx-show eye-icon" : "bx bx-hide eye-icon"}></i>
                                </div>
                            </div>
                            <div className="field input-field">
                                <input
                                    type={state ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="field button-field">
                                <button type="submit">Register</button>
                                
                            </div>

                            <div className="form-link">
                                <span>Already have an account? <Link to="/" className="link login-link">Login</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;