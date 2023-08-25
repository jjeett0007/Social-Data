import React from "react";
import { Outlet, Link } from 'react-router-dom';

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
                        <button>
                            <Link to="/">Home</Link>
                        </button>
                        <button>
                            <Link to="/login">Sign in</Link>
                        </button>
                        <button>
                            <Link to="/signup">Sign up</Link>
                        </button>
                        <button>
                            <Link to="/profile">Profile</Link>
                        </button>
                        <button>
                            <Link to="/movie">Movie</Link>
                        </button>
                        <button>
                            <Link to="/input">Forms</Link>
                        </button>
                        <button>
                            <Link to="/fetch">Fetch</Link>
                        </button>
                    </div>
                </div>
                <Outlet/>
            </div>
        </>
    )
};

export default Home