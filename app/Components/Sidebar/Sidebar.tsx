"use client"

import React from 'react';
import { styled } from 'styled-components';
import { useGlobalState } from '../../context/globalContextProvider'

const Sidebar = () => {

    // theme 
    const {theme} = useGlobalState();
    
    // console.log(theme);
    // console.log(theme)

    return (
        <SidebarStyled theme={theme}>
            <h1>Sidebar</h1>
        </SidebarStyled>
    );
};


// style components 
const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
`;

export default Sidebar;