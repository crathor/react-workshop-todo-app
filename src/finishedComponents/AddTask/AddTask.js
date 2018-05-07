import React from 'react';
import '../../css/AddTask.css';

const AddTask = ( props ) => {
  return (
    <div className='AddTask'>
      <input type='text' onChange={props.changed} value={props.newTaskValue}></input>
      <button onClick={props.clicked}>Add</button>
    </div>
  );
};

export default AddTask;
