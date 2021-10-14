import { useEffect, useState } from "react"
// import AnimatedCursor from "react-animated-cursor"
import './style.css'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from "./components/Loader"
import Intro from "./components/Intro"
import Cursor from "./components/Cursor"
import Button from "./components/Button"

function App() {
  const [loading, setLoading] = useState(true);
  
  function handleClick(e) {
      e.preventDefault()
      // setIsClicked(true)
      console.log('The link was clicked.');
  }

  return (
    <> 
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? ( 
            <motion.div key="loader"><Loader setLoading={setLoading} /></motion.div> 
          ) : (
            <>
              <div className="App" onClick={handleClick}>        
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
                      <h1>We are here to <a
                        onClick={(e) => {
                          e.preventDefault()
                          window.location.href='http://google.com';
                          
                        }}
                      >help you</a></h1>
                      <Button  />
                      
                    </div>
                  </main>
                  <Footer />
                </motion.div>
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
