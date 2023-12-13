"use client"

import React from 'react';

interface Props{
    icon?: React.ReactNode;
    name?: string;
    background?: string;
    padding?: string;
    borderRad?: string;
    fw?: string;
    fs?: string;
    click?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    border?: string;
}


const Button = ({icon, name, background, padding, border, borderRad, fw, fs, click, type}: Props) => {
    return (
        <div>
            Button
        </div>
    );
};

export default Button;