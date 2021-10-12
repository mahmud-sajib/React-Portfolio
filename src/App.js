import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor"
import './style.css'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// import "./sass/main.scss";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Components
import Loader from "./components/Loader";
import Intro from "./components/Intro";

function App() {
  const [initloader, setInitLoader] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitLoader(false)

      setTimeout(() => {
        setLoading(true);
      }, 0);

    }, 2000)
  },[])

  // useEffect(() => {
  //   loading
  //     ? document.querySelector("body").classList.add("loading")
  //     : document.querySelector("body").classList.remove("loading");
  // }, [loading]);

  return (

    
<>
    
      {
        initloader ? (
          <Intro />
        ) 
        : 
        (
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {loading ? ( 
                <motion.div key="loader"><Loader setLoading={setLoading} /></motion.div> 
              ) : (
                <>
                  <div className="App">
                    <AnimatedCursor />
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
                        <h1>We are here to <a href="https://fast.com/">help you</a></h1>
                      </div>
                    </main>
                    
                    <Footer />
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        )
      }
      </>
    
    
  );
}

export default App;
