import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

function TaskComponent({ task }) {
  useEffect(() => {
    console.log('Task created');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, []);

  const taskLevelBadge = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        );
      case LEVELS.BLOKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        );
      default:
        break;
    }
  };
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>{taskLevelBadge()}</td>
      <td>
        <span className='align-middle'>
          {task.completed ? (
            <i
              className='bi-toggle-on'
              style={{ color: 'green', fontWight: 'bold' }}
            ></i>
          ) : (
            <i
              className='bi-toggle-off'
              style={{ color: 'green', fontWight: 'bold' }}
            ></i>
          )}

          <i
            className='bi-trash'
            style={{ color: 'tomato', fontWight: 'bold' }}
          ></i>
        </span>
      </td>
    </tr>
  );
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
