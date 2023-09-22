import { useEffect, useState } from 'react';

export const useCheckMobile = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== `undefined` && window.innerWidth < 768);

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };        
        }
    }, []);

    return isMobile;
};
