import React from 'react';
import './App.css';
import ToDoApp from './containers/ToDoApp/ToDoApp';

const App = props => {
    return (
      <div className="App">
        <h1>React ToDo App Workshop</h1>
        <ToDoApp />
      </div>
    );
  }

export default App;
