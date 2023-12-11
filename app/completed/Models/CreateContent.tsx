"use client"

import React, { useState } from 'react';

const CreateContent = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState("false");
    const [important, setImportant] = useState("false");


    const handleChange = (name: string) => (e: any) => {
        switch (name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.value);
                break;
            case "important":
                setImportant(e.target.value);
                break;
            default:
                break;
        }
    }

    // console.log(title, description)

    return (
        <div>
            <h1>Create a Task</h1>
            <div className='input-control'>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    placeholder='title'
                    onChange={handleChange("title")}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="description">Description</label>
                <textarea
                    rows={4}
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    placeholder='description'
                    onChange={handleChange("description")}
                >
                /</textarea>
            </div>
            <div className='input-control'>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={handleChange("date")}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="completed">Completed</label>
                <input
                    type="checkbox"
                    name="completed"
                    id="completed"
                    value={completed.toString()}
                    onChange={handleChange("completed")}
                />
            </div>
            <div className='input-control'>
                <label htmlFor="Important">Important</label>
                <input
                    type="checkbox"
                    name="important"
                    id="important"
                    value={important.toString()}
                    onChange={handleChange("important")}
                />
            </div>

            <div className="submit-btn">
                <button type='submit'>
                    <span>Submit</span>
                </button>
            </div>
        </div>
    );
};

export default CreateContent;