import React from 'react'
import { Card, Col, Container, Row, ListGroup } from 'react-bootstrap'

export default function Awards() {
    return (
        <>
            <div id='awards'>
                <Container>
                    <Row className='mb-5'>
                        <Col></Col>
                        <Col></Col>
                        <Col data-aos="fade-left"><Card.Title as="h1">aw_ <br />ards:  </Card.Title></Col>
                    </Row>
                    <Row className='mt-5 pt-5'>
                        <Col data-aos="zoom-in">
                            <ListGroup>
                                <ListGroup.Item><h5>Also features in</h5></ListGroup.Item>
                                <ListGroup.Item>7x Best Innovation</ListGroup.Item>
                                <ListGroup.Item>7x Best Innovation</ListGroup.Item>
                            </ListGroup>
                            <ListGroup className='pt-5'>
                                <ListGroup.Item><h5>Css Design Awards</h5></ListGroup.Item>
                                <ListGroup.Item>1x Website of the day</ListGroup.Item>
                                <ListGroup.Item>7x Special Kudos</ListGroup.Item>
                                <ListGroup.Item>7x Best UI Design</ListGroup.Item>
                                <ListGroup.Item>7x Best UX Design</ListGroup.Item>
                                <ListGroup.Item>7x Best Innovation</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col data-aos="zoom-in">
                            <ListGroup>
                                <ListGroup.Item><h5>Also features in</h5></ListGroup.Item>
                                <ListGroup.Item>Shopify.com, tutplus.com,</ListGroup.Item>
                                <ListGroup.Item>webdesignerdepot.com,</ListGroup.Item>
                                <ListGroup.Item>designshack.net, Mindsparkle mag.</ListGroup.Item>
                                <ListGroup.Item>Thegallery</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col data-aos="zoom-in">
                            <p>I drink coffee, l eat pizza. I write code and improve
                                my design and skills every day
                                Tam honored to work with special people.
                                I've won awards sometimes.
                            </p></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
