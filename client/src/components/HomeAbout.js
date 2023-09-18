import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import crudUtils from './crudUtils';
const crud = Object.values(crudUtils);

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4 m-3">
      {crud.map((item) => (
        <Col key={item.id}>
          <Card className='w-100 h-100'>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;