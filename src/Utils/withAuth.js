// import React from "react";
// import { useNavigate } from "react-router-dom";

// const withAuth = (Component) => {
//   const AuthCheck = () => {
//     const token = localStorage.getItem("token");
//     const navigate = useNavigate();

//     if (!token) {
//       navigate("/login");
//       return null;
//     }

//     return <Component />;
//   };

//   return AuthCheck;
// };

// export default withAuth;


import React from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthCheck = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if (!token) {
      navigate("/login");
      return null;
    }

    return <Component />;
  };

  return AuthCheck;
};

export default withAuth;
