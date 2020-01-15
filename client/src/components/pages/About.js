import React from "react";

export default function About() {
  return (
    <React.Fragment >
      <h1 style={pageStyle}>About</h1>
      <p style={pageStyle}> This is the TodoList app v1.0.0.0. it uses react router dom. </p>
    </React.Fragment>
  );
}

const pageStyle ={
    textAlign : 'center',
    marginTop : '50px',
    padding: "10px"
}