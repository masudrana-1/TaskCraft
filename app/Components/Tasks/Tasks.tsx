"use client"

import CreateContent from '@/app/completed/Models/CreateContent';
import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/TaskItem';
import { FaPlus } from 'react-icons/fa';



interface Props{
    title: string;
    tasks: any[];
}

const Tasks = ({title, tasks}: Props) => {

    const { theme,  isLoading } = useGlobalState();
    
    // const isLoading = true

    return (
        <TaskStyled theme={theme}>
            <h1>{title}</h1>
            {!isLoading ? <div className="tasks grid">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        isCompleted={task.completed}
                        id={task.id}
                    />
                ))}
                <button className="create-task">
                    <FaPlus />
                    Add A New Task
                </button>
            </div>
                :
                <div className='w-full h-full flex items-center justify-center'>
                    <span className="loader"></span>
                </div>
            }


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

    .tasks{
        margin: 2rem 0;
    }

    >h1{
        font-size: calc(1.5rem, 2vw, 2rem);
        font-weight: 800;
        position: relative;

        &::after{
            position: absolute;
            content: "";
            left: 0;
            bottom: -0.5rem;
            width: 3rem;
            height: 0.2rem;
            /* background-color: black; */
            background-color: ${(props) => props.theme.activePrimaryGreen};
            border-radius: 0.5rem;
        }
    }

    .create-task{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 16rem;
        color: ${(props) => props.theme.colorGrey2};
        font-weight: 600;
        cursor: pointer;
        border-radius: 1rem;
        border: 3px dashed ${(props) => props.theme.colorGrey5};
        transition: all 0.3s ease;

        &:hover{
            background-color: ${(props) => props.theme.colorGrey5};
            color: ${(props) => props.theme.colorGrey1};
        }
    }
`;

export default Tasks;