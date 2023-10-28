'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'; // Correct import statement for useRouter

const Page = () => {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push('/products');
    };


    return (
        <div>
            order placed sucessfully
            <button onClick={handleButtonClick}
                className="text-blue-500">
                got to main menu
            </button>
        </div>
    );
};

export default Page;
