import React from 'react'
import {Row,Col} from 'reactstrap'
import './JoinUs.css'

function JoinUs() {
  return (
    <div className='joinUs-div-style'>
        <Row>
            <Col>
            <hr style={{width:"50%",height:"2px",color:"white"}}/>
            <h6 >Join Us</h6>
            <br/>
            <br/>

            </Col>
            
            
        </Row>
        <Row>
            <Col style={{paddingTop:"70px"}}>
            <h5>BE A PART OF OUR <br/>
            HAPPY COMMUNITY</h5>
            <p className='text-joinUs-style'>We take immense pride in our achievements and have a happy and satisfied community that trusts our work wholeheartedly. Then what are you waiting 
                for , come and be a part of the merklabs family,because we are here always for you. </p>
                <button className='btn-joinUs-style'>Explore more</button>
            </Col>
            <Col>
            <div className='code-div-style'>
                <p>response = stub.<span style={{color:"green"}}>PostModelOutputs</span>(<br/>
                  service_pb2.PostModelOutputsRequest(<br/>
                  model_id="THE_MODEL_ID"<br/>
                  inputs=[<br/>
                  resources_pb2.Data(<br/>
                     image=resources_pb2.Image(<br/>
                       url="https://samples.clarifai.com/metro-north.jpg"<br/>
                     )<br/>
                  )<br/>
                  )<br/>
                  ]<br/>
                ),<br/>
                metadata=metadata<br/>
                )
                <br/>
                print("Preducted concepts:")
                <br/>
                <span style={{color:"green"}}>for concept in response.outputs[0].data.concepts:</span> <br/>
                  print(concept.name + "" str(concept.value))
                </p>
            </div>
            </Col>
        </Row>

    </div>
  )
}

export default JoinUs