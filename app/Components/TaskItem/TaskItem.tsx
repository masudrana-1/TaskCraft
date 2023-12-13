"use client"

import React from 'react';
import { FaEdit, FaHeart, FaRemoveFormat, FaTrash } from 'react-icons/fa';

interface Props{
    title: string;
    description: string,
    date: string,
    isCompleted: boolean;
    id: string;
    
}

const TaskItem = ({ title, description, date, isCompleted, id  }: Props) => {
    
    // const { title, description, date, completed, important } = task;

    return (
        <div>
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
        </div>
    );
};

export default TaskItem;