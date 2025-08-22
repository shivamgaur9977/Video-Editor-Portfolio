import { useState } from 'react';
import Navbar from './Components/Navbar';
import './Portfolio.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RequestForm from './Components/RequestForm';
import Projects from './Projects';
import axios from 'axios';

export default function Portfolio() {

    // emailjs.init("eQKHbS_QTVxgco5Xn");


    return <>
        <div className="animated-bg"></div>

        <div className="particle" style={{ top: "10%", left: "10%", animationDelay: "0s" }}></div>
        <div className="particle" style={{ top: "20%", left: "80%", animationDelay: "1s" }}></div>
        <div className="particle" style={{ top: "70%", left: "20%", animationDelay: "2s" }}></div>
        <div className="particle" style={{ top: "50%", left: "90%", animationDelay: "3s" }}></div>
        <div className="particle" style={{ top: "30%", left: "60%", animationDelay: "4s" }}></div>

        <Navbar />

        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Darshan Gour</h1>
                <p>Video Editor & Graphic Designer crafting visual stories that captivate and inspire</p>
                <a href="#portfolio" className="cta-button">View My Work</a>
            </div>
        </section>

        <section className="services fade-in" id="services">
            <h2 className="section-title">My Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon"><i className="fa-solid fa-clapperboard"></i></div>
                    <h3>Video Editing</h3>
                    <p>Professional video editing for commercials, social media, documentaries, and creative projects. I bring your vision to life with seamless cuts, color grading, and stunning effects.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon"><i className="fa-solid fa-palette"></i></div>
                    <h3>Graphic Design</h3>
                    <p>Eye-catching graphic design for branding, marketing materials, web graphics, and print media. Creating visual identities that make lasting impressions.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon"><AutoAwesomeIcon sx={{minWidth: '200px', height: '60px'}}/></div>
                    <h3>Motion Graphics</h3>
                    <p>Dynamic motion graphics and animations that engage audiences. From logo animations to complex visual effects, I create movement that tells your story.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon"><i className="fa-solid fa-medal"></i></div>
                    <h3>Brand Identity</h3>
                    <p>Complete brand identity packages including logos, color schemes, typography, and brand guidelines. Building cohesive visual languages for businesses.</p>
                </div>
            </div>
        </section>

        <Projects/>

        <RequestForm/>
        <br />
        {/* <footer>
            <div className="social-links">
                <a href="#">📧email : deepcanva07@gmail.com</a>
                <a href="#">💼</a>
                <a href="#">📱 Contact No.:- +91 9977222650</a>
                <a href="#">🎥</a>
            </div>
            <p>&copy; 2025 Alex Rivera Creative Studio. All rights reserved.</p>
        </footer> */}
    </>
}