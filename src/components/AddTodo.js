import React from 'react';
import './components/AddToDo.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Get Things Done!</h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." />
        <Button variant="contained" color="primary">Add</Button>
      </div>
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>Rect tutorial</p>
          </div>
          <div className="right">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <i class="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;