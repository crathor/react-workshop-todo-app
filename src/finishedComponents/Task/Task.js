import React from 'react';
import '../../css/Task.css';

const Task = ( props ) => {
  return (
    <div className='Task'>
        {props.task}
        <button onClick={() => props.clicked(props.index)}>X</button>
    </div>
  );
};

export default Task;
