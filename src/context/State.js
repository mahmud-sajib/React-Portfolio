import React, {useState, useEffect} from "react"

// creating `context`
const StateContext = React.createContext()

function StateProvider({children}){
    const [cursor, setCursor] = useState({ active: false });
    
    return(
        <StateContext.Provider value={{
            cursor, setCursor
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateContext, StateProvider}