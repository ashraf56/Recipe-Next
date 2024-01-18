"use client";
import React from 'react';
import ContextHome from '../context/ContextHome';

const Porividers = ({ children }) => {
    return (
        <ContextHome>
            {children}
        </ContextHome >
    )
};

export default Porividers;