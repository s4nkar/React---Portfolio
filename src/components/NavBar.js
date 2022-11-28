import React from 'react'
import { useState,useEffect } from 'react';
import { Navbar,Container,Nav} from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon2 from '../assets/img/stack1.png'
import navIcon3 from '../assets/img/nav-icon3.svg'

function NavBar() {
    const [activeLink,setActiveLink] = useState('home')
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll=()=>{
            if (window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll",onScroll);

        return ()=> window.removeEventListener("scroll",onscroll); 
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

  return (
    <div>
      <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >

            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sankar-dev-s-161002245/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100081139895525"><img  src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/san.kar____?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() =>{
              window.location.href='#contact'
                console.log("connect");
            }}> <span>Let's Connect</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default NavBar
