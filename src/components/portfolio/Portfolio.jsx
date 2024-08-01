import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
const items=[
  {
    id:1,
    title:"Customer Engagement Segmental Analysis",
    img:"/Screenshot 2024-05-30 104709.png",
    desc:"My project on customer engagement sentiment analysis uses EF Core, SQL Server, and Power BI for efficient ETL processes and insightful data visualization. "
  },
  {
    id:2,
    title:"DOS Shell",
    img:"/dos.jpg_large",
    desc:"The DOS Shell is a command-line operating system providing a text-based interface for managing files and executing commands. It simplifies user interaction with DOS through a structured command environment."
  },
  {
    id:3,
    title:"Medical Store Management System",
    img:"/management system.jpeg",
    desc:"The Medical Store Management System, built with Windows Forms in C#, streamlines inventory and sales management. It provides a user-friendly interface for efficient tracking of medicines and automated billing. "
  }
];

const Single=({item})=>{
  const ref=useRef();

  const{scrollYProgress}=useScroll({target:ref});
  const y=useTransform(scrollYProgress,[0,1],[-100,100]);

  return (
    <section >
      <div className="container">
      <div className="wrapper">
        <div className="imgContainer" ref={ref}>
        <img src={item.img}/>
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const ref=useRef()
  const{scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});

  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio