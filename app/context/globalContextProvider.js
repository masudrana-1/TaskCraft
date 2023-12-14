"use client"

import React from 'react';
import { createContext, useContext, useState } from "react"
import themes from "./themes"
import axios from 'axios';
import toast from 'react-hot-toast/headless';
import { useUser } from '@clerk/nextjs';


export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()


export const GlobalProvider = ({ children }) => {

    const { user } = useUser();
    
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);

    const allTasks = async () => {
        setIsLoading(true);

        try {
            const res = await axios.get("api/tasks")

            setTasks(res.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. 😒")
        }
    };

    React.useEffect(() => {
        if (user) allTasks();
    },[user])

    return (
        <GlobalContext.Provider value={{
            theme,
            tasks
        }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);