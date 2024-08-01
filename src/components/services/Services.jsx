
import{animate, motion, px, stagger} from "framer-motion"
import "./services.scss"

const  variants={
    initial:{
        x:-50,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


function Services() {

  return (
    <motion.div 
    className='services'
    variants={variants} 
    initial="initial" 
    whileInView="animate"
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on creating resonsive designs <br/>for your websites</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='/people.webp'/>
                <h1><motion.b whileHover={{color:"orange"}}>Responsive </motion.b>Designs</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b>Websites.</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:'lightgray',color:"black"}}>
                <h2>Responsive</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto aperiam excepturi ut, aut dolores nobis enim magnam adipisci suscipit similique blanditiis? Quaerat facilis totam eaque ex cum ab voluptatem.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:'lightgray',color:"black"}}>
                <h2>Responsive</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto aperiam excepturi ut, aut dolores nobis enim magnam adipisci suscipit similique blanditiis? Quaerat facilis totam eaque ex cum ab voluptatem.
                </p>
                <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:'lightgray',color:"black"}}>
                <h2>Responsive</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iusto aperiam excepturi ut, aut dolores nobis enim magnam adipisci suscipit similique blanditiis? Quaerat facilis totam eaque ex cum ab voluptatem.
                </p>
                <button>Go</button>
                </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services