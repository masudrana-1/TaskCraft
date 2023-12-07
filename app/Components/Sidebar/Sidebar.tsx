"use client"

import React from 'react';
import { styled } from 'styled-components';
import { useGlobalState } from '../../context/globalContextProvider'

const Sidebar = () => {

    // theme 
    const {theme} = useGlobalState();
    
    // console.log(theme);
    console.log(theme)

    return (
        <SidebarStyled>
            <h1>Sidebar</h1>
        </SidebarStyled>
    );
};


// style components 
const SidebarStyled = styled.nav`

`;

export default Sidebar;