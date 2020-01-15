import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header style={styleHeader}>
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
    </header>
  );
}
const styleHeader = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};
