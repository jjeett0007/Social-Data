import React, {useState} from "react";

const Signup = () => {

    const Signup = {
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
    }

    return (
        <>
            <div style={Signup}>
                <div style={Forform}>
                    <form>
                        <div style={Alignforms}>
                            <div style={Formdiv}>
                                <label>First name</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdiv}>
                                <label>Surname</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdiv}>
                                <label>Email</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdiv}>
                                <label>Phone Number</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdiv}>
                                <label>Password</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdiv}>
                                <label>Confirm Password</label>
                                <br></br>
                                <input style={input} />
                            </div>
                            <div style={Formdivbutton}>
                                <button style={ButtonSignup}>Sign Up</button>
                            </div>
                            <div style={Formdivlogin}>
                                <p style={Login}>Already have an account? <a href="/">Login</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Signup