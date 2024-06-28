// import { useState } from 'react';
import './about.css';
// import {useNavigate} from 'react-router-dom';
import sreeImage from './sree.jpg.jpg'; 
// import axios from "axios";


function Aboutme() {
    return (
        <div className="container">
            <div className="profile-section">
                <img src={sreeImage} alt="Sreelakshmi Profile Picture" /> 
            </div>
            
        </div>
    );
}
export default Aboutme;