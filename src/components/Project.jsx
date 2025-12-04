import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import Nav from './Nav';
import { FaGithub } from "react-icons/fa";
import link1 from '../images/zeroo.png';
import link2 from '../images/fash.png';
import link3 from '../images/pers.jpg';
import Footer from './Footer';

const Project = () => {
  const [loading, setLoading] = useState(true);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="project_main">
        <motion.h1
          className='main_heading'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span>Projects</span>
        </motion.h1>

        <motion.div
          className="project_container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="project_card" variants={cardVariants}>
            <div className="img_cont">
              <img src={link1} alt="moviebuddy" />
            </div>
            <h1>Catuitionbureau</h1>
            <h1>(CA Tuition Bureau Online Platform)</h1>
            <p>CaTuitionBureau is a web application built using the React. It offers users a platform on student
                and teacher intraction, and explore information. The app future a user-friendly interface for browsing tuition,
                making bookings, and managing user profiles.</p>
            <a href="https://www.catuitionbureau.in/" className='git' target="_blank" rel="noreferrer">
              <button className='gb'>Visit Website <FaGithub /></button>
            </a>
          </motion.div>

          <motion.div className="project_card" variants={cardVariants}>
            <div className="img_cont">
              <img src={link2} alt="fashionhub" />
            </div>
            <h1>Web Hub </h1>
            <h1>(An E-Commerce App)</h1>
            <p>Created an e-commerce app using the MERN stack. I used EJS for building the structure of the application and normal CSS for styling. For database management, I used MongoDB. It contains login/register and home pages where users can select products to buy.</p>
            <a href="https://github.com/BharatRathore/FashionHub" className='git' target="_blank" rel="noreferrer">
              <button className='gb'>Github Link <FaGithub /></button>
            </a>
          </motion.div>

          <motion.div className="project_card" variants={cardVariants}>
            <div className="img_cont">
              <img src={link3} alt="portfolio" />
            </div>
            <h1>Personal Portfolio</h1>
            <p>Created a personal portfolio website using HTML, CSS, JavaScript, and React.js, hosted on Vercel. The home page includes my intro and resume. There are also project, skills, and contact pages. On the project page, I have listed my projects in the form of cards with GitHub source code links.</p>
            <a href="https://github.com/bharat9950" className='git' target="_blank" rel="noreferrer">
              <button className='gb'>Github Link <FaGithub /></button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  )
}

export default Project;