import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';
import ServiceSlider from '../components/ServiceSlider';

function Service() {

    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence>
            {
                loading ? ( 
                    <motion.div key="pre-loader"><Loader setLoading={setLoading} />
                    </motion.div> 
                ) : (
                    <div className="wrapper" >
                       
                        <main className="page-main">
                            <h6>some things i've done over the years</h6>
                            <ServiceSlider />
                        </main>
                        
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Service