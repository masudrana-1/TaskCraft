"use client"

import { useGlobalState } from '@/app/context/globalContextProvider';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const CreateContent = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState("false");
    const [important, setImportant] = useState("false");


    // theme 
    const { theme } = useGlobalState();


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


    const handleSubmit = async(e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            important
        };
        try {
            const res = await axios.post("/api/tasks", task);

            if (res.data.error) {
                toast.error(res.data.error)
            }

            toast.success("Task created successfully")

            // console.log(completed, important)
            
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        }
        // console.log(task)
    }


    return (
        <ContentStyled onSubmit={handleSubmit} theme={theme}>
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
                    className='text-black'
                />
            </div>
            <div className='input-control'>
                <label htmlFor="description">Description</label>
                <textarea
                    rows={4}
                    // type='text'
                    name="description"
                    id="description"
                    value={description}
                    placeholder='description'
                    onChange={handleChange("description")}
                    className='text-black'
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
                    className='text-black'
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

            <div className="submit-btn border border-purple-600">
                <button type='submit'>
                    <span>Submit</span>
                </button>
            </div>
        </ContentStyled>
    );
};

const ContentStyled = styled.form`
    >h1{
        font-size: clamp(1.2rem, 5vw, 1.6rem);
        font-weight: 600;
    }

    box-shadow: 0 0 1rem rgba(0,0,0,0.3);
    border-radius: ${(props) => props.theme.borderRadiusMd2};
    color: ${(props) => props.theme.colorGrey1};

    .input-control{
        position: relative;
        margin: 1.6rem 0;
        font-weight: 500;


        input, textarea{
            width: 100%;
            border: none;
            border-radius: 5px;
            padding: 1rem;
            resize: none;

            background-color: ${(props) => props.theme.colorGreyDark};
            color: ${(props) => props.theme.colorGrey2};
        }
    }
`;

export default CreateContent;