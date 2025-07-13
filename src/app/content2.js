import { useState } from 'react';
import './content1.css';

export default function Content2() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = { task, completed: false };
    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleDelete = (indexToRemove) => {
    const filteredList = taskList.filter((_, index) => index !== indexToRemove);
    setTaskList(filteredList);
  };

  const handledone = (index) => {
    const updatedList = [...taskList];
    updatedList[index].completed = !updatedList[index].completed;
    setTaskList(updatedList);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(taskList[index].task);
  };

  const handleSave = () => {
    const updatedList = [...taskList];
    updatedList[editIndex].task = editTask;
    setTaskList(updatedList);
    setEditIndex(null);
    setEditTask('');
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditTask('');
  };

  return (
    <div className="container">
      <h2>📋 Task Manager</h2>
      <div className="add-section">
        <input value={task} onChange={handleOnChange} placeholder="Enter Task" />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ol className="task-list">
        {taskList.map((tsk, index) => (
          <li key={index}>
            <div className="task-item">
              {editIndex === index ? (
                <>
                  <input
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    className={tsk.completed ? 'completed' : ''}
                    onClick={() => handledone(index)}
                  >
                    {tsk.task}
                  </span>
                  <div className="actions">
                    <button onClick={() => handleEdit(index)}>✏️</button>
                    <button onClick={() => handleDelete(index)}>🗑️</button>
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
