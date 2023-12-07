'use client'
import { useState, useEffect } from "react";


export const isTouchScreenDevice = () => {
    const [width, setWidth] = useState<number>();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (e) {
        return false;
    }
}