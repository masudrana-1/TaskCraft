"use client"

import React from 'react';
import { createContext, useContext, useState } from "react"
import themes from "./themes"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUser } from '@clerk/nextjs';


export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()


export const GlobalProvider = ({ children }) => {

    const { user } = useUser();
    
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);


    // create task modal 
    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const collapsedMenu = () => {
        setCollapsed(!collapsed);
    }


    // all task load 
    const allTasks = async () => {
        setIsLoading(true);

        try {
            const res = await axios.get("api/tasks")


            // sort by time 
            const sorted = res.data.sort((a, b) => {
                return (
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
            });

            // console.log(sorted)

            setTasks(sorted);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")
        }
    };

    // delete task
    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`);
            toast.success("Task Deleted.")

            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")
        }
    }


    // update task 
    const updateTask = async (task) => {
        try {
            
            const res = await axios.put(`/api/tasks`, task);

            toast.success("Task Updated")

            allTasks();

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")
        }
    }


    // completed task 
    const completedTasks = tasks.filter((task) => task.isCompleted === true);
    
    // console.log(completedTasks);
    
    
    // important tasks 
    const importantTasks = tasks.filter((task) => task.isImportant === true);
    
    // console.log(importantTasks)
    
    // incomplete tasks 
    const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

    // console.log(incompleteTasks)


    // load all task 
    React.useEffect(() => {
        if (user) allTasks();
    },[user])

    return (
        <GlobalContext.Provider value={{
            theme,
            tasks,
            allTasks,
            deleteTask,
            isLoading,
            completedTasks,
            importantTasks,
            incompleteTasks,
            updateTask,
            modal,
            openModal,
            closeModal,
            collapsed,
            collapsedMenu,

        }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);