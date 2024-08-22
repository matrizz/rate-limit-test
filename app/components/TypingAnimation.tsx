//@ts-nocheck
'use client'
import { TypeAnimation } from 'react-type-animation';

export const TypeWriteAnimation = ({ string }) => {
    return (
        <TypeAnimation
            sequence={string}
            wrapper="span"
            cursor={true}
            speed={80}
            className='text-xl'
        />
    );
};