import React, { useState } from "react";
import "./index.css";

import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import DarkModeToggle from "./Components/DarkModeToggle";


function App() {
  const [todos, setTodos] = useState([]);
  const [inpValue, setInpValue] = useState("");
  const[darkMode,setDarkMode]=useState(false);

  const toggleMode=()=>{
    setDarkMode(!darkMode);
  }

  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  const handleAdd = () => {
    if (inpValue.trim() === "") return; 
    setTodos([...todos, { text: inpValue, completed: false }]);
    setInpValue("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggle = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };


  

  return (
    <>
    <div className={`${darkMode  && "dark"}`}>
    <div className=" min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4 dark:bg-black pt-20 relative">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Task Manager</h1>


  {/* Toggle Mode */}
    <DarkModeToggle toggleMode={toggleMode} darkMode={darkMode}></DarkModeToggle>

      {/* Input section */}
    <TodoInput inpValue={inpValue} handleChange={handleChange} handleAdd={handleAdd}></TodoInput>

      {/* Todo list */}
      <TodoItem todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}></TodoItem>
    </div>
    </div>
    </>
  );
}

export default App;
