"use client"

import React from 'react';
import { useGlobalState } from '../context/globalContextProvider';
import Tasks from '../Components/Tasks/Tasks';

const page = () => {

    const {incompleteTasks} = useGlobalState()

    return (
        <Tasks tasks={incompleteTasks} title={"Incomplete Tasks"}/>
    );
};

export default page;