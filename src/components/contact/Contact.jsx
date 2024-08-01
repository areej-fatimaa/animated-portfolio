import { stagger } from "framer-motion"
import "./contact.scss"
import React from 'react'
import {motion} from "framer-motion"

const variants={
  initial:{
    y:500,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
        duration:0.5,
        staggerChildren:0.1,
    },
  },
};

function Contact() {
  return (
    <div className="contact">
        <div className="textContainer">
           <h1>
            Let's work together
           </h1>
           <div className="item">
            <h2>Mail</h2>
            <span>hello@react.dev</span>
           </div>
           <div className="item">
            <h2>Address</h2>
            <span>street Pakistan</span>
           </div>
           <div className="item">
            <h2>Phone</h2>
            <span>+92 319 3456789</span>
           </div>
        </div>
        <div className="formContainer">
        <form>
            <input type="text" required  placeholder="Name"/>
            <input type="email"  required placeholder="Email"/>
            <textarea rows={6} placeholder="Message"/>
            <button>Submit</button>

        </form>
        </div>
    </div>
  )
}

export default Contact