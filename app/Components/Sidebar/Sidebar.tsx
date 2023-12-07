"use client"

import React from 'react';
import { styled } from 'styled-components';
import { useGlobalState } from '../../context/globalContextProvider'
import Image from 'next/image';

const Sidebar = () => {

    // theme 
    const {theme} = useGlobalState();
    
    // console.log(theme);
    // console.log(theme)

    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay">

                </div>
                <div className="image">
                    <Image width={70} height={70} src="/masud.jpg" alt='profile'/>
                </div>
                <h1>
                    <span>Masud</span>
                    <span>Rana</span>
                </h1>
            </div>
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