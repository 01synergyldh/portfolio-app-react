import React from 'react'
import { Container ,Card, ListGroup, Row, Col} from 'react-bootstrap'
import GoBack from './GotoTop'
export default function Footer() {
  return (
    <>
    <footer id='footer'>
        <Container fluid>
    <Card>
        <Row>
  {/* <Card.Header>Featured</Card.Header> */}
  <Col md={6}>
  <ListGroup horizontal>
  <ListGroup.Item>dribble</ListGroup.Item>
  <ListGroup.Item>facebook</ListGroup.Item>
  <ListGroup.Item>behence</ListGroup.Item>
  <ListGroup.Item>instagram</ListGroup.Item>
</ListGroup>
</Col>
<Col md={6} className='text-end'>
<ListGroup horizontal>
  <ListGroup.Item>coloed version</ListGroup.Item>
  <ListGroup.Item>2022 version</ListGroup.Item>
  <ListGroup.Item><GoBack/> </ListGroup.Item>
</ListGroup>
</Col>
</Row>
</Card>
</Container>
</footer>
    </>
  )
}
