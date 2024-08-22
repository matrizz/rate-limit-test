'use client'
import { Sequence, TypeAnimation } from 'react-type-animation';

export const TypeWriteAnimation = ({ string }: { string: Sequence }) => {
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