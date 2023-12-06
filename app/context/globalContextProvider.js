"use client"

import { createContext, useState } from "react"
import themes from "./themes"

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()


export const GlobalProvider = ({ children }) => {
    
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

    return (
        <GlobalContext.Provider value={{
            theme,
        }}>
            <GlobalUpdateContext.Provider value={setGlobalState}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}