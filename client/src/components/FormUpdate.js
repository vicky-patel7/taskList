import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { readTaskList, updateTask } from '../redux/slices/crudSlice'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const FormUpdate = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [task, setTask] = useState({});
  const allTasks = useSelector((state) => state.taskList.taskList);
  useEffect(() => {
    dispatch(readTaskList())
  }, [dispatch]);

  useEffect(() => {
    if(id) {
      const singleTask = allTasks.find((task) => (
        task._id === id
      ));
      setTask(singleTask);
    }
  }, [id, allTasks])

  const getTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTask(task));
    navigate('/viewAllTasks');
  }
  return (
    <Form className='m-5' onSubmit={handleUpdate}>
      <h3>Update Task</h3>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={getTask} type="text" name='title' placeholder="Title of the Task" value={task?.title} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Enter Description of the Task</Form.Label>
        <Form.Control onChange={getTask} as="textarea" name='desc' rows={4} placeholder='Enter Your Description Here...' value={task?.desc} required />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleUpdate}>
        Submit
      </Button>
    </Form>
  );
}

export default FormUpdate;