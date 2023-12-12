"use client"

import React from 'react';

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
                <button className='completed'>Completed</button>
            </div>
        </div>
    );
};

export default TaskItem;