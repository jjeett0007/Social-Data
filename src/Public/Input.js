import React, { Component } from "react";

const InputData = () => {
  return (
    <>
      <div>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid white",
              margin: "auto",
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Name</label>
              <input />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Surname</label>
              <input />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Othername</label>
              <input />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Email</label>
              <input />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Number</label>
              <input />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Occupatioin</label>
              <input />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputData;
