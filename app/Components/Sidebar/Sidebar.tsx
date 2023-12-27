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
        <SidebarStyled theme={theme} collapsed={collapsed} className='bg-[#cbcbcc] font-sans'>
            <button
                className='toggle-nav bg-[#cbcbcc]'
                onClick={collapsedMenu}
            >
                {collapsed? <FaBars className="text-lg"/> : <FaArrowLeft/>}
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
            <div className="sign-out relative m-5 flex justify-center items-center rounded-3xl">
                <Button
                    name={"Sign Out"}
                    type={"submit"}
                    padding={"0.4rem 0.8rem"}
                    borderRad={"0.8rem"}
                    fw={"500"}
                    fs={"1.2rem"}
                    icon={<FaSignOutAlt className="text-black"/>}
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
    /* border-right: 2px solid ${(props) => props.theme.borderColor2}; */

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
        padding: 19px 1.5rem;
        position: absolute;
        right: -61px;
        top: 2rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
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

        display: flex;
        align-items: center;

        box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);


        .profile-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(10px);
            z-index: 0;
            transition: all 0.55s linear;
            border-radius: 1rem;

            opacity: 0.2;
        }

        h1{
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;

            line-height: 1.4rem;
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
                transform: scale(1.3);
            }
        }
    }

    .nav-item{
        position: relative;
        padding: 0.8rem 1rem 0.9rem 2.1rem;
        margin: 1rem 0;
        /* margin-left: 1rem; */

        display: grid;
        border-radius: 10px;
        grid-template-columns: 40px 1fr;
        cursor: pointer;
        align-items: center;
        box-shadow:-7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            7px 6px 5px 0px rgba(88, 88, 88, 0.425);

        &::after{
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.425);
            box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);
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
        /* background-color: ${(props) => props.theme.activeNavLink}; */
        box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);

        i, a{
            /* color: ${(props) => props.theme.colorIcons2}; */
        }
    }

    .active::before{
        width: 0.3rem;
    }

    .sign-out{
        box-shadow:inset -7px -6px 5px 0px rgba(255, 255, 255, 0.425),
                    inset 7px 6px 5px 0px rgba(88, 88, 88, 0.425);

            &:hover{
                box-shadow:inset -10px -6px 5px 0px rgba(255, 255, 255, 0.611),
                inset 10px 6px 5px 0px rgba(63, 63, 63, 0.425);
            }
    }
    
`;

export default Sidebar;