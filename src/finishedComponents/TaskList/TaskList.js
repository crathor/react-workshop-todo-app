import React from 'react';
import Task from '../Task/Task';
import '../../css/TaskList.css';

const TaskList = ( props ) => {
  let tasks = props.tasks.map((task, index) => {
    return (
      <Task
        key={index}
        index={index}
        {...props}
        task={task} />
    );
  });
  if(props.tasks.length === 0){
    tasks = <p>No current tasks.</p>
  }
  return (
    <div className='TaskList'>
      <h2>ToDo App</h2>
      {tasks}
    </div>
  );
};

export default TaskList;
