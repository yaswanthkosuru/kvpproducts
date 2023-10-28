import Image from 'next/image';
import { useState } from 'react';
import downarrow from '@public/assets/down-arrow.svg';
import { Dispatch, SetStateAction } from 'react';
type props = {
    setToggleDropdown: Dispatch<SetStateAction<boolean>>
}
const Arrow = ({ setToggleDropdown }: props) => {
    const [rotation, setRotation] = useState(0);

    const rotateArrow = () => {
        setToggleDropdown(prev => !prev)
        setRotation((prevRotation) => (prevRotation + 180));
    };


    return (
        <div className=''
            onClick={rotateArrow}
        >
            <Image
                src={downarrow}
                alt='none'
                width={24}
                height={24}
                style={{ transform: `rotate(${rotation}deg)` }}
                className=' cursor-pointer duration-500'
            />
        </div>
    );
};

export default Arrow;
