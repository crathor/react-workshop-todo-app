import React, { Component } from 'react';
import TaskList from '../../components/TaskList/TaskList';
import AddTask from '../../components/AddTask/AddTask';
import '../../css/ToDoApp.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ['Create a todo app', 'finished the presentation', 'have fun!'],
      newTask: ''
    };
    this.addTask = this.addTask.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }
  addTask = () => {
    if (this.state.newTask === '') return;
    const tasks = [...this.state.tasks];
    tasks.push(this.state.newTask);
    this.setState({tasks: tasks, newTask: ''});
  }
  removeTask = (i) => {
    const tasks = [...this.state.tasks];
    tasks.splice(i, 1);
    this.setState({tasks: tasks});
  }
  handleTaskChange = ( event ) => {
    const task = event.target.value;
    this.setState({newTask: task});
  }
  render(){
    return(
      <div className='ToDoApp'>
        <TaskList
          tasks={this.state.tasks}
          clicked={i => this.removeTask(i)}
          />
        <AddTask
          clicked={this.addTask}
          changed={this.handleTaskChange}
          newTaskValue={this.state.newTask}
          />
      </div>
    );
  }
}

export default ToDoApp;
