import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Public/Home';
import Signup from './Public/Signup';
import Login from './Public/Login';
import Profile from './Private/Profile';
// import PrivateRoutes from './Utils/PrivateRoutes';


function App() {

  const App = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15px",
  };

  const division1 = {
    width: "27%",
    height: "95vh",
    border: "2px solid black",
    margin: "auto",
    borderRadius: "10px",
    backgroundColor: "black",
  };

  const division2 = {
    width: "68%",
    height: "95vh",
    border: "2px solid black",
    margin: "auto",
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  return (
    <div style={App} className="App">
      <div style={division1}></div>

      <div style={division2}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} exact />
            {/* <Routes element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} exact />
            </Routes> */}
          
            {/* <PrivateRoutes path="/profile" element={<Profile />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
