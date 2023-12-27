"use client"


import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';
import styled from 'styled-components';

interface Props{
    content: React.ReactNode;
}

const Modal = ({content}: Props ) => {

    const {closeModal, theme} = useGlobalState()

    return (
        <ModalStyled theme={theme} className='font-sans'>
            <div
                className="modal-overlay"
                onClick={closeModal}
                
            >
            </div>
            <div className="modal-content">
                {content}
            </div>
        </ModalStyled>
    );
};

const ModalStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #5757575f;
        filter: blur(10px);
    }

    .modal-content{
        padding: 2rem;
        position: relative;
        max-width: 630px;
        width: 100%;
        z-index: 100;

        border-radius: 1rem;
        box-shadow:-7px -6px 5px 0px rgba(255, 255, 255, 0.425),
            7px 6px 5px 0px rgba(88, 88, 88, 0.425);
        background-color: #cbcbcc;
        /* background-color: #12222efa; */
        /* box-shadow: inset 0 0 40px 2px #0d0b0bf8; */
        border-radius: ${(props) => props.theme.borderRadiusMd2};
    }
`;

export default Modal;