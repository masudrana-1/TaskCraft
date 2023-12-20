"use client"

import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

interface Props{
    title: string;
    description: string,
    date: string,
    isCompleted: boolean;
    id: string;
    
}

const TaskItem = ({ title, description, date, isCompleted, id  }: Props) => {
    
    // const { title, description, date, completed, important } = task;

    const { theme, deleteTask, updateTask } = useGlobalState();

    return (
        <TaskItemsStyled theme={theme} className='bg-[#0d1f2cfa] hover:bg-[#213846fa] transition-all'>
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

                                updateTask()

                                // console.log(updateTask())
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
                        <button className=" text-white py-2 rounded"><FaStar/></button>
                        <div className="hidden group-hover:block bg-gray-800 text-white text-center text-xs py-2 px-4 rounded absolute bottom-full left-1/2 transform -translate-x-1/2">
                            Important
                        </div>
                    </div>
                    
                    <button className="edit"><FaEdit/></button>
                    <button 
                        className="delete"
                        onClick={() => {
                            deleteTask(id)
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </TaskItemsStyled>
    );
};

const TaskItemsStyled = styled.div`
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    /* background-color: ${(props) => props.theme.borderColor2}; */
    /* box-shadow: ${(props) => props.theme.shadow7}; */
    /* border: 2px solid ${(props) => props.theme.borderColor2}; */

    /* background-color: #171923e6; */

    /* box-shadow: 10px #fff; */

    
    /* refercence color  */
    /* bg-[#12222efa] hover:bg-[#0e1d27fa] */
    /* box-shadow: 0 0 40px 1px #a63939f8; */
    box-shadow: inset 0 0 60px 4px #000000f8;
    
    &:hover{
            /* box-shadow: inset 0 0 5px 5px #180629f8; */
            box-shadow: inset 0 0 80px 20px #000000f8;
        }

    height: 16rem;
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
        /* display: flex; */
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

        /* .important{
            margin-left: auto;
        }
        .edit{
            margin-left: auto;
        } */

        .completed, .incomplete{
            display: inline-block;
            padding: 0.4rem 1rem;
            background: ${(props) => props.theme.colorDanger};
            border-radius: 30px
        }

        .completed
        {
            background: ${(props) => props.theme.colorGreenDark};
        }
    }
`

export default TaskItem;