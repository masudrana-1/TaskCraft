"use client"

import React from 'react';
import { GlobalProvider } from '../context/globalContextProvider';
import { Toaster } from 'react-hot-toast';

interface Props {
    children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
    

    //****************************************** */ 
    // only for sidebar flex issue 
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
        }, 200);
    }, [])
    
    if (!isReady) {
        return null
    }
    //******************************************** */


    return (
        <GlobalProvider>
            <Toaster/>
            {children}
        </GlobalProvider>
    );
};

export default ContextProvider;