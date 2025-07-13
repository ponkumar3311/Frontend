"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Content1() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleOnChange = (e) => setTask(e.target.value);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const newTask = { task, completed: false };
    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const handleDelete = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  const handleToggleDone = (index) => {
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
    <div className="container mt-5 container mt-5 todo-container" style={{backgroundColor:"lightgreen",paddingBottom:"20px"}}>
      
      
      <h2 className="text-center mb-4">📝 My To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          value={task}
          onChange={handleOnChange}
          className="form-control"
          placeholder="Enter a task..."
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {taskList.map((tsk, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
              {editIndex === index ? (
                <input
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                  className="form-control"
                />
              ) : (
                <span
                  onClick={() => handleToggleDone(index)}
                  style={{
                    textDecoration: tsk.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  {tsk.task}
                </span>
              )}
            </div>

            <div className="btn-group btn-group-sm ms-3">
              {editIndex === index ? (
                <>
                  <button className="btn btn-success" onClick={handleSave}>Save</button>
                  <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <button className="btn btn-warning" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
