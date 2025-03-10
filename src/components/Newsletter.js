import React from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useState , useEffect } from 'react'

function Newsletter({ onValidated, status, message}) {
    const [email,setEemail] = useState('')
   
   useEffect(()=>{
    if (status === 'success') clearFields(); 
   },[status])
   
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 && 
        onValidated({
            EMAIL:email
        })
    }

    const clearFields =()=>{
        setEemail('')
    }
  return (

      <Col lg={12}>
        <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our NewsLetter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant='danger'>{message}</Alert>}
                        {status === 'success' && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input className='last-inp' type="email" value={email} onChange={(e)=> setEemail(e.target.value)} placeholder="Email Address" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
        </div>
      </Col>
  
  )
}

export default Newsletter
