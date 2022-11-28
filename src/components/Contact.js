import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImage from '../assets/img/contact-img.svg'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'
// import contactImage from '../assets/img/newcontact.png'

function Contact() {
    const formInitialDetails ={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
  
    const [formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttonText,setButtonText] = useState('sent')
    const [status,setStatus] = useState({})

    const onFormUpdate= (category,value) =>{
            setFormDetails({
                ...formDetails,
                [category]:value
            })
    }

    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     setButtonText('Sending...')
    //     let response= await fetch("http://localhost:5000/contact",{
    //         method:'POST',
    //         headers:{
    //             "Content-Type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),

    //     });
    //     setButtonText("Send")
    //     let result= response.json();
    //     setFormDetails(formInitialDetails)
    //     if (result.code === 200){
    //         setStatus({status: true , message: "Message Sent Successfully"})
    //     } else {
    //         setStatus({status: false , message: "Somthing Went Wrong, please try again later." })
    //     }
    // }

    function sendEmail(e){
        setButtonText('Sending...')
        e.preventDefault();

    emailjs.sendForm('service_6iscq6w', 'template_234t70w', e.target, 'klvWR2GG8veRSeIKR')
      .then((result) => {
          console.log(result.text);
          swal("Success!", "Message Delivered Successfully", "success");
          setButtonText("Send")
          
      }, (error) => {
          console.log(error.text);
          swal("Error!", "Somthing Went Wrong, please try again later.", "warning");
          setButtonText("Send")
          
      });

      e.target.reset()


    }

  return (
    <div>
      <section className="contact" id="contact">
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImage} alt="Contact Us" />
                </Col>
                <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={sendEmail}>
                            <Row>
                                {/* <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First name" onChange={(e)=> onFormUpdate('firstName',e.target.value)} />
                                </Col> */}
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="First name" required name='fname' />
                                </Col>
                                <Col sm={6} className="px-2">
                                <input type="text"  placeholder="Last name"  name='lname' />
                                </Col>
                                <Col sm={6} className="px-2">
                                <input type="email"  placeholder="Email Address" required name='email' />
                                </Col>
                                <Col sm={6} className="px-2">
                                <input type="number"  placeholder="Phone No." required name='phone' />
                                </Col>
                                <Col >
                                <textarea row="6"  placeholder="Message" required name='message'  ></textarea>
                                <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                </Col>
            </Row>
        </Container>
      </section>

    </div>
  )
}

export default Contact
