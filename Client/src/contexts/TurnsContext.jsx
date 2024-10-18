import { createContext, useState } from "react";

export const TurnsContext = createContext({
    turns: [],
    setTurns:()=>{},
    cancelTurn:()=>{}
})

// eslint-disable-next-line react/prop-types
export const TurnsProvider = ({children})=>{
    const [turns, setTurns] = useState([])
   
    const value= {
    turns,
    setTurns,
    }

    return (
       <TurnsContext.Provider value={value}>{children}</TurnsContext.Provider>
    )
}

