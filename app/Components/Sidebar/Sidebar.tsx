"use client"

import React from 'react';
import { styled } from 'styled-components';
import { useGlobalState } from '../../context/globalContextProvider';
import Image from 'next/image';
import menu from "../../utils/menu";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {

    // theme 
    const {theme} = useGlobalState();
    
    // console.log(theme);

    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (link: string) => {
        router.push(link)
    }

    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay">

                </div>
                <div className="image">
                    <Image width={70} height={70} className='rounded-full' src="/masud.jpg" alt='profile'/>
                </div>
                <h1>
                    <span>Masud</span>
                    <span>Rana</span>
                </h1>
                <ul className="nav-items">
                    {menu.map((item, i) => {

                        const link = item.link;

                        return (
                            <div key={i}>
                                <li className={`nav-item flex ${pathName === link ? "active" : ""}`} onClick={() => { handleClick(link) }}>
                                    {item.icon}
                                    <Link href={link}>{ item.title}</Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
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