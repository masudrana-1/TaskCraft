"use client"

import React from 'react';
import { SignUp } from "@clerk/nextjs";

const page = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <SignUp/>
        </div>
    );
};

export default page;