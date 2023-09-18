import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footerr() {
  return (
    <Card className=''>
      <Card.Header>/Home</Card.Header>
      <Card.Body>
        <Card.Title>Thanks for visiting this website</Card.Title>
        <Card.Text>
          The website helps you to add a new task to do list and can be updated and also deleted when completed.
        </Card.Text>
        <Button className='m-1' href='/' variant="primary">Home</Button>
        <Button className='m-1' href='/addNewTask' variant="primary">Add New Task</Button>
        <Button className='m-1' href='/viewAllTasks' variant="primary">Vew All Task</Button>
      </Card.Body>
    </Card>
  );
}

export default Footerr;
