import Image from "next/image";
import { useEffect, useState } from "react";
type props = {
    rating: number
}
export default function Fivestar({ rating }: { rating: number }) {
    const [arr, setArr] = useState([0, 0, 0, 0, 0]);


    useEffect(() => {
        const newarr = [0, 0, 0, 0, 0]
        for (let i = 0; i < 5; i++) {
            newarr[i] = i < rating ? 1 : 0;
        }

        setArr(newarr);
    }, [rating]);

    const fivestar = arr.map((val, index) => {
        return (
            <Image
                key={index}
                src={val ? '/fstar.svg' : '/star.svg'}
                width={18}
                height={18}
                alt='star'
            />
        );
    });

    return (

        < div className="flex flex-row w-10 h-4 items-center" >
            {fivestar} ({rating ? rating : 0})
        </div >
    )
}
