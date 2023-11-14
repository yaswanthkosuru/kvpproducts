import DownArrowSVG from '@components/icons/Downarrowsvg';
import Image from 'next/image';
import { useState } from 'react';

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
            <DownArrowSVG />
        </div>
    );
};

export default Arrow;
