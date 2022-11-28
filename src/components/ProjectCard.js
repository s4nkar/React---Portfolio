import React from 'react'
import { Col } from 'react-bootstrap'
import projImg1 from '../assets/img/project-img1.png'
function ProjectCard({titel,description,imgUrl}) {
  return (
   <Col sm={6} md={4}>
    <div className="proj-imgbx">
      <a href={imgUrl}>
         <img src={imgUrl} alt="Image card" />
         <div className='proj-txtx'>
            <h4>{titel}</h4>
            <span>{description}</span>
         </div>
         </a>
    </div>

   </Col>
  )
}

export default ProjectCard
