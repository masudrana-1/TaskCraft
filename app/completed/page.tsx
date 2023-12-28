"use client"

import React from 'react';
import { useGlobalState } from '../context/globalContextProvider';
import Tasks from '../Components/Tasks/Tasks';
import Head from 'next/head';

const page = () => {

    const { completedTasks } = useGlobalState();

    return (
            <Tasks tasks={completedTasks} title={"Completed Tasks"}/>
    );
};

export default page;