import React from 'react'
import {Row,Col} from 'reactstrap'
import './Component8.css'
import Powerbuilder from "./images/powerbuilder.jpg";

function Component8() {
  return (
    <div>
        <Row className='row8-style'>
            <Col sm='6' md='8'> <img
            src={Powerbuilder}
            style={{
              width: "700px",
              height: "180px",
              borderRadius: "4px",
            }}
            alt="..." 
          /></Col>
            <Col sm='6' md='4'>
            <h4 className='heading-smart'>SMART CONTRACT</h4>
            <h3 className='heading8-style'>Experience the Revolution</h3>
            <p className='text8-style'>Merklabs has efficient developers with <br/>
            exceptional coding skills that can create any <br/>
            type of smart contract you desire and with <br/>
            scalable and securre code. You desire,we <br/>
            create it for you.</p>
            </Col>
        </Row>

    </div>
  )
}

export default Component8