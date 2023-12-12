"use client"

import CreateContent from '@/app/completed/Models/CreateContent';
import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/TaskItem';



interface Props{
    title: string;
    tasks: any[];
}

const Tasks = ({title, tasks}: Props) => {

    const { theme } = useGlobalState();

    return (
        <TaskStyled theme={theme}>
            <h1>{title}</h1>
            <div className="task-grid">
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} />
                 ))}
            </div>


           {/* <CreateContent/>  */}
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