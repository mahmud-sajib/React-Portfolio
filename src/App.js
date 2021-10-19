// React stuff
import { useState, useContext } from 'react'

// Styles
import './style.css'

// 3rd Party Lib
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import {Switch, Route} from "react-router-dom"

import { StateContext } from './context/State'

// Pages
import Home from "./pages/Home";
import Client from "./pages/Client";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from "./components/Loader"
import Cursor from "./components/Cursor"
import Modal from './components/Modal';

function App() {

  const [loading, setLoading] = useState(true);

  const {openModal} = useContext(StateContext)

  return (
    <> 
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? ( 
            <motion.div key="pre-loader"><Loader setLoading={setLoading} /></motion.div> 
          ) : (
            <>
              <div className="App">
                
                     
                <div className="wrapper" onClick={openModal}>
                  <Header />
                  <main className="page-main">
                  <Switch>
                  
                    <Route exact path="/">
                      <Home />
                    </Route>
                    
                    <Route path="/client">
                      <Client />
                    </Route>
                    
                    <Route path="/service">
                      <Service />
                    </Route>

                    <Route path="/contact">
                      <Contact />
                    </Route>
                  
                  </Switch>
                  </main>

                  <Footer />
                </div>
                <Cursor />
                <Modal />
              </div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
