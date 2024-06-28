// import { useState } from 'react';
import './about.css';
// import {useNavigate} from 'react-router-dom';
import sreeImage from './sree.jpg.jpg'; 
// import axios from "axios";

function Aboutme2() {
    return (
            <div className="aboutmee">
            <div className="profile-section">
                <img src={sreeImage} alt="Sreelakshmi E A" /> 
            </div>
            
        
        <div className="info-section">
            <h1>My Story</h1>
            <h2>About Me</h2>
            <p>My name is Sreelakshmi E A. I'm studying in Jyothi Engineering College. I'm currently majoring in Computer Science and Engineering. I'm in the final year of my college. I would like to become a good developer when I graduate.</p>
            <div className="contact-info">
                <p><strong>Address:</strong> Kerala, India</p>
                <p><strong>Phone No:</strong> 123456789</p>
                <p><strong>Email ID:</strong> sree@gmail.com</p>
            </div>
            <h3>My Expertise</h3>
            <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React.js</span>
            </div>
        </div></div>
    );
}

export default Aboutme2;


