import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PictureUpload() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState("");
    const [picture, setPicture] = useState(null);
    const [preview, setPreview] = useState("");
    const userId = localStorage.getItem("userId");

    // const userId = localStorage.getItem("userId");


    if (!token) {
        alert("Please Login");
        window.location = '/login';
    }

    // const handleFileChange = (event) => {
    //     setFile(event.target.files[0]);
    // };

    const handleFileChange = (event) => {
        if (event.target.files.length) {
            setPicture(event.target.files[0]);
            setPreview(URL.createObjectURL(event.target.files[0]));
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        // const data = {
        //     picture
        // };

        const formData = new FormData();
        formData.append('picture', picture);
        formData.append('userId', userId);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData);
            console.log(response.data);
            alert("Picture Uploaded Successfully");
            navigate("/profile");
        } catch (error) {
            alert("Picture not uploaded")
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        setError("No file selected");
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
        } finally {
            setIsLoading(false);
        }
    }

    const errorMessage = {
        position: "absolute",
        top: "15px",
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {preview && (
                    <div>
                        <img src={preview} alt="preview" width="300" height="300" />
                    </div>
                )}
            </div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button type="submit" onClick={handleSubmit}>
                {isLoading ? (
                    <div className="fa fa-spinner fa-spin"></div>
                ) : (
                    "Upload"
                )}
            </button>
            <div style={errorMessage}>{error && <p>{error}</p>}</div>
        </form>
    );
}

export default PictureUpload