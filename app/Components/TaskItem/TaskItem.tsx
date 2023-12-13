"use client"

import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import { FaEdit, FaHeart, FaRemoveFormat, FaTrash } from 'react-icons/fa';
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

    const { theme } = useGlobalState();

    return (
        <TaskItemsStyled theme={theme}>
            <p>{title}</p>
            <p>{description}</p>
            <p className='date'>{date}</p>
            <div className="task-footer">
                {
                    isCompleted ? (
                        <button className='completed'>Completed</button>
                    ) : (
                            <button className='Incomplete'>Incomplete</button>
                    )
                }
                <button className="edit"><FaEdit/></button>
                <button className="delete"><FaTrash/></button>
            </div>
        </TaskItemsStyled>
    );
};

const TaskItemsStyled = styled.div`
    padding: 1.2rem 1rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.borderColor2};
    box-shadow: ${(props) => props.theme.shadow7};
    border: 2px solid ${(props) => props.theme.borderColor2};
    height: 16rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .date{
        margin-top: auto;
    }
`

export default TaskItem;