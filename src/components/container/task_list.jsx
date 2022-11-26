import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  const [tasks, setTasks] = useState([defaultTask]);

  useEffect(() => {
    console.log('Task State has been modified');
    return () => {
      console.log('TaskList component is going to unmount...');
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: cambiar estado de una tarea');
  };

  return (
    <div>
      <div>
        <h1>Your tasks: </h1>
      </div>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
