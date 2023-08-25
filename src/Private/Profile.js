import React from "react";
import Back from "../Back";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Profile = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const [firstname, setFirstName] = useState("");
    const [surname, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    if (!token) {
        alert("Please Login to view Profile")
        window.location = '/login';
    }

    console.log(userId);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`http://localhost:3001/user/${userId}`);
                const { firstname, surname, number } = response.data;
                console.log(response.data);
                setFirstName(firstname);
                setLastName(surname);
                setNumber(number);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, [userId]);

    console.log(firstname)




    const PProfile = {
        margin: "auto",
        width: "98%",
        height: "98%",
    }

    const Profile1 = {
        margin: "auto",
        width: "98%",
        height: "35%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const Profile2 = {
        width: "25%",
        height: "98%",
        margin: "auto",
        backgroundColor: "rgb(25, 25, 25)",
        borderRadius: "10px",
    }

    const Profile3 = {
        width: "70%",
        height: "98%",
        margin: "auto",
        backgroundColor: "rgb(25, 25, 25)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    }

    const FetchedData = {
        width: "40%",
        height: "7vh",
        marginTop: "8px",
        marginLeft: "20px",
        borderRadius: "10px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const Datafetched = {
        margin: "auto",
    }

    // const loader = {
    //     width: "20px",
    //     height: "20px",
    //     border: "3px solid red",
    //     borderRadius: "50%",
    //     borderTop: "3px solid blue",
    //     WebkitAnimation: "spin 2s linear infinite",
    //     animation: "spin 2s linear infinite",
    // }




    return (
        <>
            <Back />
            <div style={PProfile}>
                <div style={Profile1}>
                    <div style={Profile2}>
                        <button>
                            <Link to="/upload">Upload Picture</Link>
                        </button>
                    </div>
                    <div style={Profile3}>
                        <div style={FetchedData}>
                            <p style={Datafetched}>
                                {isLoading ?
                                    <div className="fa fa-spinner fa-spin"></div> :
                                    (<div>{firstname}</div>)
                                }
                            </p>
                        </div>
                        <div style={FetchedData}>
                            <p style={Datafetched}>
                                {isLoading ?
                                    <div className="fa fa-spinner fa-spin"></div> :
                                    (<div>{surname}</div>)
                                }
                            </p>
                        </div>
                        <div style={FetchedData}>
                            <p style={Datafetched}>
                                {isLoading ?
                                    <div className="fa fa-spinner fa-spin"></div> :
                                    (<div>{number}</div>)
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;