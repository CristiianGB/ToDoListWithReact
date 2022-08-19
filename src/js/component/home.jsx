import React from "react";
import ToDoHeader from "./ToDoHeader/ToDoHeader.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import "./homeStyles.css";


const Home = () => {
  return (
    <>
      <ToDoHeader />
      <ToDoList />
    </>
  );
};

export default Home;
