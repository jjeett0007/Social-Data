import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [firstname, setFirstname] = useState("John");
    const [surname, setSurname] = useState("Doe");
    const [email, setEmail] = useState("john@doe.com");
    const [number, setNumber] = useState("+234 (0) 8012345678");
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();



    async function handleSubnit(event) {
        event.preventDefault();

        const data = {
            firstname,
            surname,
            email,
            number,
            password,
            confirmPassword
        };

        try {
            const response = await axios.post('http://localhost:3001/signup', data);
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        setError("Fill all Input");
                        break;
                    case 401:
                        setError("Unauthorized, User Already Exist");
                        break;
                    case 402:
                        setError("Unauthorized, Phone Number Already Existed");
                        break;
                    case 500:
                        setError("Internal Error");
                        break;
                    default:
                        setError("Something went wrong. Please try again later.");
                }
            } else {
                setError("Something went wrong. Please check your internet connection and try again.");
            }
        }
    }

    // eslint-disable-next-line no-restricted-globals


    const Signup = {
        margin: "auto",
        width: "43%",
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
        width: "99%",
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
        padding: "5px"
    }

    return (
        <>
            <div style={Signup}>
                <div style={Forform}>
                    <form action="POST" onSubmit={handleSubnit}>
                        <div style={Alignforms}>
                            <div style={Formdiv}>
                                <label>First name</label>
                                <br></br>
                                <input style={input} placeholder={firstname} onChange={(event) => setFirstname(event.target.value)} />
                            </div>
                            <div style={Formdiv}>
                                <label>Surname</label>
                                <br></br>
                                <input style={input} placeholder={surname} onChange={(event) => setSurname(event.target.value)} />
                            </div>
                            <div style={Formdiv}>
                                <label>Email</label>
                                <br></br>
                                <input style={input} type="email" placeholder={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div style={Formdiv}>
                                <label>Phone Number</label>
                                <br></br>
                                <input style={input} placeholder={number} onChange={(event) => setNumber(event.target.value)} />
                            </div>
                            <div style={Formdiv}>
                                <label>Password</label>
                                <br></br>
                                <input style={input} type="password" placeholder={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div style={Formdiv}>
                                <label>Confirm Password</label>
                                <br></br>
                                <input style={input} type="password" placeholder={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                            </div>

                            {error && <p>{error}</p>}

                            <div style={Formdivbutton}>
                                <button type="submit" style={ButtonSignup} onClick={handleSubnit}>Sign Up</button>
                            </div>
                            <div style={Formdivlogin}>
                                <p style={Login}>Don't have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Signup