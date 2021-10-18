import { useEffect, useState, useContext } from "react"
// import AnimatedCursor from "react-animated-cursor"
import './style.css'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { StateContext } from "./context/State";

import ModalVideo from "react-modal-video";
import useCursorHandlers from "./hooks/useCursorHandlers";


// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from "./components/Loader"
import Intro from "./components/Intro"
import Cursor from "./components/Cursor"
import Button from "./components/Button"

function App() {

  const cursorHandlers = useCursorHandlers();

  const [loading, setLoading] = useState(true);

   // consuming contexts
   const {isOpen, setOpen} = useContext(StateContext)

  return (
    <> 
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? ( 
            <motion.div key="loader"><Loader setLoading={setLoading} /></motion.div> 
          ) : (
            <>
              <div className="App" onClick={(e) => setOpen(true)}>        
                <motion.div class="wrapper"
                  initial={{ opacity:0, y:-180 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.6
                  }}
                >
                  <Header />
                  <main class="page-main">
                    <div>
                      <h1>We are here to 
                        <a href="https://fast.com" {...cursorHandlers}> help you</a>
                      </h1>
                    </div>
                  </main>
                  <Footer />
                </motion.div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="sSZNLAIL65M"
                  onClose={() => setOpen(false)}
                />
                <Cursor />

                
              </div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
