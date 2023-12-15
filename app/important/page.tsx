"use client"

import React from 'react';
import { useGlobalState } from '../context/globalContextProvider';
import Tasks from '../Components/Tasks/Tasks';

const page = () => {

    const {importantTasks} = useGlobalState()

    return (
        <Tasks tasks={importantTasks} title={"Important Tasks"}/>
    );
};

export default page;