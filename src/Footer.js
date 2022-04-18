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
          <a>Copyright &#169; 2021</a>
          <br />
          <a>Design By Merk Labs</a>
        </Col>
        <Col sm='4' md='3'>
          <h5 id='footer-heading-style'>SERVICES</h5>
          <a>Web Development</a>
          <br />
          <a>App Development</a>
          <br />
          <a>UI Design</a>
          <br />
          <a>Consultation</a>
          <br />
          <a>Maintenance</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>COMPANY</h5>
          <a>About</a>
          <br />
          <a>Contact</a>
          <br />
          <a>Send Quote</a>
          <br />
          <a>Privacy Policy</a>
          <br />
          <a>Term of Service</a>
          <br />
          <a>Jobs</a>
        </Col>
        <Col sm='4' md='3'>
          {' '}
          <h5 id='footer-heading-style'>RESOURCES</h5>
          <a>Support</a>
          <br />
          <a>Documentation</a>
          <br />
          <a>License</a>
          <br />
          <a>Sitemap</a>
          <br />
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Footer
