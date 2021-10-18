import React, {useState, useEffect} from "react"

// creating `context`
const StateContext = React.createContext()

function StateProvider({children}){
    const [cursor, setCursor] = useState({ active: false });

    const [isOpen, setOpen] = useState(false);
    
    return(
        <StateContext.Provider value={{
            cursor, setCursor, isOpen, setOpen
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider}