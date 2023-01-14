import React from 'react'
import { Container, Row , Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'

import air6 from '../assets/img/air6.jpg'
import air from '../assets/img/air.jpg'
import air5 from '../assets/img/air5.png'
import air2 from '../assets/img/air2.jpg'
import air3 from '../assets/img/air3.jpg'
import air4 from '../assets/img/air4.jpg'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

function Projects() {
  const projects = [
    {
      titel:"YouTube Clone",
      description:"Fully functionality youtube clone using react Js and Material Ui",
      imgUrl:air6
    },
    {
      titel:"Text-Sentiment Analysis",
      description:"A system which predict emotion based on comments from the posts and emotion based on real time chat",
      imgUrl:air
    },
    {
      titel:"Face Recognition",
      description:"This is a project based on Mechine Learning-based approach using  Haar-cascade-algorithm",
      imgUrl:air2
    },
    {
      titel:"Weapon Detection",
      description:"Model of a cctv, which can recognise Weapons along with face for high security. This model is implemented using convolutional neural network or CNN ( a deep learning neural network )  ",
      imgUrl:air3
    },
    {
      titel:"Ecommerce website",
      description:"Fully Functional E-commerce website using Python and MYSQL",
      imgUrl:air4
    },
    {
      titel:"Spotify Clone",
      description:"This is a Music Player working with Shazam-Core Api, built using React, tailwind, redux...",
      imgUrl:air5
    }
  ]
  
  
  const projects2 = [
    {
      titel:"Movie Planner",
      description:"Managemnt system for filim Industry, using PHP, MySQL ",
      imgUrl:air6
    },
    {
      titel:"Online Piza-Shop",
      description:"Model of a Piza shop with complete functions, using Python-Flask and MySQL",
      imgUrl:air
    },
    {
      titel:"E-Postoffice",
      description:"Model of a digitial post office using python, MYSQL and Android java",
      imgUrl:air2
    },
    {
      titel:"Food Waste-management",
      description:"Managemnt Project based on excess-food delivery and maintanance, Using Python and MySQL",
      imgUrl:air3
    },
    {
      titel:"Netflix Clone",
      description:"Cloned Version of Netflix using TMDB database and React Js",
      imgUrl:air4
    },
    {
      titel:"Organ Donation",
      description:"Main Concept of this system is to make organ and blood donations easily. build using Python-Flask, MySQL, Android java",
      imgUrl:air5
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
            <p>Some of My Works</p>
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
                  <Tab.Pane eventKey="second">
                  <Row>
                      {
                        projects2.map((project , index)=>{
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
