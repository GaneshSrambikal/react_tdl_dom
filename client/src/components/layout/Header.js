import React from "react";

export default function Header() {
  return (
    <header style={styleHeader}>
      <h1>Todo List</h1>
    </header>
  );
}
const styleHeader = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
