import React from 'react'
import { Row, Col } from 'reactstrap'
import './Component15.css'
import Call from './images/call.png'
import Email_blue from './images/email_blue.jpg'

function Component15 () {
  return (
    <div className='div15-style'>
      <Row>
        <Col sm='1' md='1'></Col>
        <Col sm='4' md='6' className='contact-style'>
          <h6
            style={{
              color: 'rgb(59, 255, 232)',
              fontWeight: 300,
              fontSize: '12px'
              
            }}
            alt="..." 
          >
            CONTACT
          </h6>
          <h5>We love receiving messages from you, we are waiting for it.</h5>
          <Row>
            <Col sm='2' md='2'>
              <img src={Call} style={{ width: '60px' }} alt="..."  />{' '}
            </Col>
            <Col>
              <p style={{ fontSize: '14px' }}>
                Phone <br />
                +91 99234456
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm='2' md='2'>
              {' '}
              <img src={Email_blue} style={{ width: '60px' }} alt="..." />
            </Col>
            <Col>
              <p>
                {' '}
                Email <br />
                support@MerkLabs.ltd
              </p>
            </Col>
          </Row>
        </Col>
        <Col sm='4' md='4'>
          <form className='form-style'>
            <label>Name</label> <br />
            <input type='text' id='myInput' size='23' /> <br />
            <label> Email </label> <br />
            <input name='email' type='email'id='myInput' size='23' />
            <br />
            <label>Subject</label> <br />
            <input type='text' id='myInput' size='23' />
            <br />
            <label>Message</label> <br />
            <input type='textarea' id='myInput' size='23' />
            <br />
            <br />
            <button className='button_style'>Send Messaage</button>
            <br />
            <br />
          </form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Component15
