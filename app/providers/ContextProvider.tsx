"use client"

import React from 'react';
import GlobalStylesProvider from './GlobalStylesProvider';

interface Props {
    children: React.ReactNode;
}

const ContextProvider = ({children}: Props) => {
    return (
        <GlobalStylesProvider>
            {children}
        </GlobalStylesProvider>
    );
};

export default ContextProvider;