import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/viewAllTasks">View All Task</Nav.Link>
            <Nav.Link href="/addNewTask">Add A New Task</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;