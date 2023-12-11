import React from "react";
import "./App.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

function App(props) {
  const [toDos, setToDos] = useState([]);
  const [toDo, setTodo] = useState([]);
  const [isEditing,setIdEditing] = useState(false);
  const [editId,setEditID] = useState(null);

  const removeItem = (id)=> {
    setToDos(toDos.filter((item)=>item.id !==id))
  };
  const editItem = () => {};

  console.log(toDos)

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className="get">Get Things Done!</h2>
      </div>
      <div className="input">
        <input
        id="todo-text"
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."/>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {           
            setToDos([...toDos, { id: uuidv4(), text: toDo, status: false,date : Date.now() }]);
            setTodo([])
          }} >

          Add
        </Button>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                
                <input value={obj.status} type="checkbox" name=""  />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fa fa-pencil" aria-hidden="true" ></i> 
                <i className="fa fa-trash" aria-hidden="true" onClick={removeItem}></i>
              </div>
             
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
