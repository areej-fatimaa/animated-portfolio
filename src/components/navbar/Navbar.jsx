import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import{motion} from "framer-motion"
const Navbar=()=>{
    return(
        <div className="navbar">
            {/*sidebar*/
            <Sidebar/>
            }
            <div className="wrapper">
                <motion.span
                 initial={{opacity:0,scale:0.5}} 
                 animate={{opacity:1,scale:1}} 
                 transition={{duration:0.5}}
                 >
                    Areej Portfolio
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/linkdin.png"></img></a>
                    <a href="#"><img src="/fiver.png"></img></a>
                    <a href="#"><img src="/github.png"></img></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar