import {React, useEffect} from 'react'
import './PageLoader.css'
import { motion } from 'framer-motion';

// variants
const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
}

const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
}



function PageLoader( {setLoading} ) {
   
    return (
        <div className='pageloader-container'>
            <motion.div 
                variants= {container}
                initial= "hidden"
                animate= "show"
                exit= "exit"
                onAnimationComplete= {() => setLoading(false)}
                
            >
                
                    <div className="circle1" variants={item}></div>
                    <div className="circle2" variants={item}></div>
                    <div className="circle3" variants={item}></div>
                    <div className="circle4" variants={item}></div> 
                
            </motion.div>  
        </div>
    )
}

export default PageLoader
