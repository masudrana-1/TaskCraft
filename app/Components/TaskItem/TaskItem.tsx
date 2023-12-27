"use client"

import Modal from '@/app/completed/Models/Modal';
// import UpdateContent from '@/app/completed/Models/UpdateContent';
import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

interface Props{
    title: string;
    description: string,
    date: string,
    isCompleted: boolean;
    isImportant: boolean;
    id: string;
    
}

const TaskItem = ({ title, description, date, isCompleted, isImportant ,id  }: Props) => {

    const { theme, deleteTask, updateTask, modal, openModal } = useGlobalState();

    return (
        <TaskItemsStyled theme={theme} className='transition-all'>
            {/* {modal && <Modal content={ <UpdateContent/>} />} */}
            <h1>{title}</h1>
            <p>{description}</p>
            <p className='date'>{date}</p>
            <div className="task-footer flex justify-between">
                {
                    isCompleted ? (
                        <button
                            className='completed'
                            onClick={() => {
                                const task = {
                                    id,
                                    isCompleted: !isCompleted
                                };

                                updateTask(task)
                            }}
                        >
                            Completed
                        </button>
                    ) : (
                            <button
                                className='incomplete'
                                onClick={() => {
                                const task = {
                                    id,
                                    isCompleted: !isCompleted
                                };

                                updateTask(task)
                            }}
                            >
                                Incomplete
                            </button>
                    )
                }
                <div className='flex gap-5'>
                    <div className="relative inline-block group">
                        <button
                            className=" text-white py-2 rounded"
                            onClick={() => {
                                const task = {
                                    id,
                                    isImportant: !isImportant
                                };

                                updateTask(task)
                            }}
                        >
                            {isImportant ? <FaStar className="text-red-700"/> : <FaStar />}
                        </button>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-center text-xs py-2 px-4 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                            Important
                        </div>
                    </div>
                    
                    {/* <button className="relative inline-block group">
                        <button className=" text-white py-2 rounded"><FaEdit/></button>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-center text-xs py-2 px-4 rounded absolute bottom-full left-1/2 transform -translate-x-1/2"
                        >
                            Edit
                        </div>
                    </button> */}
                    <div className='relative inline-block group'>
                        <button 
                        className="text-white py-2 rounded"
                        onClick={() => {
                            deleteTask(id)
                        }}
                    >
                        <FaTrash className="hover:text-red-600 deleteicon"/>
                        </button>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-center text-xs py-2 px-4 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        </TaskItemsStyled>
    );
};

const TaskItemsStyled = styled.div`
    background-color: rgb(219, 218, 218);
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    /* box-shadow: inset 0 0 60px 4px #000000f8; */
    box-shadow:-7px -6px 5px 0px rgba(255, 255, 255, 0.425),
    7px 6px 5px 0px rgba(88, 88, 88, 0.425);
    
    &:hover{
            /* box-shadow: inset 0 0 80px 20px #000000f8; */
            transform: scale(1.1);
        }

    height: 24rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .date{
        margin-top: auto;
    }

    > h1{
        font-size: 1.5rem;
        font-weight: 600;
    }

    .task-footer{
        align-items: center;
        gap: 1.2rem;

        button{
            border: none;
            outline: none;
            cursor: pointer;

            i{
                font-size: 1.4rem;
                color: ${(props) => props.theme.colorGrey2};
            }
        }

        .completed, .incomplete{
            display: inline-block;
            padding: 0.4rem 1rem;
            /* background: ${(props) => props.theme.colorDanger}; */
            border-radius: 30px
        }

        .incomplete{
            box-shadow:-7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            7px 6px 5px 0px rgba(88, 88, 88, 0.425);
        }

        .completed
        {
            /* background: ${(props) => props.theme.colorGreenDark}; */
            box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);
        }

        .deleteicon{
            box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);
        }
    }
`

export default TaskItem;