import React from "react";
// import './index.css'
import "./footl.css";
const Foot = () => {
  return (
    <div
      className="foott"
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        height: "10vh",
        textTransform: "capitalize",
        marginTop: "1vh",
        padding: "1%",
        borderRadius: "10px",
        boxShadow: "0 0 10px black"
      }}
    ></div>
  );
};

export default Foot;
