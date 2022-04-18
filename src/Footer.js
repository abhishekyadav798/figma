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
          <p>Copyright &#169; 2021</p>
          <p >Design By Merk Labs</p>
        </Col>
        <Col sm='4' md='3'>
          <h5 id='footer-heading-style'>SERVICES</h5>
          <a href="/">Web Development</a>
          <br />
          <a href="/">App Development</a>
          <br />
          <a href="/">UI Design</a>
          <br />
          <a href="/">Consultation</a>
          <br />
          <a href="/">Maintenance</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>COMPANY</h5>
          <a href="/">About</a>
          <br />
          <a href="/">Contact</a>
          <br />
          <a href="/">Send Quote</a>
          <br />
          <a href="/">Privacy Policy</a>
          <br />
          <a href="/">Term of Service</a>
          <br />
          <a href="/">Jobs</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>RESOURCES</h5>
          <a href="/">Support</a>
          <br />
          <a href="/">Documentation</a>
          <br />
          <a href="/">License</a>
          <br />
          <a href="/">Sitemap</a>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Footer
