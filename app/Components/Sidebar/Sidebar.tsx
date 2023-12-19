"use client"

import React from 'react';
import { styled } from 'styled-components';
import { useGlobalState } from '../../context/globalContextProvider';
import Image from 'next/image';
import menu from "../../utils/menu";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { FaArrowLeft, FaArrowRight, FaBars, FaCaretRight, FaSignOutAlt } from 'react-icons/fa';
import { UserButton, useClerk, useUser } from '@clerk/nextjs';



const Sidebar = () => {

    // theme 
    const { theme, collapsed, collapsedMenu } = useGlobalState();
    // console.log(theme);
    
    // signout button 
    const { signOut } = useClerk();
    

    // user 
    const { user } = useUser();
    // console.log(user)

    const { firstName, lastName, imageUrl, emailAddresses } = user || { firstName: "", lastName: "", imageUrl: "", emailAddresses: [] };

    // const email = emailAddresses[0].emailAddress;


    const router = useRouter();
    const pathName = usePathname();

    const handleClick = (link: string) => {
        router.push(link)
    }

    return (
        <SidebarStyled theme={theme} collapsed={collapsed} className='bg-[#0a111e] shadow-xl'>
            <button
                className='toggle-nav bg-[#0a111e] shadow-xl'
                onClick={collapsedMenu}
            >
                {collapsed? <FaBars /> : <FaArrowLeft/>}
            </button>
            <div className="profile">
                <div className="profile-overlay">

                </div>
                <div className="image">
                    <Image width={70} height={70} src={imageUrl} alt='profile'/>
                </div>
                <div className="user-btn absolute z-20 top-0 w-full h-full">
                    <UserButton/>
                </div>
                <h1>
                    {
                        firstName ? <>{firstName} {lastName}</> : <span className='text-[6px]'>{ emailAddresses[0]?.emailAddress}</span>
                    }
                </h1>
            </div>
            <ul className="nav-items">
                    {menu.map((item, i) => {

                        const link = item.link;

                        return (
                            <div key={i}>
                                <li className={`nav-item ${pathName === link ? "active" : ""}`} onClick={() => { handleClick(link) }}>
                                    {item.icon}
                                    <Link href={link}>{ item.title}</Link>
                                </li>
                            </div>
                        )
                    })}
            </ul>
            <div className="sign-out relative m-5">
                <Button
                    name={"Sign Out"}
                    type={"submit"}
                    padding={"0.4rem 0.8rem"}
                    borderRad={"0.8rem"}
                    fw={"500"}
                    fs={"1.2rem"}
                    icon={<FaSignOutAlt />}
                    click={() => {
                        signOut(()=> router.push("/signin"))
                    }}
                />
            </div>
        </SidebarStyled>
    );
};


// style components 
const SidebarStyled = styled.nav<{collapsed: boolean}>`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    /* height: 100vh; */
    /* background-color: ${(props) => props.theme.colorBg2}; */
    border-right: 2px solid ${(props) => props.theme.borderColor2};
    /* border-radius: 1rem; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media screen and (max-width: 768px){
        position: fixed;
        height: 100vh;
        z-index: 100;

        border-right: none;

        /* collapsed  */
        transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
        transform: ${(props) => props.collapsed ? "translateX(-107%)" : "translateX(0)"};
        
        .toggle-nav{
            display: block !important;
    
        }

    }

    

    .toggle-nav{
        display: none;
        padding: 10px 0.9rem;
        position: absolute;
        right: -43px;
        top: 5rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        /* background-color: ${(props) => props.theme.colorBg2}; */
        /* border-right: 2px solid ${(props) => props.theme.borderColor2}; */
        /* border-top: 2px solid ${(props) => props.theme.borderColor2}; */
        /* border-bottom: 2px solid ${(props) => props.theme.borderColor2}; */
    }

    

    .user-btn{
         .cl-rootBox{
            width: 100%;
            height: 100%;

            .cl-userButtonBox{
                width: 100%;
                height: 100%;

                .cl-userButtonTrigger{
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
            }
         }   
        }

    .profile{
        margin: 1.5rem;
        padding: 1rem 0.8rem;
        position: relative;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: 500;
        /* color: ${(props) => props.theme.colorGrey0}; */

        display: flex;
        align-items: center;


        .profile-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(10px);
            z-index: 0;
            /* background: ${(props) => props.theme.colorBg3}; */
            transition: all 0.55s linear;
            border-radius: 1rem;

            opacity: 0.2;
        }

        h1{
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;

            line-height: 1.4rem;
            /* margin-left: 10px; */
        }

        .image, h1{
            position: relative;
            z-index: 1;
        }

        .image{
            flex-shrink: 0;
            display: inline-block;
            overflow: hidden;
            transition: all 0.55s ease;
            border-radius: 100%;

            width: 70px;
            height: 70px;

            img{
                border-radius: 100%;
                transition: all 0.5s ease;
            }
        }

        h1{
            margin-left: 0.8rem;
            font-size: calc(1.2rem, 4vw, 1.4rem);
            line-height: 100%;
        }

        &:hover{
            .profile-overlay{
                opacity: 1;
                background: 2px solid ${(props) => props.theme.borderColor2};
            }

            img{
                transform: scale(1.1);
            }
        }
    }

    .nav-item{
        position: relative;
        padding: 0.8rem 1rem 0.9rem 2.1rem;
        margin: 0.3rem 0;

        display: grid;
        grid-template-columns: 40px 1fr;
        cursor: pointer;
        align-items: center;

        &::after{
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            /* background-color: black; */
            background-color: ${(props) => props.theme.activeNavLinkHover};
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        
        &::before{
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            /* background-color: gray; */
            /* background-color: ${(props) => props.theme.colorGreenDark}; */

            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
        }

        a{
            font-weight: 500;
            z-index: 2;
            transition: all 0.3s ease-in-out;
            line-height: 0;
        }

        i{
            display: flex;
            align-items: center;
            color: ${(props) => props.theme.colorIcons};
        }

        &:hover{
            &::after{
                width: 100%;
            }
        }
    }

    .active{
        background-color: ${(props) => props.theme.activeNavLink};

        i, a{
            color: ${(props) => props.theme.colorIcons2};
        }
    }

    .active::before{
        width: 0.3rem;
    }

    
`;

export default Sidebar;