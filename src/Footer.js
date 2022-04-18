import React from 'react'
import { Row, Col } from 'reactstrap'
import './Footer.css'
import Pages from './images/pages.png'


function Footer () {
  return (
    <div className='footer-div-style'>
      <Row className='footer-row-style'>
        {/* <Col></Col> */}
        <Col sm='4' md='3'>
          <h6>
            {' '}
            <img src={Pages} style={{ width: '25px' }} alt="..."  />
            <span style={{ color: 'white' }}>Merk</span>
          </h6>
          <a href="javascript:;">Copyright &#169; 2021</a>
          <br />
          <a href="javascript:;">Design By Merk Labs</a>
        </Col>
        <Col sm='4' md='3'>
          <h5 id='footer-heading-style'>SERVICES</h5>
          <a href="javascript:;">Web Development</a>
          <br />
          <a href="javascript:;">App Development</a>
          <br />
          <a href="javascript:;">UI Design</a>
          <br />
          <a href="javascript:;">Consultation</a>
          <br />
          <a href="javascript:;">Maintenance</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>COMPANY</h5>
          <a href="javascript:;">About</a>
          <br />
          <a href="javascript:;">Contact</a>
          <br />
          <a href="javascript:;">Send Quote</a>
          <br />
          <a href="javascript:;">Privacy Policy</a>
          <br />
          <a href="javascript:;">Term of Service</a>
          <br />
          <a href="javascript:;">Jobs</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>RESOURCES</h5>
          <a href="javascript:;">Support</a>
          <br />
          <a href="javascript:;">Documentation</a>
          <br />
          <a href="javascript:;">License</a>
          <br />
          <a href="javascript:;">Sitemap</a>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Footer
