import React from 'react'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import workImage from '../Images/work1.png'

export default function SelectedWork() {
    return (
        <>
            <div id='selected-work'>
                <Container>
                    <Row className='mb-5'>
                        <Col></Col>
                        <Col data-aos="fade-left"><Card.Title as="h1">Selected_ <br />Works:  </Card.Title></Col>
                        <Col></Col>
                    </Row>
                    <Container className='mt-5'>
                        <Row className='work-space' data-aos="fade-right">
                            <Col md={4}>
                                <Card.Title as="h3">Paolo_ <br />Fornasier </Card.Title>
                                <p className='work-text'>The portfolio of Paolo Fornasier,
                                    young Italian musician</p>
                            </Col>
                            <Col md={8}>
                                <Image src={workImage} />
                            </Col>
                        </Row>

                        <Row data-aos="fade-left" className='work-space'>
                            <Col md={8}><Image src={workImage} /></Col>
                            <Col md={4}>
                                <Card.Title as="h3">Paolo_ <br />Fornasier </Card.Title>
                                <p className='work-text'>The portfolio of Paolo Fornasier,
                                    young Italian musician</p>
                            </Col>
                        </Row>
                        <Row className='work-space' data-aos="fade-right">
                            <Col md={4}>
                                <Card.Title as="h3">Paolo_ <br />Fornasier </Card.Title>
                                <p className='work-text'>The portfolio of Paolo Fornasier,
                                    young Italian musician</p>
                            </Col>
                            <Col md={8}>
                                <Image src={workImage} />
                            </Col>
                        </Row>

                        <Row data-aos="fade-left" className='work-space'>
                            <Col md={8}><Image src={workImage} /></Col>
                            <Col md={4}>
                                <Card.Title as="h3">Paolo_ <br />Fornasier </Card.Title>
                                <p className='work-text'>The portfolio of Paolo Fornasier,
                                    young Italian musician</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
}
