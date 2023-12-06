"use client"

import React, { Children } from 'react';
import { styled } from 'styled-components';

interface Props {
    children: React.ReactNode;
}

const GlobalStylesProvider = ({children}: Props) => {
    return (
        <GlobalStyles>
            {children}
        </GlobalStyles>
    );
};


const GlobalStyles = styled.div`
    padding: 2.5rem;
    display: flex;
    gap: 2.5rem;
    height: 100%;
`;

export default GlobalStylesProvider;