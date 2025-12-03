import React, { useState, useEffect } from "react";
import { Bars } from 'react-loader-spinner';
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from './Footer';
import img2 from '../images/js.svg';
import img3 from '../images/nodejs.svg';
import img4 from '../images/c.png';
import img5 from '../images/react.svg';
import img6 from '../images/mongodb.svg';
import img7 from '../images/html.svg';
import img8 from '../images/css.svg';
import img9 from '../images/exp.png';
import img10 from '../images/mysql.png';

const Skills = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="skills">
        <div className="technical_skills">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h1>
          <motion.div
            className="tech_logo"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="cnt" variants={itemVariants} title="C"><img src={img4} alt="c" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="HTML"><img src={img7} alt="html" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="CSS"><img src={img8} alt="css" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="JavaScript"><img src={img2} alt="js" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="Node.js"><img src={img3} alt="nodejs" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="Express.js"><img src={img9} alt="expressjs" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="React"><img src={img5} alt="react" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="MongoDB"><img src={img6} alt="mongodb" /></motion.div>
            <motion.div className="cnt" variants={itemVariants} title="MySQL"><img src={img10} alt="mysql" /></motion.div>
          </motion.div>
        </div>

        <div className="relevent_coursework">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Relevant Coursework
          </motion.h1>
          <motion.div
            className="course_list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul>
              <li>Operating Systems</li>
              <li>Data Structures & Algorithms</li>
              <li>Data Communication</li>
              <li>Database Management Systems</li>
            </ul>
            <ul>
              <li>OOPS (Java)</li>
              <li>Computer Networking</li>
              <li>Cryptography</li>
              <li>Software Engineering</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;