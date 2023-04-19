import React from 'react'
import { useNavigate } from "react-router-dom";



const Back = () => {
    const navigate = useNavigate();

    const backHome = () => {
        localStorage.clear()
        navigate("/")
    }

    


    return(
        <>
            <div>
                <button onClick={backHome}>
                    back
                </button>
            </div>
        </>
    )
}

export default Back