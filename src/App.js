import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Public/Home';
import Signup from './Public/Signup';
import Login from './Public/Login';
import Profile from './Private/Profile';
import PictureUpload from './Private/UploadPix';
import Movie from './Public/Movie';
import InputData from './Public/Input';
import FetchInput from './Public/fetchInput';
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
    color: "white",
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

  const DisplayArea = {
    width: "90%",
    height: "400px",
    border: "2px solid red",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  const DisplayAreaone = {
    width: "95%",
    height: "150px",
    border: "1px solid yellow",
    margin: "auto",
    
  }

  const DisplayAreatwo = {
    width: "95%",
    height: "150px",
    border: "1px solid yellow",
    margin: "auto",
    
  }

  return (
    <div style={App} className="App">
      <div style={division1}>
        <div style={DisplayArea}>
          <div style={DisplayAreaone}></div>
          <div style={DisplayAreatwo}></div>
        </div>
      </div>

      <div style={division2}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/upload" element={<PictureUpload />} exact />
            <Route path="/movie" element={<Movie />} exact />
            <Route path="/input" element={<InputData />} exact />
            <Route path="/input/:id" element={<InputData />} exact />
            <Route path="/fetch" element={<FetchInput />} exact />
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
