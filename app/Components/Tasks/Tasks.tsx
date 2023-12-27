"use client"

import CreateContent from '@/app/completed/Models/CreateContent';
import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import styled from 'styled-components';
import TaskItem from '../TaskItem/TaskItem';
import { FaPlus } from 'react-icons/fa';
import Modal from '@/app/completed/Models/Modal';



interface Props{
    title: string;
    tasks: any[];
}

const Tasks = ({title, tasks}: Props) => {

    const { theme,  isLoading, openModal, modal } = useGlobalState();

    return (
        <TaskStyled theme={theme} className='font-sans'>
            {modal && <Modal content={ <CreateContent/>} />}
            <h1 className='text-center capitalize font-serif text-xl underline underline-offset-8'>{title}</h1>
            <div className="tasks grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-7">
                {tasks?.map((task) => (
                    <TaskItem
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        isCompleted={task.isCompleted}
                        isImportant={task.isImportant}
                        id={task.id}
                    />
                ))}
                <button
                    className="create-task transition-all h-[15rem] lg:h-[24rem]"
                    onClick={openModal}
                >
                    <FaPlus />
                    Add A New Task
                </button>
            </div>
        </TaskStyled>
    );
};


const TaskStyled = styled.main`
    
    background-color: rgb(219, 218, 218);
    padding: 2rem;
    width: 100%;
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
            background-color: ${(props) => props.theme.activePrimaryGreen};
            border-radius: 0.5rem;
        }
    }

    .create-task{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        border-radius: 1rem;
        /* border: 3px dotted ${(props) => props.theme.colorGrey5}; */
        /* box-shadow: inset 0 0 60px 4px #000000f8; */
        box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);
        transition: all 0.3s ease;

        &:hover{
            /* color: ${(props) => props.theme.colorGrey1}; */
            /* box-shadow: inset 0 0 80px 10px #000000f8; */
            /* border: none; */
            /* box-shadow:-7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            7px 6px 5px 0px rgba(88, 88, 88, 0.425); */
            transition: all 0.3s ease;
            transform: scale(1.1);
        }
    }
`;

export default Tasks;