import React from 'react'
import { Row, Col } from 'reactstrap'
import './Component14.css'
import Menphoto from './images/menphoto.jpg'

function Component14 () {
  return (
    <div className='div14-style'>
      <Row>
        <Col>
          <h6 style={{ color: 'rgb(26, 102, 255)', fontWeight: 500 }}>
            Our Client Review
          </h6>
          <p>
            Subscribe to our newsletter for daily/weekly <br />
            update of our products and services.
          </p>
        </Col>
      </Row>

      <div className='container-style'>
        <div className='box1-style'>
          <div
            class='card'
            style={{ width: '25rem', height: '21rem' }}
            className='card-style1'
          >
            <div class='card-body'>
              <p class='card-text'>
                Lorem ipsum is simply dummy text of the printing and typesetting
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambledd it to make a type specimen book.
              </p>
              <img src={Menphoto} class='card-img-top' alt='' id='card-img' />
              <h5 class='card-title'>JOHN SMITH</h5>
              <p>Founder of Awesomeux Technology</p>
            </div>
          </div>
        </div>
        <div className='box2-style'>
          <div
            class='card'
            style={{ width: '23rem', height: '17rem' }}
            className='card-style1'
          >
            <div class='card-body'>
              <p class='card-text2'>
                Lorem ipsum is simply dummy text of the printing and typesetting
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambledd it to make a type specimen book.
              </p>
              <img src={Menphoto} class='card-img-top' alt='' id='card-img2' />
              <h5 class='card-title'>JOHN SMITH</h5>
              <p>Founder of Awesomeux Technology</p>
            </div>
          </div>
        </div>
        <div className='box3-style'>
          <div
            class='card'
            style={{ width: '23rem', height: '17rem' }}
            className='card-style1'
          >
            <div class='card-body'>
              <p class='card-text2'>
                Lorem ipsum is simply dummy text of the printing and typesetting
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambledd it to make a type specimen book.
              </p>
              <img src={Menphoto} class='card-img-top' alt='' id='card-img2' />
              <h5 class='card-title'>JOHN SMITH</h5>
              <p>Founder of Awesomeux Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component14
