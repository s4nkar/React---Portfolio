import React from 'react'
import { useState,useEffect } from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { Col, Container, Row } from 'react-bootstrap'
// import headerImage from '../assets/img/header-img.svg'
import headerImage from '../assets/img/edicted.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';



function Banner() {

    const [loopNum,setLoopNum] = useState(0)
    const [isdeleting,setIsDeleting] = useState(false)
    const toRotate=["web developer" , "Web Designer" , "Full-Stack Developer"]
    const [text,setText] = useState('')
    const [delta,setdelta] = useState(300 - Math.random() * 100);
    const period=2000;
    useEffect(()=>{
        let ticker= setInterval(()=>{ 
            tick()
        },delta)

        return () => { clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isdeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isdeleting){
            setdelta(prevdelta => prevdelta/2)

        }

        if (!isdeleting && updatedText === fullText){
            setIsDeleting(true);
            setdelta(period);

        }else if(isdeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1);
            setdelta(500)
        }
    }

  
  return (
    <div>
      <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn animate__delay-1s__faster" : ""}>
                    <span className="tagline">
                        Welcome to my Portfolio
                    </span>
                    <h1>{`Hi i'm Sankar `} <span className='wrap'>{text}</span></h1>
                    
                    <p>You are the average of 5 people you hang around</p>
                    <p className='new-txt'>- sankar</p>
                  
                    <button onClick={()=>{
                        window.location.href="#contact"
                    }}>Let's Connect <ArrowRightCircle size={25} /></button>
             
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img className='banner_image' src={headerImage} alt="Header img" />
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Banner
