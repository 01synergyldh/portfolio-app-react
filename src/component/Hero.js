import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";

export default function Hero() {
  return (
    <>
      <section id='hero'>
        <Container>
          <Row className='h-main-row'>
            <Col md={12} className="mb-4" data-aos="fade-right">
              <Card.Title as="h1" className='mb-0 intro-text'>Hello. <br /> I am Patrick</Card.Title>
              <Row data-aos="fade-right">
                <Col md={6} className="d-flex justify-content-end">
                  <p className='arrowIcon'><TiArrowRightOutline /></p>
                  <p className='h-designation'> Developer<br />
                    UX/UI Designer<br />
                    Freelance</p>
                </Col>
                <Col md={4}>
                 
                </Col>
                <Col md={4}></Col>
              </Row>
            </Col>
           
            <Col md={12}>
              <div className='show-critive-circule'>
                <label className='show-critive-text'>Show Creativity</label>
              </div>
              <div className='work-date'>
                <p><h1>14</h1></p>
                <p><strong>Jan</strong><br />available for work
                </p>
              </div>

              <p className='info-text' data-aos="fade-left">I am a developer and UX/UI designer based in Italy
                National and international customers have relied on me for design
                implementation, and management of their digital products.
                CONTACT As a freelancer, I works also with web agencies, companies,
                startups and individuals to create a blueprint for the digital business
                Also, Judge at CSSOA and Envato Author</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
