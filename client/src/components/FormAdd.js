import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { createTask } from '../redux/slices/crudSlice'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const FormAdd = () => {
  const [task, setTask] = useState({ title: '', desc: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    if(task.title === '' || task.desc === '') {
      return alert('Please fill both the title and desc');
    }
    e.preventDefault();
    dispatch(createTask(task));
    navigate('/viewAllTasks');
  }
  return (
    <Form className='m-5' onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={getTask} type="text" name='title' placeholder="Title of the Task" value={task.title} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Description of the Task</Form.Label>
        <Form.Control onChange={getTask} as="textarea" name='desc' rows={4} placeholder='Enter Your Description Here...' value={task.desc} required />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default FormAdd;