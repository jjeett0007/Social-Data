import React, { useEffect, useState } from "react";
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate ('./login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return (
        <Route
            {...props}
            render={({ location }) =>
                isLoggedIn ? (
                    props.children
                ) : (
                    navigate("/login", {
                        state: { from: location }
                    })
                )
            }
        />
    )
}

export default ProtectedRoute;
