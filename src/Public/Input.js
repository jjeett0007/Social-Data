import React, { useEffect, useState } from "react";
import { database } from "../config/firebaseConfig";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const InputData = () => {
  const { id } = useParams();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [oname, setOname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [occupation, setOccupation] = useState("");
  const navigate = useNavigate();

  const value = collection(database, "user");

  useEffect(() => {
    if (id) {
      const fetchUserData = async () => {
        const userDoc = doc(database, "user", id);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setFname(userData.first_name);
          setLname(userData.last_name);
          setOname(userData.other_name);
          setEmail(userData.email);
          setNumber(userData.mobile_number);
          setOccupation(userData.occupation);
        } else {
          console.error("User not found");
        }
      };

      fetchUserData();
    }
  }, [id]);

  const handleCreateOrUpdate = async () => {
    if (id) {
      const userDoc = doc(database, "user", id);
      await setDoc(userDoc, {
        first_name: fname,
        last_name: lname,
        other_name: oname,
        email: email,
        mobile_number: number,
        occupation: occupation,
      });
    } else {
      await addDoc(value, {
        first_name: fname,
        last_name: lname,
        other_name: oname,
        email: email,
        mobile_number: number,
        occupation: occupation,
      });
    }
    setFname("");
    setLname("");
    setOname("");
    setEmail("");
    setNumber("");
    setOccupation("");
    navigate('/')
  };

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const hanfleOname = (e) => {
    setOname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleocuupation = (e) => {
    setOccupation(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid white",
              margin: "auto",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Name</label>
              <input type="text" value={fname} onChange={handleFname} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Surname</label>
              <input type="text" value={lname} onChange={handleLname} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Othername</label>
              <input type="text" value={oname} onChange={hanfleOname} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Email</label>
              <input type="text" value={email} onChange={handleEmail} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Number</label>
              <input type="text" value={number} onChange={handleNumber} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Occupatioin</label>
              <input
                type="text"
                value={occupation}
                onChange={handleocuupation}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <button onClick={handleCreateOrUpdate}>
                {id ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputData;
