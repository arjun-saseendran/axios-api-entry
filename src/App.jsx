import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header/Header';
import Cards from './Cards';

function ContainerExample() {
  return (
    <>
    <Header/>
    <Container>
      <Row>
        <Col>
        <Cards/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ContainerExample;