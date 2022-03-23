import React from 'react'
import { Card, Navbar, Nav,Container, Col, Row } from 'react-bootstrap'
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";

export default function Header() {
  return (
    <>
    <header className='topheader'>
     <Card.Header  className="main-header">
     <Container>
       <Row>
       <Col>
       <Navbar  expand="lg" className='justify-content-end
    d-grid'>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggleBtn'><BiMenuAltRight /></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="me-auto my-2 my-lg-0"
        style={{zIndex:'999'  }}
        navbarScroll>
        <Nav.Link href="#home">works</Nav.Link>
        <Nav.Link href="#link">awards</Nav.Link>
        <Nav.Link href="#home">contact me</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
</Navbar>
    </Col>
    </Row>
    </Container>
       </Card.Header>
      </header>
    </>
  )
}
