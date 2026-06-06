import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { Extratext } from './Extratext';
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import Nav from './Nav';
import img1 from '../images/bgs.png'
import resume13 from '../images/Bharat_Resume_13.pdf'
import resume12 from '../images/Bharat_Resume__12.pdf'
import Footer from './Footer';

const Home = () => {
    const [loading, setLoading] = useState(true);

    function handledelay(event) {
        const button = event.currentTarget.querySelector('.dra') || event.currentTarget;
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
                    <div className="download-buttons">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={resume13} className='dr' rel='noreferrer' target='_blank' download="Bharat_Resume_13.pdf" onClick={handledelay}>
                                <button className='dra'><IoMdDownload /> Download Resume 13</button>
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href={resume12} className='dr' rel='noreferrer' target='_blank' download="Bharat_Resume__12.pdf" onClick={handledelay}>
                                <button className='dra'><IoMdDownload /> Download Resume 12</button>
                            </a>
                        </motion.div>
                    </div>
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
                        I am currently pursuing my MCA at VGU Jaipur in the department of <b> Computer Science and Application having cgpa of 9.1</b>. <br /><br />
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