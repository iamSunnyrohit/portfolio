import React from 'react'
import "./about.css";
import Me from '../../assets/1.webp';
import {BsAward} from 'react-icons/bs';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {Me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          As a recent graduate with a Master’s degree in Computer Science, I am a dedicated full stack developer with hands-on experience in both front-end and back-end technologies. 
          My academic projects have equipped me with a strong foundation in web development, software engineering principles, and an agile mindset.
          Proficient in JavaScript, React, Node.js, and database management.
         <p> I am eager to leverage my technical skills to contribute effectively to a dynamic development team.</p>
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About