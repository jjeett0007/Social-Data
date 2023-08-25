import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../config/firebaseConfig";
import { Link } from "react-router-dom";

const FetchInput = () => {
  const [data, setData] = useState([]);
  const value = collection(database, "user");

  useEffect(() => {
    const getData = async () => {
      const databaseValue = await getDocs(value);
      setData(databaseValue.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  const handleDelete = async (id) => {
    const deleteUser = doc(database, "user", id);
    await deleteDoc(deleteUser);
  };

  return (
    <>
      {data.map((index) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                border: "1px solid red",
                margin: "10px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={index.id}
              >
                <p>{index.first_name}</p>
                <p>{index.last_name}</p>
                <p>{index.other_name}</p>
                <p>{index.email}</p>
                <p>{index.mobile_number}</p>
                <p>{index.occupation}</p>
                <Link to={`/input/${index.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(index.id)}>Delete</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FetchInput;
