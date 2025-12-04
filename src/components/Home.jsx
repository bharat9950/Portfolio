import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { Extratext } from './Extratext';
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import Nav from './Nav';
import img1 from '../images/bgs.png'
import pdflink from '../images/Bharat_Resumes.pdf'
import Footer from './Footer';

const Home = () => {
    const [loading, setLoading] = useState(true);

    function handledelay(event) {
        // Optional: You might not need this delay logic anymore if the UI is fast, 
        // but keeping it as per original functionality request if needed.
        // For a smoother UX, direct download is usually better, but I'll keep the logic.
        const button = document.querySelector('.dra');
        // We can't easily access the button via querySelector safely in React if there are multiple, 
        // but for this specific case it's fine or we can use a ref. 
        // I'll keep the original logic for now.
        if (button) {
            button.disabled = true;
            setTimeout(() => {
                button.disabled = false;
            }, 2000);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <Bars
                    height="80"
                    width="80"
                    color="#FF9C00"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <>
            <Nav />
            <div className='HomePage'>
                <motion.div
                    className='HomeText'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1>Hi There!</h1>
                    <h1>I'M <b>Bharat Rathore</b></h1>
                    <Extratext />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href={pdflink} className='dr' rel='noreferrer' target='_blank' download="Bharat_Resumes.pdf" onClick={handledelay}>
                            <button className='dra'><IoMdDownload /> Download Resume</button>
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="img-cont"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <img src={img1} alt="Bharat Rathore" className='img1' />
                </motion.div>
            </div>

            <div className="breif">
                <motion.div
                    className="intro"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1>About Me</h1>
                    <p>
                        Hi, my name is <b>Bharat Rathore</b> and I am from Jodhpur, Rajasthan.
                        I am currently pursuing my MCA at VGU Jaipur in the department of <b> Computer Science and Application having cgpa of 9.15</b>. <br /><br />
                        My technical skills include programming in C, data structures, and algorithms. I am also familiar with web development using the MERN stack.
                        Using my web development skills, I have worked on projects like West Management System web application.
                        but my strength lies in core subjects like oops, os, dbms software, and computer networks. <br /><br />
                        Apart from this i am also active in extracurricular activities like playing cricket, volley-ball and also table-tannis.
                    </p>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}

export default Home;