import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { readTaskList, deleteTask } from '../redux/slices/crudSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const allData = useSelector((state) => state.taskList.taskList);
    const loading = useSelector((state) => state.taskList.loading);
    useEffect(() => {
        dispatch(readTaskList());
    }, [dispatch]);

    return (
        <div>
            {
                loading ? <h1>Loading Lists ...</h1>
                    : <h1 className='d-flex justify-content-center mt-3'>Task Lists</h1>

            }
            <div className='d-flex flex-column m-5 mt-1'>
                {allData && allData.map((task) => (
                    <Card className='d-flex flex-md-row flex-sm-column my-2' key={task._id}>
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Text>{task.desc}</Card.Text>
                        </Card.Body>
                        <Card.Body className='d-flex flex-row justify-content-end'>
                            <Button
                                href={`/update/${task._id}`}
                                className='m-1 d-flex justify-content-center align-items-center'
                                variant="primary"
                            >
                                Update
                            </Button>
                            <Button
                                className='m-1 d-flex justify-content-center align-items-center'
                                variant="danger"
                                onClick={() => dispatch(deleteTask(task._id))}
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TaskList;