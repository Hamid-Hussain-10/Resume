import React from 'react';
import { FaPhone, FaHome, FaEnvelope, FaIdCard, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../App.css';

const Resume = () => {
    return (
        <div>
            <img src="profile.png" alt="Profile" className='image'/>
            <h1>HAMID HUSSAIN</h1>
            <p className='para'> Front-end Developer</p>
            <h2>PROFILE</h2>
            <div id="detail">  
                <p><i>I am a Front-end Developer and Software Engineering Student at the University of Karachi Department of Computer Science (UBIT).As a dedicated Frontend Developer with a knack for crafting engaging user experience and also hands-on expertise in turning design concepts into functional and responsive web applications. I am looking forward to working for further experience.</i>   </p>
            </div>
            <div className='container'>
            <section id="detail">
                <h3>CONTACT</h3>
                <ul>
                    <li><span> <FaIdCard /></span> 7110323979153</li>
                    <li><span><FaPhone /></span> 03433563121</li>
                    <li><span><FaEnvelope /></span> hamid554718903@gmail.com</li>
                    <li><span><FaHome /></span> korangi 1 1/2 karachi</li>
                    <li><span><FaLinkedin /></span> https://github.com/03554718903?tab=repositories</li>
                    <li><span><FaGithub /></span> https://www.linkedin.com/in/hamid-hussain-/</li>
                </ul>
            </section>

            <section id="detail">
               <h3>EXPERIENCE</h3>
               <ul>
                <li>1 and half year experience in front-end development.</li>
                <li>1 month remote internship in front-end development...<b>(Young Dev Intern).</b></li>
                <li>1 month remote internship in React.<b>(Young Dev Intern).</b></li>
                </ul>
           </section>

            <section id="detail">
                <h3>EXPERTISE</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>BOOTSTRAP</li>
                    <li>TAILWIND CSS</li>
                    <li>FIGMA</li>
                    <li>CANVA</li>
                </ul>
            </section>

            <section id="detail">
                <h3>EDUCATION</h3>
                <ul>
                <li><b>University Of Karachi</b></li>
                <li>Undergraduate:Software Engineering</li>
                <li>2023 - continue</li>

                <li><b>Fg Boys College Karachi Cantt</b></li>
                <li>Intermediate: General Science</li>
                <li>2020 - 2022</li>

                <li><b>Al-Qalam Model Public Secondary School</b></li>
                <li>Matric</li>
                <li>2011 - 2020</li>
                </ul>
                
            </section>

           <section id="detail">
            <h3>LANGUAGE</h3>
            <ul>
                <li>English</li>
                <li>Urdu</li>
                <li>Balti</li>
            </ul>
           </section>

           <section id="detail">
            <h3>INTRESTES</h3>
            <ul>
                <li>Research</li>
                <li>Reading Books</li>
            </ul>
           </section>
           </div>

        </div>
    );
}

export default Resume;