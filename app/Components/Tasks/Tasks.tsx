"use client"

import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import styled from 'styled-components';

const Tasks = () => {

    const { theme } = useGlobalState();

    return (
        <TaskStyled theme={theme}>
           <h1>Task</h1> 
        </TaskStyled>
    );
};


const TaskStyled = styled.main`
    padding: 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    overflow-y: auto;

    height: 100%;

    &::-webkit-scrollbar{
        width: 0.5rem;
    }
`;

export default Tasks;