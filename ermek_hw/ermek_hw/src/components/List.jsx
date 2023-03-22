import React from 'react';

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}

export default TaskList;
