import React from 'react'
import { Container, Row , Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
// import projImg1 from '../assets/img/project-img1.png'
// import projImg2 from '../assets/img/project-img2.png'
// import projImg3 from '../assets/img/project-img3.png'
import netflix from '../assets/img/netflix.png'
import food1 from '../assets/img/food1.png'
import skin from '../assets/img/skin.png'
import grey from '../assets/img/grey.png'
import amazon from '../assets/img/amazon.png'
import ecom from '../assets/img/eecom.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Projects() {
  const projects = [
    {
      titel:"Netflix",
      description:"React with rest API",
      imgUrl:netflix
    },
    {
      titel:"Excess Food Management",
      description:"Python with MySQl",
      imgUrl:food1
    },
    {
      titel:"Skin Care",
      description:"Python Flask",
      imgUrl:skin
    },
    {
      titel:"Ayurvedhic Hospital",
      description:"Python Flask",
      imgUrl:grey
    },
    {
      titel:"Amazon Clone",
      description:"React with Firebase ",
      imgUrl:amazon
    },
    {
      titel:"Ecommerce website",
      description:"Python with MySQL",
      imgUrl:ecom
    }
  ]
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
          <h2>Projects</h2>
            <p>Some of my Works</p>
               </div>}
               </TrackVisibility>
               <Tab.Container id='projects-tabs' defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" >
                      Tab three
                    </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project , index)=>{
                          return (
                            <ProjectCard 
                            key={index}
                            {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Update Soon !</Tab.Pane>
                  <Tab.Pane eventKey="third">Update Soon !</Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}

export default Projects
