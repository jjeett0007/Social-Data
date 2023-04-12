import React from "react";

const Home = () => {
    const home = {
        margin: "auto",
        width: "99%",
        height: "98%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
    }

    const Header = {
        width: "100%",
        height: "7%",
        backgroundColor: "rgb(25, 25, 25)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
    }

    const TEXT = {
        margin: "auto",
    }

    const Body = {
        width: "100%",
        height: "85vh",
        backgroundColor: "rgb(25, 25, 25)",
        borderRadius: "10px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const Buttons = {
        width: "auto",
        height: "auto",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        gap: "20px",
    }
    return (
        <>
            <div style={home}>
                <div style={Header}>
                    <p style={TEXT}>
                        HEADER
                    </p>
                </div>

                <div style={Body}>
                    <div style={Buttons}>
                        <button>Home</button>
                        <button>Sign in</button>
                        <button>Sign up</button>
                        <button>Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home