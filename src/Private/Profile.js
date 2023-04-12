import React from "react";

const Profile = () => {

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

    return (
        <>
            <div style={PProfile}>
                <div style={Profile1}>
                    <div style={Profile2}></div>
                    <div style={Profile3}>
                        <div style={FetchedData}>
                            <p style={Datafetched}>Fetch Data</p>
                        </div>
                        <div style={FetchedData}>
                            <p style={Datafetched}>Fetch Data</p>
                        </div>
                        <div style={FetchedData}>
                            <p style={Datafetched}>Fetch Data</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;