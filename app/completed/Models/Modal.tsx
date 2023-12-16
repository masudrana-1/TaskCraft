"use client"


import { useGlobalState } from '@/app/context/globalContextProvider';
import React from 'react';

interface Props{
    content: React.ReactNode;
}

const Modal = ({content}: Props ) => {

    const {closeModal} = useGlobalState()

    return (
        <div>
            <div
                className="modal-overlay"
                onClick={closeModal}
            >
                {content}
            </div>
        </div>
    );
};

export default Modal;