import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Loader from '../components/Loader';

function Home() {

    const [loading, setLoading] = useState(true);
    

    return (
        <AnimatePresence>
            {
                loading ? ( 
                    <motion.div key="pre-loader"><Loader setLoading={setLoading} />
                    </motion.div> 
                ) : (
                    <div className="wrapper">
                        
                        <main className="page-main">
                            <h2>Home Page</h2>
                        </main>
                        
                    </div> 
                )
            }
        </AnimatePresence>                
    )
}

export default Home