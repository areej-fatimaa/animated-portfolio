import { stagger } from "framer-motion";
import "./hero.scss"
import React from 'react'
import{motion} from "framer-motion"

const textVarients={
    initial:{
    x:-500,
    opacity:0,
    },
    animate:{
    x:0,
    opacity:1,
    transition:{
    duration:1,
    staggerChildren:0.1,
  },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
        duration:2,
        repeat:Infinity,
      },
    },
};


const SliderVarients={
    initial:{
    x:0,
    },
    animate:{
    x:"-220%",
    transition:{
        repeat:Infinity,
        repeatType:"mirror",
    duration:20,
  },
    },
};

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVarients} initial="initial" animate="animate">
            <motion.h2 variants={textVarients}>Areej Fatima</motion.h2>
            <motion.h1 variants={textVarients}>FrontEnd Developer</motion.h1>
            <motion.div variants={textVarients} className="buttons">
                <motion.button variants={textVarients}>See the Latest Works</motion.button>
                <motion.button variants={textVarients}>Contact Me</motion.button>
            </motion.div>
            <motion.img  variants={textVarients} animate="scrollButton" src="/scroll.png"></motion.img>
        </motion.div>
        </div>
        <motion.div className="slidingContainer" variants={SliderVarients} initial="initial" animate="animate">
            Content Writer Power BI Developer Frontend Developer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" style={{ height: '100%' }}></img>
        </div>
    </div>

  )
}

export default Hero