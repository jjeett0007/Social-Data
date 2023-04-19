import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Back from "../Back";

const Login = () => {
    const [email, setEmail] = useState("John@doe.com");
    const [password, setPassword] = useState("Password");
    const [error, setError] = useState();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    // const firstName = localStorage.getItem("firstname");
    // const lastName = localStorage.getItem("lastname");
    // console.log(firstName, lastName);

    if (token) {
        window.location = '/profile';
    }



    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3001/login', data);
            // const { token } = response.data;
            const { id } = response.data;

            localStorage.setItem("token", response.data.token, token);
            localStorage.setItem("userId", response.data.id, id);
            console.log(response.data);
            console.log(id);
            navigate("/profile");
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        setError("Fill all Inout");
                        break;
                    case 405:
                        setError("User not Found");
                        break;
                    case 406:
                        setError("Incorrect Password");
                        break;
                    default:
                        setError("Something went wrong. Please try again later.");
                }
            } else {
                setError("Something went wrong. Please check your internet connection and try again.");
            }
        }
    }

    console.log(token)





    const Logins = {
        margin: "auto",
        width: "35%",
        height: "70%",
        backgroundColor: "rgb(25, 25, 25)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const Forform = {
        margin: "auto",
        width: "99%",
        height: "auto",
    }

    const Alignforms = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
    }

    const Formdiv = {
        width: "90%",
        height: "50px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
    }

    const Formdivbutton = {
        width: "90%",
        height: "30px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }

    const ButtonSignup = {
        margin: "auto",
        width: "80%",
        cursor: "pointer",
    }

    const Formdivlogin = {
        width: "90%",
        height: "25px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const Login = {
        margin: "auto",
        cursor: "pointer",
    }

    const input = {
        width: "98%",
        marginTop: "5px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "none",
        borderRadius: "3px",
        padding: "5px",
    };

    const errorMessage = {
        position: "absolute",
        top: "15px",
    }

    return (
        <>
            <div style={Logins}>
                <div style={Forform}>
                    <form onsSubmit={handleSubmit}>
                        <div style={Alignforms}>

                            <div style={Formdiv}>
                                <label>Email</label>
                                <br></br>
                                <input type="email" value={email} style={input} onChange={(event) => setEmail(event.target.value)} require />
                            </div>
                            <div style={Formdiv}>
                                <label>Password</label>
                                <br></br>
                                <input type="password" value={password} style={input} onChange={(event) => setPassword(event.target.value)} require />
                            </div>

                            <div style={Formdivbutton}>
                                <button style={ButtonSignup} onClick={handleSubmit}>Log In</button>
                            </div>
                            <div style={Formdivlogin}>
                                <p style={Login}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div style={errorMessage}>{error && <p>{error}</p>}</div>
            <Back />
        </>
    )
};

export default Login