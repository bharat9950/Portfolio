import React, { useState, useEffect } from 'react';
import { Bars } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import Nav from './Nav';
import source from '../images/contact.png';
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Footer from './Footer';

const Contact = () => {
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

  return (
    <>
      <Nav />
      <div className="contact_info">
        <div className="info_container">
          <motion.div
            className="social"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              As I am actively looking for an entry-level position in the software development area,
              I am looking forward to seeing some suggestions and exchanging thoughts. Let's connect!
              Here are my social media links.
            </p>
            <div className='social_logo'>
              <a href="https://www.linkedin.com/in/bharat-choudhary-933630247/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/bharat9950" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
              <a href="https://www.instagram.com/bharat_choudhary_14?igsh=MWh0cTJyeGNyYnN4aQ==" target="_blank" rel="noreferrer" title="Instagram"><FaInstagramSquare /></a>
              <a href="mailto:omprathore55555@gmail.com" title="Email"><SiGmail /></a>
            </div>
          </motion.div>

          <motion.div
            className="img_conti"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img className='me' src={source} alt="Contact Me" />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;