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
    }, [rating])
    const fivestar = arr.map((val, index) => {

        return (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 100 100">
                <polygon points="50,10 61.8,38.2 92.4,38.2 68.2,57.8 79.6,86 50,70.6 20.4,86 31.8,57.8 7.6,38.2 38.2,38.2"
                    fill={val ? `gold ` : 'white'} />
                <path d="M50,10 L61.8,38.2 L92.4,38.2 L68.2,57.8 L79.6,86 L50,70.6 L20.4,86 L31.8,57.8 L7.6,38.2 L38.2,38.2 Z"
                    stroke={val ? 'goldenrod' : 'dimgray'} strokeWidth="6" fill="none" />
            </svg>

        )
    })
    return (
        <div className="flex">
            {fivestar}
        </div>
    )


}
